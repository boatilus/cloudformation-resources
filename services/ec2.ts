export class EC2 {
  static CapacityReservation = "AWS::EC2::CapacityReservation";
  static CapacityReservationFleet = "AWS::EC2::CapacityReservationFleet";
  static CarrierGateway = "AWS::EC2::CarrierGateway";
  static ClientVpnAuthorizationRule = "AWS::EC2::ClientVpnAuthorizationRule";
  static ClientVpnEndpoint = "AWS::EC2::ClientVpnEndpoint";
  static ClientVpnRoute = "AWS::EC2::ClientVpnRoute";
  static ClientVpnTargetNetworkAssociation =
    "AWS::EC2::ClientVpnTargetNetworkAssociation";
  static CustomerGateway = "AWS::EC2::CustomerGateway";
  static DHCPOptions = "AWS::EC2::DHCPOptions";
  static EC2Fleet = "AWS::EC2::EC2Fleet";
  static EgressOnlyInternetGateway = "AWS::EC2::EgressOnlyInternetGateway";
  static EIP = "AWS::EC2::EIP";
  static EIPAssociation = "AWS::EC2::EIPAssociation";
  static EnclaveCertificateIamRoleAssociation =
    "AWS::EC2::EnclaveCertificateIamRoleAssociation";
  static FlowLog = "AWS::EC2::FlowLog";
  static GatewayRouteTableAssociation =
    "AWS::EC2::GatewayRouteTableAssociation";
  static Host = "AWS::EC2::Host";
  static Instance = "AWS::EC2::Instance";
  static InstanceConnectEndpoint = "AWS::EC2::InstanceConnectEndpoint";
  static InternetGateway = "AWS::EC2::InternetGateway";
  static IPAM = "AWS::EC2::IPAM";
  static IPAMAllocation = "AWS::EC2::IPAMAllocation";
  static IPAMPool = "AWS::EC2::IPAMPool";
  static IPAMPoolCidr = "AWS::EC2::IPAMPoolCidr";
  static IPAMResourceDiscovery = "AWS::EC2::IPAMResourceDiscovery";
  static IPAMResourceDiscoveryAssociation =
    "AWS::EC2::IPAMResourceDiscoveryAssociation";
  static IPAMScope = "AWS::EC2::IPAMScope";
  static KeyPair = "AWS::EC2::KeyPair";
  static LaunchTemplate = "AWS::EC2::LaunchTemplate";
  static LocalGatewayRoute = "AWS::EC2::LocalGatewayRoute";
  static LocalGatewayRouteTable = "AWS::EC2::LocalGatewayRouteTable";
  static LocalGatewayRouteTableVirtualInterfaceGroupAssociation =
    "AWS::EC2::LocalGatewayRouteTableVirtualInterfaceGroupAssociation";
  static LocalGatewayRouteTableVPCAssociation =
    "AWS::EC2::LocalGatewayRouteTableVPCAssociation";
  static NatGateway = "AWS::EC2::NatGateway";
  static NetworkAcl = "AWS::EC2::NetworkAcl";
  static NetworkAclEntry = "AWS::EC2::NetworkAclEntry";
  static NetworkInsightsAccessScope = "AWS::EC2::NetworkInsightsAccessScope";
  static NetworkInsightsAccessScopeAnalysis =
    "AWS::EC2::NetworkInsightsAccessScopeAnalysis";
  static NetworkInsightsAnalysis = "AWS::EC2::NetworkInsightsAnalysis";
  static NetworkInsightsPath = "AWS::EC2::NetworkInsightsPath";
  static NetworkInterface = "AWS::EC2::NetworkInterface";
  static NetworkInterfaceAttachment = "AWS::EC2::NetworkInterfaceAttachment";
  static NetworkInterfacePermission = "AWS::EC2::NetworkInterfacePermission";
  static NetworkPerformanceMetricSubscription =
    "AWS::EC2::NetworkPerformanceMetricSubscription";
  static PlacementGroup = "AWS::EC2::PlacementGroup";
  static PrefixList = "AWS::EC2::PrefixList";
  static Route = "AWS::EC2::Route";
  static RouteTable = "AWS::EC2::RouteTable";
  static SecurityGroup = "AWS::EC2::SecurityGroup";
  static SecurityGroupEgress = "AWS::EC2::SecurityGroupEgress";
  static SecurityGroupIngress = "AWS::EC2::SecurityGroupIngress";
  static SnapshotBlockPublicAccess = "AWS::EC2::SnapshotBlockPublicAccess";
  static SpotFleet = "AWS::EC2::SpotFleet";
  static Subnet = "AWS::EC2::Subnet";
  static SubnetCidrBlock = "AWS::EC2::SubnetCidrBlock";
  static SubnetNetworkAclAssociation = "AWS::EC2::SubnetNetworkAclAssociation";
  static SubnetRouteTableAssociation = "AWS::EC2::SubnetRouteTableAssociation";
  static TrafficMirrorFilter = "AWS::EC2::TrafficMirrorFilter";
  static TrafficMirrorFilterRule = "AWS::EC2::TrafficMirrorFilterRule";
  static TrafficMirrorSession = "AWS::EC2::TrafficMirrorSession";
  static TrafficMirrorTarget = "AWS::EC2::TrafficMirrorTarget";
  static TransitGateway = "AWS::EC2::TransitGateway";
  static TransitGatewayAttachment = "AWS::EC2::TransitGatewayAttachment";
  static TransitGatewayConnect = "AWS::EC2::TransitGatewayConnect";
  static TransitGatewayMulticastDomain =
    "AWS::EC2::TransitGatewayMulticastDomain";
  static TransitGatewayMulticastDomainAssociation =
    "AWS::EC2::TransitGatewayMulticastDomainAssociation";
  static TransitGatewayMulticastGroupMember =
    "AWS::EC2::TransitGatewayMulticastGroupMember";
  static TransitGatewayMulticastGroupSource =
    "AWS::EC2::TransitGatewayMulticastGroupSource";
  static TransitGatewayPeeringAttachment =
    "AWS::EC2::TransitGatewayPeeringAttachment";
  static TransitGatewayRoute = "AWS::EC2::TransitGatewayRoute";
  static TransitGatewayRouteTable = "AWS::EC2::TransitGatewayRouteTable";
  static TransitGatewayRouteTableAssociation =
    "AWS::EC2::TransitGatewayRouteTableAssociation";
  static TransitGatewayRouteTablePropagation =
    "AWS::EC2::TransitGatewayRouteTablePropagation";
  static TransitGatewayVpcAttachment = "AWS::EC2::TransitGatewayVpcAttachment";
  static VerifiedAccessEndpoint = "AWS::EC2::VerifiedAccessEndpoint";
  static VerifiedAccessGroup = "AWS::EC2::VerifiedAccessGroup";
  static VerifiedAccessInstance = "AWS::EC2::VerifiedAccessInstance";
  static VerifiedAccessTrustProvider = "AWS::EC2::VerifiedAccessTrustProvider";
  static Volume = "AWS::EC2::Volume";
  static VolumeAttachment = "AWS::EC2::VolumeAttachment";
  static VPC = "AWS::EC2::VPC";
  static VPCCidrBlock = "AWS::EC2::VPCCidrBlock";
  static VPCDHCPOptionsAssociation = "AWS::EC2::VPCDHCPOptionsAssociation";
  static VPCEndpoint = "AWS::EC2::VPCEndpoint";
  static VPCEndpointConnectionNotification =
    "AWS::EC2::VPCEndpointConnectionNotification";
  static VPCEndpointService = "AWS::EC2::VPCEndpointService";
  static VPCEndpointServicePermissions =
    "AWS::EC2::VPCEndpointServicePermissions";
  static VPCGatewayAttachment = "AWS::EC2::VPCGatewayAttachment";
  static VPCPeeringConnection = "AWS::EC2::VPCPeeringConnection";
  static VPNConnection = "AWS::EC2::VPNConnection";
  static VPNConnectionRoute = "AWS::EC2::VPNConnectionRoute";
  static VPNGateway = "AWS::EC2::VPNGateway";
  static VPNGatewayRoutePropagation = "AWS::EC2::VPNGatewayRoutePropagation";
}
