import { APIGateway } from './apigateway'
import { CloudWatch } from './cloudwatch'
import { DynamoDB } from './dynamodb'
import { EC2 } from './ec2'
import { ECR } from './ecr'
import { ECS } from './ecs'
import { Events } from './events'
import { IAM } from './iam'
import { KMS } from './kms'
import { Lambda } from './lambda'
import { Logs } from './logs'
import { Route53 } from './route53'
import { S3 } from './s3'
import { SQS } from './sqs'

export class AWS {
  static APIGateway = APIGateway
  static CloudWatch = CloudWatch
  static DynamoDB = DynamoDB
  static EC2 = EC2
  static ECR = ECR
  static ECS = ECS
  static Events = Events
  static IAM = IAM
  static KMS = KMS
  static Lambda = Lambda
  static Logs = Logs
  static Route53 = Route53
  static S3 = S3
  static SQS = SQS
}
