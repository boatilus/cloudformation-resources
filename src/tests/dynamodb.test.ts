import { assertEquals } from 'https://deno.land/std@0.140.0/testing/asserts.ts'
import { DynamoDB } from '../dynamodb/index.ts'

Deno.test('DynamoDB', () => {
  assertEquals(DynamoDB.GlobalTable, 'AWS::DynamoDB::GlobalTable')
  assertEquals(DynamoDB.Table, 'AWS::DynamoDB::Table')
})