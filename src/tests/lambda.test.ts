import { assertEquals } from 'https://deno.land/std@0.140.0/testing/asserts.ts'
import { Lambda } from '../lambda/index.ts'

Deno.test('Lambda', () => {
  assertEquals(Lambda.Alias, 'AWS::Lambda::Alias')
  assertEquals(Lambda.CodeSigningConfig, 'AWS::Lambda::CodeSigningConfig')
  assertEquals(Lambda.EventInvokeConfig, 'AWS::Lambda::EventInvokeConfig')
  assertEquals(Lambda.EventSourceMapping, 'AWS::Lambda::EventSourceMapping')
  assertEquals(Lambda.Function, 'AWS::Lambda::Function')
  assertEquals(Lambda.LayerVersion, 'AWS::Lambda::LayerVersion')
  assertEquals(Lambda.LayerVersionPermission, 'AWS::Lambda::LayerVersionPermission')
  assertEquals(Lambda.Permission, 'AWS::Lambda::Permission')
  assertEquals(Lambda.Url, 'AWS::Lambda::Url')
  assertEquals(Lambda.Version, 'AWS::Lambda::Version')
})