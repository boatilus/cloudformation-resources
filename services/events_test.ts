import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { Events } from "./events.ts";

Deno.test("Events", () => {
  assertEquals(Events.ApiDestination, "AWS::Events::ApiDestination");
  assertEquals(Events.Archive, "AWS::Events::Archive");
  assertEquals(Events.Connection, "AWS::Events::Connection");
  assertEquals(Events.Endpoint, "AWS::Events::Endpoint");
  assertEquals(Events.EventBus, "AWS::Events::EventBus");
  assertEquals(Events.EventBusPolicy, "AWS::Events::EventBusPolicy");
  assertEquals(Events.Rule, "AWS::Events::Rule");
});
