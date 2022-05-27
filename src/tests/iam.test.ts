import { assertEquals } from 'https://deno.land/std@0.140.0/testing/asserts.ts'
import { IAM } from '../iam/index.ts'

Deno.test('IAM', () => {
  assertEquals(IAM.AccessKey, 'AWS::IAM::AccessKey')
  assertEquals(IAM.Group, 'AWS::IAM::Group')
  assertEquals(IAM.InstanceProfile, 'AWS::IAM::InstanceProfile')
  assertEquals(IAM.ManagedPolicy, 'AWS::IAM::ManagedPolicy')
  assertEquals(IAM.OIDCProvider, 'AWS::IAM::OIDCProvider')
  assertEquals(IAM.Policy, 'AWS::IAM::Policy')
  assertEquals(IAM.Role, 'AWS::IAM::Role')
  assertEquals(IAM.SAMLProvider, 'AWS::IAM::SAMLProvider')
  assertEquals(IAM.ServerCertificate, 'AWS::IAM::ServerCertificate')
  assertEquals(IAM.ServiceLinkedRole, 'AWS::IAM::ServiceLinkedRole')
  assertEquals(IAM.User, 'AWS::IAM::User')
  assertEquals(IAM.UserToGroupAddition, 'AWS::IAM::UserToGroupAddition')
  assertEquals(IAM.VirtualMFADevice, 'AWS::IAM::VirtualMFADevice')
})