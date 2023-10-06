import * as path from "https://deno.land/std@0.140.0/path/mod.ts";
import * as eta from "https://deno.land/x/eta@v1.12.3/mod.ts";
import { cheerio } from "https://deno.land/x/cheerio@1.0.4/mod.ts";

const basePath =
  "https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide";

const servicePages = [
  { service: "APIGateway", page: "AWS_ApiGateway.html" },
  { service: "CloudWatch", page: "AWS_CloudWatch.html" },
  { service: "DynamoDB", page: "AWS_DynamoDB.html" },
  { service: "EC2", page: "AWS_EC2.html" },
  { service: "ECR", page: "AWS_ECR.html" },
  { service: "ECS", page: "AWS_ECS.html" },
  { service: "Events", page: "AWS_Events.html" },
  { service: "IAM", page: "AWS_IAM.html" },
  { service: "KMS", page: "AWS_KMS.html" },
  { service: "Lambda", page: "AWS_Lambda.html" },
  { service: "Logs", page: "AWS_Logs.html" },
  { service: "Route53", page: "AWS_Route53.html" },
  { service: "S3", page: "AWS_S3.html" },
  { service: "SQS", page: "AWS_SQS.html" },
];

const bodyId = "main-col-body";
const listClass = "itemizedlist";

// Emits a /{service}/index.ts file
const serviceTemplate = `export class <%= it.service %> {
<% it.names.forEach(function(name){ %>
  static <%= name %> = "AWS::<%= it.service %>::<%= name %>";
<% }) %>
}`;

// Emits a /tests/{service}.test.ts file
const testTemplate =
  `import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts"
import { <%= it.service %> } from "./<%= it.filename %>"

Deno.test("<%= it.service %>", () => {
<% it.names.forEach(function(name){ %>
  assertEquals(<%= it.service %>.<%= name %>, "AWS::<%= it.service %>::<%= name %>");
<% }) %>
})`;

// Emits index.ts, which re-exports all services under the AWS class
const indexTemplate = `<% it.joined.forEach(function(service){ %>
import { <%= service.name %> } from "./services/<%= service.filename %>"
<% }) %>

export class AWS {
<% it.joined.forEach(function(service){ %>
  static <%= service.name %> = <%= service.name %>;

<% }) %>
}`;

const services: string[] = [];

for (const sp of servicePages) {
  console.log(`fetching identifiers for ${sp.service}..`);

  const url = path.join(basePath, sp.page);

  try {
    const res = await fetch(url);
    const html = await res.text();
    const $ = cheerio.load(html);

    const body = $(`#${bodyId}`);
    if (!body) {
      throw new Error("unable to find content body");
    }

    const items = body.find(`ul.${listClass} li.listitem p a`);
    if (!items) {
      throw new Error("found no list items");
    }

    let names: string[] = [];

    items.each((_, item) => {
      const text = $(item).text();

      const split = text.split("::");
      const name = split[split.length - 1];

      names = [...names, name];
    });

    const rendered = await eta.render(serviceTemplate, {
      service: sp.service,
      names,
    });

    // e.g., EC2 yields ec2.ts.
    const filenameRoot = sp.service.toLowerCase();

    if (rendered) {
      try {
        await Deno.mkdir(path.join("src", filenameRoot));
      } catch {
        // The folder already exists; no big deal.
      }

      await Deno.writeTextFile(
        path.join("services", `${filenameRoot}.ts`),
        rendered,
      );
    }

    const testRendered = await eta.render(testTemplate, {
      filename: `${filenameRoot}.ts`,
      service: sp.service,
      names,
    });

    if (testRendered) {
      await Deno.writeTextFile(
        path.join("services", `${filenameRoot}_test.ts`),
        testRendered,
      );
    }

    services.push(sp.service);
  } catch (error) {
    console.error(error);
  }
}

const joined = services.map((service) => {
  return {
    name: service,
    filename: `${service.toLocaleLowerCase()}.ts`,
  };
});

const indexRendered = await eta.render(indexTemplate, {
  joined,
});

if (indexRendered) {
  await Deno.writeTextFile(path.join("mod.ts"), indexRendered);
}

// Run deno fmt
const command = new Deno.Command(Deno.execPath(), {
  args: [
    "fmt",
    "services/",
    "mod.ts",
  ],
});

// create subprocess and collect output
const { code, stderr } = await command.output();
if (code !== 0) {
  console.error(`deno fmt exited with: ${code}`);
  console.error(new TextDecoder().decode(stderr));
}
