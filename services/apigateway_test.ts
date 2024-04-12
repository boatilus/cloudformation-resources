import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { ApiGateway } from "./apigateway.ts";

Deno.test("ApiGateway", () => {
  assertEquals(ApiGateway.Account, "AWS::ApiGateway::Account");
  assertEquals(ApiGateway.ApiKey, "AWS::ApiGateway::ApiKey");
  assertEquals(ApiGateway.Authorizer, "AWS::ApiGateway::Authorizer");
  assertEquals(ApiGateway.BasePathMapping, "AWS::ApiGateway::BasePathMapping");
  assertEquals(
    ApiGateway.ClientCertificate,
    "AWS::ApiGateway::ClientCertificate",
  );
  assertEquals(ApiGateway.Deployment, "AWS::ApiGateway::Deployment");
  assertEquals(
    ApiGateway.DocumentationPart,
    "AWS::ApiGateway::DocumentationPart",
  );
  assertEquals(
    ApiGateway.DocumentationVersion,
    "AWS::ApiGateway::DocumentationVersion",
  );
  assertEquals(ApiGateway.DomainName, "AWS::ApiGateway::DomainName");
  assertEquals(ApiGateway.GatewayResponse, "AWS::ApiGateway::GatewayResponse");
  assertEquals(ApiGateway.Method, "AWS::ApiGateway::Method");
  assertEquals(ApiGateway.Model, "AWS::ApiGateway::Model");
  assertEquals(
    ApiGateway.RequestValidator,
    "AWS::ApiGateway::RequestValidator",
  );
  assertEquals(ApiGateway.Resource, "AWS::ApiGateway::Resource");
  assertEquals(ApiGateway.RestApi, "AWS::ApiGateway::RestApi");
  assertEquals(ApiGateway.Stage, "AWS::ApiGateway::Stage");
  assertEquals(ApiGateway.UsagePlan, "AWS::ApiGateway::UsagePlan");
  assertEquals(ApiGateway.UsagePlanKey, "AWS::ApiGateway::UsagePlanKey");
  assertEquals(ApiGateway.VpcLink, "AWS::ApiGateway::VpcLink");
});
