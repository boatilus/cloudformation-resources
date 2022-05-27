import { assertEquals } from 'https://deno.land/std@0.140.0/testing/asserts.ts'
import { S3 } from '../s3/index.ts'

Deno.test('S3', () => {
  assertEquals(S3.AccessPoint, 'AWS::S3::AccessPoint')
  assertEquals(S3.Bucket, 'AWS::S3::Bucket')
  assertEquals(S3.BucketPolicy, 'AWS::S3::BucketPolicy')
  assertEquals(S3.MultiRegionAccessPoint, 'AWS::S3::MultiRegionAccessPoint')
  assertEquals(S3.MultiRegionAccessPointPolicy, 'AWS::S3::MultiRegionAccessPointPolicy')
  assertEquals(S3.StorageLens, 'AWS::S3::StorageLens')
})