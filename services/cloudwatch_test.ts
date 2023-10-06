import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { CloudWatch } from "./cloudwatch.ts";

Deno.test("CloudWatch", () => {
  assertEquals(CloudWatch.Alarm, "AWS::CloudWatch::Alarm");
  assertEquals(CloudWatch.AnomalyDetector, "AWS::CloudWatch::AnomalyDetector");
  assertEquals(CloudWatch.CompositeAlarm, "AWS::CloudWatch::CompositeAlarm");
  assertEquals(CloudWatch.Dashboard, "AWS::CloudWatch::Dashboard");
  assertEquals(CloudWatch.InsightRule, "AWS::CloudWatch::InsightRule");
  assertEquals(CloudWatch.MetricStream, "AWS::CloudWatch::MetricStream");
});
