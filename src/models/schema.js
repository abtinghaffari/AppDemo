export const schema = {
    "models": {
        "ProjectAttributes": {
            "name": "ProjectAttributes",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "racNumber": {
                    "name": "racNumber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "fundingFiscalYear": {
                    "name": "fundingFiscalYear",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "state": {
                    "name": "state",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "county": {
                    "name": "county",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "submittedBy": {
                    "name": "submittedBy",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "currentDate": {
                    "name": "currentDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "contactPhoneNum": {
                    "name": "contactPhoneNum",
                    "isArray": false,
                    "type": "AWSPhone",
                    "isRequired": false,
                    "attributes": []
                },
                "contactEmail": {
                    "name": "contactEmail",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "projectLocation": {
                    "name": "projectLocation",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "nationalForest": {
                    "name": "nationalForest",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "forestServiceDistrict": {
                    "name": "forestServiceDistrict",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "projectLocationTownship": {
                    "name": "projectLocationTownship",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "projectGoal": {
                    "name": "projectGoal",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "projectDescription": {
                    "name": "projectDescription",
                    "isArray": false,
                    "type": {
                        "enum": "ProjectDescription"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "typeLand": {
                    "name": "typeLand",
                    "isArray": false,
                    "type": {
                        "enum": "Land"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "meetPurpose": {
                    "name": "meetPurpose",
                    "isArray": false,
                    "type": {
                        "enum": "MeetPurpose"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "projectType": {
                    "name": "projectType",
                    "isArray": false,
                    "type": {
                        "enum": "ProjectType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "projectAccomplishments": {
                    "name": "projectAccomplishments",
                    "isArray": false,
                    "type": {
                        "enum": "ProjectAccomplishments"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "startDate": {
                    "name": "startDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "completionDate": {
                    "name": "completionDate",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "listPartnernships": {
                    "name": "listPartnernships",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "identifyCommunityBenefits": {
                    "name": "identifyCommunityBenefits",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "identifyFederalBenefits": {
                    "name": "identifyFederalBenefits",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "accomplishmentMethods": {
                    "name": "accomplishmentMethods",
                    "isArray": false,
                    "type": {
                        "enum": "AccomplishmentMethods"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "generateMerchantableTimber": {
                    "name": "generateMerchantableTimber",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "anticipatedCost": {
                    "name": "anticipatedCost",
                    "isArray": false,
                    "type": {
                        "enum": "ProjectCost"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "otherSourceOfFunding": {
                    "name": "otherSourceOfFunding",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "monitoringPlan": {
                    "name": "monitoringPlan",
                    "isArray": false,
                    "type": {
                        "enum": "MonitoringPlan"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "remediesForFailure": {
                    "name": "remediesForFailure",
                    "isArray": false,
                    "type": {
                        "enum": "FailureRemedies"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "ProjectAttributes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "FailureRemedies": {
            "name": "FailureRemedies",
            "values": [
                "UNUSED_FUNDS_RETURNED",
                "OTHER"
            ]
        },
        "MonitoringPlan": {
            "name": "MonitoringPlan",
            "values": [
                "DESCRIBE_PROCES_PLAN",
                "WHO_CONDUCTS_MONITORING",
                "TOTAL_FUNDING_NEEDED"
            ]
        },
        "ProjectCost": {
            "name": "ProjectCost",
            "values": [
                "TITLE2_FUNDS_REQUESTED",
                "IS_MULTIYEAR_FUNDING"
            ]
        },
        "AccomplishmentMethods": {
            "name": "AccomplishmentMethods",
            "values": [
                "CONTRACT",
                "FEDERAL_WORKFORCE",
                "COUNTY_WORKFORCE",
                "VOLUNTEERS",
                "GRANT",
                "AGREEMENT",
                "AMERICORPS",
                "YCC_CCC_CREWS",
                "JOB_CORPS",
                "STEWARDSHIP_CONTRACT",
                "MERCHANTABLE_TIMBER_PLOT",
                "OTHER"
            ]
        },
        "ProjectAccomplishments": {
            "name": "ProjectAccomplishments",
            "values": [
                "MILES_ROAD_MAINTAINED",
                "MILES_ROAD_DECOMISSIONED",
                "NUMBER_STRUCTURES_MAINTAINED",
                "ACRES_OF_SOIL_PRODUCTIVITY_IMPROVED",
                "MILES_RIVER_IMPROVED",
                "MILES_FISH_HABITAT",
                "ACRES_NATIVE_SPECIES",
                "ACRES_HAZARDOUS_FUEL_TREATMENT",
                "MILES_TRAIL_MAINTAINED",
                "MILES_TRAIL_OBLITERATED",
                "ACRES_FOREST_HEALTH_IMPROVED",
                "ACRES_RANGELAND_IMPROVED",
                "ACRES_WILDLIFE_RESTORED",
                "ACRES_NOXIOUS_WEED_CONTROLLED",
                "TIMBER_VOLUME_GENERATED",
                "JOBS_GENERATED_FTE",
                "PEOPLE_REACHED",
                "DIRECT_ECONOMIC_BENEFIT",
                "OTHER"
            ]
        },
        "ProjectType": {
            "name": "ProjectType",
            "values": [
                "ROAD_MAINTENANCE",
                "ROAD_DECOMISSION",
                "TRAIL_MAINTENANCE",
                "TRAIL_OBLITERATION",
                "OTHER_INFRASTRUCTURE_MAINTENANCE",
                "SOIL_PRODUCTIVITY_IMPROVEMENT",
                "FOREST_HEALTH_IMPROVEMENT",
                "WATERSHED_MAINTENANCE",
                "WILDLIFE_HABITAT_RESTORATION",
                "FISH_HABTIAT_RESTORATION",
                "CONTROL_NOXIOUS_WEEDS",
                "REESTABLISH_NATIVE_SPECIES",
                "FUELS_MANAGEMENT",
                "IMPLEMENT_CWPP_PROJECT",
                "OTHER_PROJECT_TYPE"
            ]
        },
        "MeetPurpose": {
            "name": "MeetPurpose",
            "values": [
                "IMPROVES_MAINTENANCE",
                "IMPLEMENT_STEWARDSHIP",
                "RESTORES_LANDHEALTH",
                "RESTORE_WATERQUALITY"
            ]
        },
        "Land": {
            "name": "Land",
            "values": [
                "STATE",
                "PRIVATE",
                "OTHER",
                "NONE"
            ]
        },
        "ProjectDescription": {
            "name": "ProjectDescription",
            "values": [
                "SHORT",
                "BRIEF"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.4.4",
    "version": "22e545ba0bcfba2bd961b35af8698e0a"
};