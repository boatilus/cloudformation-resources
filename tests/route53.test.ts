import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { Route53 } from "../route53/index.ts";

Deno.test("Route53", () => {
  assertEquals(Route53.DNSSEC, "AWS::Route53::DNSSEC");
  assertEquals(Route53.HealthCheck, "AWS::Route53::HealthCheck");
  assertEquals(Route53.HostedZone, "AWS::Route53::HostedZone");
  assertEquals(Route53.KeySigningKey, "AWS::Route53::KeySigningKey");
  assertEquals(Route53.RecordSet, "AWS::Route53::RecordSet");
  assertEquals(Route53.RecordSetGroup, "AWS::Route53::RecordSetGroup");
});
