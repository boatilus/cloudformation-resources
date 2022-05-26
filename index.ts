import { APIGateway } from "./apigateway/index.ts";
import { CloudWatch } from "./cloudwatch/index.ts";
import { DynamoDB } from "./dynamodb/index.ts";
import { EC2 } from "./ec2/index.ts";
import { ECR } from "./ecr/index.ts";
import { ECS } from "./ecs/index.ts";
import { Events } from "./events/index.ts";
import { IAM } from "./iam/index.ts";
import { KMS } from "./kms/index.ts";
import { Lambda } from "./lambda/index.ts";
import { Logs } from "./logs/index.ts";
import { Route53 } from "./route53/index.ts";
import { S3 } from "./s3/index.ts";
import { SQS } from "./sqs/index.ts";

export class AWS {
  static APIGateway = APIGateway;
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
