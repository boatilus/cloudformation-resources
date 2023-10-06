import { build, emptyDir } from "https://deno.land/x/dnt@0.37.0/mod.ts";

await emptyDir("./dist");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./dist",
  packageManager: "pnpm",
  shims: {
    deno: true,
  },
  package: {
    author: "Ron Jones <ron@ovao.dev>",
    name: "cloudformation-resources",
    version: Deno.args[0],
    description:
      "Typed CloudFormation resource names for safety and auto-completion",
    license: "MIT",
    repository: {
      type: "git",
      url: "https://github.com/boatilus/cloudformation-resources.git",
    },
    homepage: "https://github.com/boatilus/cloudformation-resources",
    keywords: ["aws", "cdk", "cloudformation"],
    bugs: {
      url: "https://github.com/boatilus/cloudformation-resources/issues",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE.md", "dist/LICENSE");
    Deno.copyFileSync("README.md", "dist/README.md");
  },
});
