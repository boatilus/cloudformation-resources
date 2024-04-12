import { ApiGateway } from "./services/apigateway.ts";
import { CloudWatch } from "./services/cloudwatch.ts";
import { DynamoDB } from "./services/dynamodb.ts";
import { EC2 } from "./services/ec2.ts";
import { ECR } from "./services/ecr.ts";
import { ECS } from "./services/ecs.ts";
import { Events } from "./services/events.ts";
import { IAM } from "./services/iam.ts";
import { KMS } from "./services/kms.ts";
import { Lambda } from "./services/lambda.ts";
import { Logs } from "./services/logs.ts";
import { Route53 } from "./services/route53.ts";
import { S3 } from "./services/s3.ts";
import { SQS } from "./services/sqs.ts";

export class AWS {
  static ApiGateway = ApiGateway;

  static CloudWatch = CloudWatch;

  static DynamoDB = DynamoDB;

  static EC2 = EC2;

  static ECR = ECR;

  static ECS = ECS;

  static Events = Events;

  static IAM = IAM;

  static KMS = KMS;

  static Lambda = Lambda;

  static Logs = Logs;

  static Route53 = Route53;

  static S3 = S3;

  static SQS = SQS;
}
