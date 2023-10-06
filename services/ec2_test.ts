import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { EC2 } from "./ec2.ts";

Deno.test("EC2", () => {
  assertEquals(EC2.CapacityReservation, "AWS::EC2::CapacityReservation");
  assertEquals(
    EC2.CapacityReservationFleet,
    "AWS::EC2::CapacityReservationFleet",
  );
  assertEquals(EC2.CarrierGateway, "AWS::EC2::CarrierGateway");
  assertEquals(
    EC2.ClientVpnAuthorizationRule,
    "AWS::EC2::ClientVpnAuthorizationRule",
  );
  assertEquals(EC2.ClientVpnEndpoint, "AWS::EC2::ClientVpnEndpoint");
  assertEquals(EC2.ClientVpnRoute, "AWS::EC2::ClientVpnRoute");
  assertEquals(
    EC2.ClientVpnTargetNetworkAssociation,
    "AWS::EC2::ClientVpnTargetNetworkAssociation",
  );
  assertEquals(EC2.CustomerGateway, "AWS::EC2::CustomerGateway");
  assertEquals(EC2.DHCPOptions, "AWS::EC2::DHCPOptions");
  assertEquals(EC2.EC2Fleet, "AWS::EC2::EC2Fleet");
  assertEquals(
    EC2.EgressOnlyInternetGateway,
    "AWS::EC2::EgressOnlyInternetGateway",
  );
  assertEquals(EC2.EIP, "AWS::EC2::EIP");
  assertEquals(EC2.EIPAssociation, "AWS::EC2::EIPAssociation");
  assertEquals(
    EC2.EnclaveCertificateIamRoleAssociation,
    "AWS::EC2::EnclaveCertificateIamRoleAssociation",
  );
  assertEquals(EC2.FlowLog, "AWS::EC2::FlowLog");
  assertEquals(
    EC2.GatewayRouteTableAssociation,
    "AWS::EC2::GatewayRouteTableAssociation",
  );
  assertEquals(EC2.Host, "AWS::EC2::Host");
  assertEquals(EC2.Instance, "AWS::EC2::Instance");
  assertEquals(
    EC2.InstanceConnectEndpoint,
    "AWS::EC2::InstanceConnectEndpoint",
  );
  assertEquals(EC2.InternetGateway, "AWS::EC2::InternetGateway");
  assertEquals(EC2.IPAM, "AWS::EC2::IPAM");
  assertEquals(EC2.IPAMAllocation, "AWS::EC2::IPAMAllocation");
  assertEquals(EC2.IPAMPool, "AWS::EC2::IPAMPool");
  assertEquals(EC2.IPAMPoolCidr, "AWS::EC2::IPAMPoolCidr");
  assertEquals(EC2.IPAMResourceDiscovery, "AWS::EC2::IPAMResourceDiscovery");
  assertEquals(
    EC2.IPAMResourceDiscoveryAssociation,
    "AWS::EC2::IPAMResourceDiscoveryAssociation",
  );
  assertEquals(EC2.IPAMScope, "AWS::EC2::IPAMScope");
  assertEquals(EC2.KeyPair, "AWS::EC2::KeyPair");
  assertEquals(EC2.LaunchTemplate, "AWS::EC2::LaunchTemplate");
  assertEquals(EC2.LocalGatewayRoute, "AWS::EC2::LocalGatewayRoute");
  assertEquals(EC2.LocalGatewayRouteTable, "AWS::EC2::LocalGatewayRouteTable");
  assertEquals(
    EC2.LocalGatewayRouteTableVirtualInterfaceGroupAssociation,
    "AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation",
  );
  assertEquals(
    EC2.LocalGatewayRouteTableVPCAssociation,
    "AWS::EC2::LocalGatewayRouteTableVPCAssociation",
  );
  assertEquals(EC2.NatGateway, "AWS::EC2::NatGateway");
  assertEquals(EC2.NetworkAcl, "AWS::EC2::NetworkAcl");
  assertEquals(EC2.NetworkAclEntry, "AWS::EC2::NetworkAclEntry");
  assertEquals(
    EC2.NetworkInsightsAccessScope,
    "AWS::EC2::NetworkInsightsAccessScope",
  );
  assertEquals(
    EC2.NetworkInsightsAccessScopeAnalysis,
    "AWS::EC2::NetworkInsightsAccessScopeAnalysis",
  );
  assertEquals(
    EC2.NetworkInsightsAnalysis,
    "AWS::EC2::NetworkInsightsAnalysis",
  );
  assertEquals(EC2.NetworkInsightsPath, "AWS::EC2::NetworkInsightsPath");
  assertEquals(EC2.NetworkInterface, "AWS::EC2::NetworkInterface");
  assertEquals(
    EC2.NetworkInterfaceAttachment,
    "AWS::EC2::NetworkInterfaceAttachment",
  );
  assertEquals(
    EC2.NetworkInterfacePermission,
    "AWS::EC2::NetworkInterfacePermission",
  );
  assertEquals(
    EC2.NetworkPerformanceMetricSubscription,
    "AWS::EC2::NetworkPerformanceMetricSubscription",
  );
  assertEquals(EC2.PlacementGroup, "AWS::EC2::PlacementGroup");
  assertEquals(EC2.PrefixList, "AWS::EC2::PrefixList");
  assertEquals(EC2.Route, "AWS::EC2::Route");
  assertEquals(EC2.RouteTable, "AWS::EC2::RouteTable");
  assertEquals(EC2.SecurityGroup, "AWS::EC2::SecurityGroup");
  assertEquals(EC2.SecurityGroupEgress, "AWS::EC2::SecurityGroupEgress");
  assertEquals(EC2.SecurityGroupIngress, "AWS::EC2::SecurityGroupIngress");
  assertEquals(EC2.SpotFleet, "AWS::EC2::SpotFleet");
  assertEquals(EC2.Subnet, "AWS::EC2::Subnet");
  assertEquals(EC2.SubnetCidrBlock, "AWS::EC2::SubnetCidrBlock");
  assertEquals(
    EC2.SubnetNetworkAclAssociation,
    "AWS::EC2::SubnetNetworkAclAssociation",
  );
  assertEquals(
    EC2.SubnetRouteTableAssociation,
    "AWS::EC2::SubnetRouteTableAssociation",
  );
  assertEquals(EC2.TrafficMirrorFilter, "AWS::EC2::TrafficMirrorFilter");
  assertEquals(
    EC2.TrafficMirrorFilterRule,
    "AWS::EC2::TrafficMirrorFilterRule",
  );
  assertEquals(EC2.TrafficMirrorSession, "AWS::EC2::TrafficMirrorSession");
  assertEquals(EC2.TrafficMirrorTarget, "AWS::EC2::TrafficMirrorTarget");
  assertEquals(EC2.TransitGateway, "AWS::EC2::TransitGateway");
  assertEquals(
    EC2.TransitGatewayAttachment,
    "AWS::EC2::TransitGatewayAttachment",
  );
  assertEquals(EC2.TransitGatewayConnect, "AWS::EC2::TransitGatewayConnect");
  assertEquals(
    EC2.TransitGatewayMulticastDomain,
    "AWS::EC2::TransitGatewayMulticastDomain",
  );
  assertEquals(
    EC2.TransitGatewayMulticastDomainAssociation,
    "AWS::EC2::TransitGatewayMulticastDomainAssociation",
  );
  assertEquals(
    EC2.TransitGatewayMulticastGroupMember,
    "AWS::EC2::TransitGatewayMulticastGroupMember",
  );
  assertEquals(
    EC2.TransitGatewayMulticastGroupSource,
    "AWS::EC2::TransitGatewayMulticastGroupSource",
  );
  assertEquals(
    EC2.TransitGatewayPeeringAttachment,
    "AWS::EC2::TransitGatewayPeeringAttachment",
  );
  assertEquals(EC2.TransitGatewayRoute, "AWS::EC2::TransitGatewayRoute");
  assertEquals(
    EC2.TransitGatewayRouteTable,
    "AWS::EC2::TransitGatewayRouteTable",
  );
  assertEquals(
    EC2.TransitGatewayRouteTableAssociation,
    "AWS::EC2::TransitGatewayRouteTableAssociation",
  );
  assertEquals(
    EC2.TransitGatewayRouteTablePropagation,
    "AWS::EC2::TransitGatewayRouteTablePropagation",
  );
  assertEquals(
    EC2.TransitGatewayVpcAttachment,
    "AWS::EC2::TransitGatewayVpcAttachment",
  );
  assertEquals(EC2.VerifiedAccessEndpoint, "AWS::EC2::VerifiedAccessEndpoint");
  assertEquals(EC2.VerifiedAccessGroup, "AWS::EC2::VerifiedAccessGroup");
  assertEquals(EC2.VerifiedAccessInstance, "AWS::EC2::VerifiedAccessInstance");
  assertEquals(
    EC2.VerifiedAccessTrustProvider,
    "AWS::EC2::VerifiedAccessTrustProvider",
  );
  assertEquals(EC2.Volume, "AWS::EC2::Volume");
  assertEquals(EC2.VolumeAttachment, "AWS::EC2::VolumeAttachment");
  assertEquals(EC2.VPC, "AWS::EC2::VPC");
  assertEquals(EC2.VPCCidrBlock, "AWS::EC2::VPCCidrBlock");
  assertEquals(
    EC2.VPCDHCPOptionsAssociation,
    "AWS::EC2::VPCDHCPOptionsAssociation",
  );
  assertEquals(EC2.VPCEndpoint, "AWS::EC2::VPCEndpoint");
  assertEquals(
    EC2.VPCEndpointConnectionNotification,
    "AWS::EC2::VPCEndpointConnectionNotification",
  );
  assertEquals(EC2.VPCEndpointService, "AWS::EC2::VPCEndpointService");
  assertEquals(
    EC2.VPCEndpointServicePermissions,
    "AWS::EC2::VPCEndpointServicePermissions",
  );
  assertEquals(EC2.VPCGatewayAttachment, "AWS::EC2::VPCGatewayAttachment");
  assertEquals(EC2.VPCPeeringConnection, "AWS::EC2::VPCPeeringConnection");
  assertEquals(EC2.VPNConnection, "AWS::EC2::VPNConnection");
  assertEquals(EC2.VPNConnectionRoute, "AWS::EC2::VPNConnectionRoute");
  assertEquals(EC2.VPNGateway, "AWS::EC2::VPNGateway");
  assertEquals(
    EC2.VPNGatewayRoutePropagation,
    "AWS::EC2::VPNGatewayRoutePropagation",
  );
});
