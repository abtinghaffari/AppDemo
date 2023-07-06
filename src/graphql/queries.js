/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProjectAttributes = /* GraphQL */ `
  query GetProjectAttributes($id: ID!) {
    getProjectAttributes(id: $id) {
      id
      racNumber
      fundingFiscalYear
      state
      county
      submittedBy
      currentDate
      contactPhoneNum
      contactEmail
      projectLocation
      nationalForest
      forestServiceDistrict
      projectLocationTownship
      projectGoal
      projectDescription
      typeLand
      meetPurpose
      projectType
      projectAccomplishments
      startDate
      completionDate
      listPartnernships
      identifyCommunityBenefits
      identifyFederalBenefits
      accomplishmentMethods
      generateMerchantableTimber
      anticipatedCost
      otherSourceOfFunding
      monitoringPlan
      remediesForFailure
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProjectAttributes = /* GraphQL */ `
  query ListProjectAttributes(
    $filter: ModelProjectAttributesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProjectAttributes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        racNumber
        fundingFiscalYear
        state
        county
        submittedBy
        currentDate
        contactPhoneNum
        contactEmail
        projectLocation
        nationalForest
        forestServiceDistrict
        projectLocationTownship
        projectGoal
        projectDescription
        typeLand
        meetPurpose
        projectType
        projectAccomplishments
        startDate
        completionDate
        listPartnernships
        identifyCommunityBenefits
        identifyFederalBenefits
        accomplishmentMethods
        generateMerchantableTimber
        anticipatedCost
        otherSourceOfFunding
        monitoringPlan
        remediesForFailure
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
