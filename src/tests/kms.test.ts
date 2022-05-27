import { assertEquals } from 'https://deno.land/std@0.140.0/testing/asserts.ts'
import { KMS } from '../kms/index.ts'

Deno.test('KMS', () => {
  assertEquals(KMS.Alias, 'AWS::KMS::Alias')
  assertEquals(KMS.Key, 'AWS::KMS::Key')
  assertEquals(KMS.ReplicaKey, 'AWS::KMS::ReplicaKey')
})