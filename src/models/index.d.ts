import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum FailureRemedies {
  UNUSED_FUNDS_RETURNED = "UNUSED_FUNDS_RETURNED",
  OTHER = "OTHER"
}

export enum MonitoringPlan {
  DESCRIBE_PROCES_PLAN = "DESCRIBE_PROCES_PLAN",
  WHO_CONDUCTS_MONITORING = "WHO_CONDUCTS_MONITORING",
  TOTAL_FUNDING_NEEDED = "TOTAL_FUNDING_NEEDED"
}

export enum ProjectCost {
  TITLE2_FUNDS_REQUESTED = "TITLE2_FUNDS_REQUESTED",
  IS_MULTIYEAR_FUNDING = "IS_MULTIYEAR_FUNDING"
}

export enum AccomplishmentMethods {
  CONTRACT = "CONTRACT",
  FEDERAL_WORKFORCE = "FEDERAL_WORKFORCE",
  COUNTY_WORKFORCE = "COUNTY_WORKFORCE",
  VOLUNTEERS = "VOLUNTEERS",
  GRANT = "GRANT",
  AGREEMENT = "AGREEMENT",
  AMERICORPS = "AMERICORPS",
  YCC_CCC_CREWS = "YCC_CCC_CREWS",
  JOB_CORPS = "JOB_CORPS",
  STEWARDSHIP_CONTRACT = "STEWARDSHIP_CONTRACT",
  MERCHANTABLE_TIMBER_PLOT = "MERCHANTABLE_TIMBER_PLOT",
  OTHER = "OTHER"
}

export enum ProjectAccomplishments {
  MILES_ROAD_MAINTAINED = "MILES_ROAD_MAINTAINED",
  MILES_ROAD_DECOMISSIONED = "MILES_ROAD_DECOMISSIONED",
  NUMBER_STRUCTURES_MAINTAINED = "NUMBER_STRUCTURES_MAINTAINED",
  ACRES_OF_SOIL_PRODUCTIVITY_IMPROVED = "ACRES_OF_SOIL_PRODUCTIVITY_IMPROVED",
  MILES_RIVER_IMPROVED = "MILES_RIVER_IMPROVED",
  MILES_FISH_HABITAT = "MILES_FISH_HABITAT",
  ACRES_NATIVE_SPECIES = "ACRES_NATIVE_SPECIES",
  ACRES_HAZARDOUS_FUEL_TREATMENT = "ACRES_HAZARDOUS_FUEL_TREATMENT",
  MILES_TRAIL_MAINTAINED = "MILES_TRAIL_MAINTAINED",
  MILES_TRAIL_OBLITERATED = "MILES_TRAIL_OBLITERATED",
  ACRES_FOREST_HEALTH_IMPROVED = "ACRES_FOREST_HEALTH_IMPROVED",
  ACRES_RANGELAND_IMPROVED = "ACRES_RANGELAND_IMPROVED",
  ACRES_WILDLIFE_RESTORED = "ACRES_WILDLIFE_RESTORED",
  ACRES_NOXIOUS_WEED_CONTROLLED = "ACRES_NOXIOUS_WEED_CONTROLLED",
  TIMBER_VOLUME_GENERATED = "TIMBER_VOLUME_GENERATED",
  JOBS_GENERATED_FTE = "JOBS_GENERATED_FTE",
  PEOPLE_REACHED = "PEOPLE_REACHED",
  DIRECT_ECONOMIC_BENEFIT = "DIRECT_ECONOMIC_BENEFIT",
  OTHER = "OTHER"
}

export enum ProjectType {
  ROAD_MAINTENANCE = "ROAD_MAINTENANCE",
  ROAD_DECOMISSION = "ROAD_DECOMISSION",
  TRAIL_MAINTENANCE = "TRAIL_MAINTENANCE",
  TRAIL_OBLITERATION = "TRAIL_OBLITERATION",
  OTHER_INFRASTRUCTURE_MAINTENANCE = "OTHER_INFRASTRUCTURE_MAINTENANCE",
  SOIL_PRODUCTIVITY_IMPROVEMENT = "SOIL_PRODUCTIVITY_IMPROVEMENT",
  FOREST_HEALTH_IMPROVEMENT = "FOREST_HEALTH_IMPROVEMENT",
  WATERSHED_MAINTENANCE = "WATERSHED_MAINTENANCE",
  WILDLIFE_HABITAT_RESTORATION = "WILDLIFE_HABITAT_RESTORATION",
  FISH_HABTIAT_RESTORATION = "FISH_HABTIAT_RESTORATION",
  CONTROL_NOXIOUS_WEEDS = "CONTROL_NOXIOUS_WEEDS",
  REESTABLISH_NATIVE_SPECIES = "REESTABLISH_NATIVE_SPECIES",
  FUELS_MANAGEMENT = "FUELS_MANAGEMENT",
  IMPLEMENT_CWPP_PROJECT = "IMPLEMENT_CWPP_PROJECT",
  OTHER_PROJECT_TYPE = "OTHER_PROJECT_TYPE"
}

export enum MeetPurpose {
  IMPROVES_MAINTENANCE = "IMPROVES_MAINTENANCE",
  IMPLEMENT_STEWARDSHIP = "IMPLEMENT_STEWARDSHIP",
  RESTORES_LANDHEALTH = "RESTORES_LANDHEALTH",
  RESTORE_WATERQUALITY = "RESTORE_WATERQUALITY"
}

export enum Land {
  STATE = "STATE",
  PRIVATE = "PRIVATE",
  OTHER = "OTHER",
  NONE = "NONE"
}

export enum ProjectDescription {
  SHORT = "SHORT",
  BRIEF = "BRIEF"
}



type EagerProjectAttributes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectAttributes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly racNumber?: string | null;
  readonly fundingFiscalYear?: string | null;
  readonly state?: string | null;
  readonly county?: string | null;
  readonly submittedBy?: string | null;
  readonly currentDate?: string | null;
  readonly contactPhoneNum?: string | null;
  readonly contactEmail?: string | null;
  readonly projectLocation?: string | null;
  readonly nationalForest?: string | null;
  readonly forestServiceDistrict?: string | null;
  readonly projectLocationTownship?: string | null;
  readonly projectGoal?: string | null;
  readonly projectDescription?: ProjectDescription | keyof typeof ProjectDescription | null;
  readonly typeLand?: Land | keyof typeof Land | null;
  readonly meetPurpose?: MeetPurpose | keyof typeof MeetPurpose | null;
  readonly projectType?: ProjectType | keyof typeof ProjectType | null;
  readonly projectAccomplishments?: ProjectAccomplishments | keyof typeof ProjectAccomplishments | null;
  readonly startDate?: string | null;
  readonly completionDate?: string | null;
  readonly listPartnernships?: string | null;
  readonly identifyCommunityBenefits?: string | null;
  readonly identifyFederalBenefits?: string | null;
  readonly accomplishmentMethods?: AccomplishmentMethods | keyof typeof AccomplishmentMethods | null;
  readonly generateMerchantableTimber?: string | null;
  readonly anticipatedCost?: ProjectCost | keyof typeof ProjectCost | null;
  readonly otherSourceOfFunding?: string | null;
  readonly monitoringPlan?: MonitoringPlan | keyof typeof MonitoringPlan | null;
  readonly remediesForFailure?: FailureRemedies | keyof typeof FailureRemedies | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjectAttributes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectAttributes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly racNumber?: string | null;
  readonly fundingFiscalYear?: string | null;
  readonly state?: string | null;
  readonly county?: string | null;
  readonly submittedBy?: string | null;
  readonly currentDate?: string | null;
  readonly contactPhoneNum?: string | null;
  readonly contactEmail?: string | null;
  readonly projectLocation?: string | null;
  readonly nationalForest?: string | null;
  readonly forestServiceDistrict?: string | null;
  readonly projectLocationTownship?: string | null;
  readonly projectGoal?: string | null;
  readonly projectDescription?: ProjectDescription | keyof typeof ProjectDescription | null;
  readonly typeLand?: Land | keyof typeof Land | null;
  readonly meetPurpose?: MeetPurpose | keyof typeof MeetPurpose | null;
  readonly projectType?: ProjectType | keyof typeof ProjectType | null;
  readonly projectAccomplishments?: ProjectAccomplishments | keyof typeof ProjectAccomplishments | null;
  readonly startDate?: string | null;
  readonly completionDate?: string | null;
  readonly listPartnernships?: string | null;
  readonly identifyCommunityBenefits?: string | null;
  readonly identifyFederalBenefits?: string | null;
  readonly accomplishmentMethods?: AccomplishmentMethods | keyof typeof AccomplishmentMethods | null;
  readonly generateMerchantableTimber?: string | null;
  readonly anticipatedCost?: ProjectCost | keyof typeof ProjectCost | null;
  readonly otherSourceOfFunding?: string | null;
  readonly monitoringPlan?: MonitoringPlan | keyof typeof MonitoringPlan | null;
  readonly remediesForFailure?: FailureRemedies | keyof typeof FailureRemedies | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectAttributes = LazyLoading extends LazyLoadingDisabled ? EagerProjectAttributes : LazyProjectAttributes

export declare const ProjectAttributes: (new (init: ModelInit<ProjectAttributes>) => ProjectAttributes) & {
  copyOf(source: ProjectAttributes, mutator: (draft: MutableModel<ProjectAttributes>) => MutableModel<ProjectAttributes> | void): ProjectAttributes;
}