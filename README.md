# CloufFormation Resource Identifiers

I was tired of passing string values as CDK resource type identifiers in my
TypeScript projects, so I scraped AWS's docs and built a class-based typeset of
(a handful of) identifiers.

We have a type system; we can do _better_. Except for the project name: that bit
remains completely terrible.

## Installation

### npm

```sh
npm i --save-dev @boatlius/cdk-resource-names
```

### Yarn

```sh
yarn add --dev @boatilus/cdk-resource-names
```

## Usage

In your CDK TypeScript files:

```typescript
import { Template } from "aws-cdk-lib/assertions";
import { AWS } from "@boatlius/cdk-resource-names";

const app = newApp("dev");
const stack = new VpcStack(app, "vpc-stack", {});

const template = Template.fromStack(stack);
template.resourceCountIs(AWS.EC2.VPC, 1); // instead of the wholly-gnarly "AWS::EC2::VPC"
```

Alternatively, you can import just the service set:

```typescript
import { EC2 } from "@boatilus/cdk-resource-names/ec2";

const app = newApp("dev");
const stack = new VpcStack(app, "vpc-stack", {});

const template = Template.fromStack(stack);
template.resourceCountIs(EC2.VPC, 1);
```

## Building Typesets

Building (or re-building) the identifier sets requires
[Deno](https://deno.land). To scrape the AWS docs and generate the TypeScript
files, run:

```sh
deno run --allow-net --allow-write --allow-read scripts/scrape-identifiers.ts
```

## Contributing

Pull requests are welcome. To add services, add them to `servicePages` in
`scripts/scrape-identifiers.ts`, then run the build command.

> **NOTE**: Be sure to run `deno fmt` before committing to ensure consistent formatting.
