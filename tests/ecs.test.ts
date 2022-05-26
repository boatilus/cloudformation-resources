import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { ECS } from "../ecs/index.ts";

Deno.test("ECS", () => {
  assertEquals(ECS.CapacityProvider, "AWS::ECS::CapacityProvider");
  assertEquals(ECS.Cluster, "AWS::ECS::Cluster");
  assertEquals(
    ECS.ClusterCapacityProviderAssociations,
    "AWS::ECS::ClusterCapacityProviderAssociations",
  );
  assertEquals(ECS.PrimaryTaskSet, "AWS::ECS::PrimaryTaskSet");
  assertEquals(ECS.Service, "AWS::ECS::Service");
  assertEquals(ECS.TaskDefinition, "AWS::ECS::TaskDefinition");
  assertEquals(ECS.TaskSet, "AWS::ECS::TaskSet");
});
