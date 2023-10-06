import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { APIGateway } from "./apigateway.ts";

Deno.test("APIGateway", () => {
  assertEquals(APIGateway.Account, "AWS::APIGateway::Account");
  assertEquals(APIGateway.ApiKey, "AWS::APIGateway::ApiKey");
  assertEquals(APIGateway.Authorizer, "AWS::APIGateway::Authorizer");
  assertEquals(APIGateway.BasePathMapping, "AWS::APIGateway::BasePathMapping");
  assertEquals(
    APIGateway.ClientCertificate,
    "AWS::APIGateway::ClientCertificate",
  );
  assertEquals(APIGateway.Deployment, "AWS::APIGateway::Deployment");
  assertEquals(
    APIGateway.DocumentationPart,
    "AWS::APIGateway::DocumentationPart",
  );
  assertEquals(
    APIGateway.DocumentationVersion,
    "AWS::APIGateway::DocumentationVersion",
  );
  assertEquals(APIGateway.DomainName, "AWS::APIGateway::DomainName");
  assertEquals(APIGateway.GatewayResponse, "AWS::APIGateway::GatewayResponse");
  assertEquals(APIGateway.Method, "AWS::APIGateway::Method");
  assertEquals(APIGateway.Model, "AWS::APIGateway::Model");
  assertEquals(
    APIGateway.RequestValidator,
    "AWS::APIGateway::RequestValidator",
  );
  assertEquals(APIGateway.Resource, "AWS::APIGateway::Resource");
  assertEquals(APIGateway.RestApi, "AWS::APIGateway::RestApi");
  assertEquals(APIGateway.Stage, "AWS::APIGateway::Stage");
  assertEquals(APIGateway.UsagePlan, "AWS::APIGateway::UsagePlan");
  assertEquals(APIGateway.UsagePlanKey, "AWS::APIGateway::UsagePlanKey");
  assertEquals(APIGateway.VpcLink, "AWS::APIGateway::VpcLink");
});
