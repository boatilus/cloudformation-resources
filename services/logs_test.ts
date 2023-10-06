import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { Logs } from "./logs.ts";

Deno.test("Logs", () => {
  assertEquals(Logs.AccountPolicy, "AWS::Logs::AccountPolicy");
  assertEquals(Logs.Destination, "AWS::Logs::Destination");
  assertEquals(Logs.LogGroup, "AWS::Logs::LogGroup");
  assertEquals(Logs.LogStream, "AWS::Logs::LogStream");
  assertEquals(Logs.MetricFilter, "AWS::Logs::MetricFilter");
  assertEquals(Logs.QueryDefinition, "AWS::Logs::QueryDefinition");
  assertEquals(Logs.ResourcePolicy, "AWS::Logs::ResourcePolicy");
  assertEquals(Logs.SubscriptionFilter, "AWS::Logs::SubscriptionFilter");
});
