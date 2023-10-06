import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { SQS } from "./sqs.ts";

Deno.test("SQS", () => {
  assertEquals(SQS.Queue, "AWS::SQS::Queue");
  assertEquals(SQS.QueueInlinePolicy, "AWS::SQS::QueueInlinePolicy");
  assertEquals(SQS.QueuePolicy, "AWS::SQS::QueuePolicy");
});
