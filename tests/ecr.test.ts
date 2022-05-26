import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { ECR } from "../ecr/index.ts";

Deno.test("ECR", () => {
  assertEquals(ECR.PublicRepository, "AWS::ECR::PublicRepository");
  assertEquals(ECR.PullThroughCacheRule, "AWS::ECR::PullThroughCacheRule");
  assertEquals(ECR.RegistryPolicy, "AWS::ECR::RegistryPolicy");
  assertEquals(
    ECR.ReplicationConfiguration,
    "AWS::ECR::ReplicationConfiguration",
  );
  assertEquals(ECR.Repository, "AWS::ECR::Repository");
});
