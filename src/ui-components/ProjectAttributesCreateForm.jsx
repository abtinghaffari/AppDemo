/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { ProjectAttributes } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ProjectAttributesCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    racNumber: "",
    fundingFiscalYear: "",
    state: "",
    county: "",
    submittedBy: "",
    currentDate: "",
    contactPhoneNum: "",
    contactEmail: "",
    projectLocation: "",
    nationalForest: "",
    forestServiceDistrict: "",
    projectLocationTownship: "",
    projectGoal: "",
    projectDescription: "",
    typeLand: "",
    meetPurpose: "",
    projectType: "",
    projectAccomplishments: "",
    startDate: "",
    completionDate: "",
    listPartnernships: "",
    identifyCommunityBenefits: "",
    identifyFederalBenefits: "",
    accomplishmentMethods: "",
    generateMerchantableTimber: "",
    anticipatedCost: "",
    otherSourceOfFunding: "",
    monitoringPlan: "",
    remediesForFailure: "",
  };
  const [racNumber, setRacNumber] = React.useState(initialValues.racNumber);
  const [fundingFiscalYear, setFundingFiscalYear] = React.useState(
    initialValues.fundingFiscalYear
  );
  const [state, setState] = React.useState(initialValues.state);
  const [county, setCounty] = React.useState(initialValues.county);
  const [submittedBy, setSubmittedBy] = React.useState(
    initialValues.submittedBy
  );
  const [currentDate, setCurrentDate] = React.useState(
    initialValues.currentDate
  );
  const [contactPhoneNum, setContactPhoneNum] = React.useState(
    initialValues.contactPhoneNum
  );
  const [contactEmail, setContactEmail] = React.useState(
    initialValues.contactEmail
  );
  const [projectLocation, setProjectLocation] = React.useState(
    initialValues.projectLocation
  );
  const [nationalForest, setNationalForest] = React.useState(
    initialValues.nationalForest
  );
  const [forestServiceDistrict, setForestServiceDistrict] = React.useState(
    initialValues.forestServiceDistrict
  );
  const [projectLocationTownship, setProjectLocationTownship] = React.useState(
    initialValues.projectLocationTownship
  );
  const [projectGoal, setProjectGoal] = React.useState(
    initialValues.projectGoal
  );
  const [projectDescription, setProjectDescription] = React.useState(
    initialValues.projectDescription
  );
  const [typeLand, setTypeLand] = React.useState(initialValues.typeLand);
  const [meetPurpose, setMeetPurpose] = React.useState(
    initialValues.meetPurpose
  );
  const [projectType, setProjectType] = React.useState(
    initialValues.projectType
  );
  const [projectAccomplishments, setProjectAccomplishments] = React.useState(
    initialValues.projectAccomplishments
  );
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [completionDate, setCompletionDate] = React.useState(
    initialValues.completionDate
  );
  const [listPartnernships, setListPartnernships] = React.useState(
    initialValues.listPartnernships
  );
  const [identifyCommunityBenefits, setIdentifyCommunityBenefits] =
    React.useState(initialValues.identifyCommunityBenefits);
  const [identifyFederalBenefits, setIdentifyFederalBenefits] = React.useState(
    initialValues.identifyFederalBenefits
  );
  const [accomplishmentMethods, setAccomplishmentMethods] = React.useState(
    initialValues.accomplishmentMethods
  );
  const [generateMerchantableTimber, setGenerateMerchantableTimber] =
    React.useState(initialValues.generateMerchantableTimber);
  const [anticipatedCost, setAnticipatedCost] = React.useState(
    initialValues.anticipatedCost
  );
  const [otherSourceOfFunding, setOtherSourceOfFunding] = React.useState(
    initialValues.otherSourceOfFunding
  );
  const [monitoringPlan, setMonitoringPlan] = React.useState(
    initialValues.monitoringPlan
  );
  const [remediesForFailure, setRemediesForFailure] = React.useState(
    initialValues.remediesForFailure
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setRacNumber(initialValues.racNumber);
    setFundingFiscalYear(initialValues.fundingFiscalYear);
    setState(initialValues.state);
    setCounty(initialValues.county);
    setSubmittedBy(initialValues.submittedBy);
    setCurrentDate(initialValues.currentDate);
    setContactPhoneNum(initialValues.contactPhoneNum);
    setContactEmail(initialValues.contactEmail);
    setProjectLocation(initialValues.projectLocation);
    setNationalForest(initialValues.nationalForest);
    setForestServiceDistrict(initialValues.forestServiceDistrict);
    setProjectLocationTownship(initialValues.projectLocationTownship);
    setProjectGoal(initialValues.projectGoal);
    setProjectDescription(initialValues.projectDescription);
    setTypeLand(initialValues.typeLand);
    setMeetPurpose(initialValues.meetPurpose);
    setProjectType(initialValues.projectType);
    setProjectAccomplishments(initialValues.projectAccomplishments);
    setStartDate(initialValues.startDate);
    setCompletionDate(initialValues.completionDate);
    setListPartnernships(initialValues.listPartnernships);
    setIdentifyCommunityBenefits(initialValues.identifyCommunityBenefits);
    setIdentifyFederalBenefits(initialValues.identifyFederalBenefits);
    setAccomplishmentMethods(initialValues.accomplishmentMethods);
    setGenerateMerchantableTimber(initialValues.generateMerchantableTimber);
    setAnticipatedCost(initialValues.anticipatedCost);
    setOtherSourceOfFunding(initialValues.otherSourceOfFunding);
    setMonitoringPlan(initialValues.monitoringPlan);
    setRemediesForFailure(initialValues.remediesForFailure);
    setErrors({});
  };
  const validations = {
    racNumber: [],
    fundingFiscalYear: [],
    state: [],
    county: [],
    submittedBy: [],
    currentDate: [],
    contactPhoneNum: [{ type: "Phone" }],
    contactEmail: [],
    projectLocation: [],
    nationalForest: [],
    forestServiceDistrict: [],
    projectLocationTownship: [],
    projectGoal: [],
    projectDescription: [],
    typeLand: [],
    meetPurpose: [],
    projectType: [],
    projectAccomplishments: [],
    startDate: [],
    completionDate: [],
    listPartnernships: [],
    identifyCommunityBenefits: [],
    identifyFederalBenefits: [],
    accomplishmentMethods: [],
    generateMerchantableTimber: [],
    anticipatedCost: [],
    otherSourceOfFunding: [],
    monitoringPlan: [],
    remediesForFailure: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          racNumber,
          fundingFiscalYear,
          state,
          county,
          submittedBy,
          currentDate,
          contactPhoneNum,
          contactEmail,
          projectLocation,
          nationalForest,
          forestServiceDistrict,
          projectLocationTownship,
          projectGoal,
          projectDescription,
          typeLand,
          meetPurpose,
          projectType,
          projectAccomplishments,
          startDate,
          completionDate,
          listPartnernships,
          identifyCommunityBenefits,
          identifyFederalBenefits,
          accomplishmentMethods,
          generateMerchantableTimber,
          anticipatedCost,
          otherSourceOfFunding,
          monitoringPlan,
          remediesForFailure,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new ProjectAttributes(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ProjectAttributesCreateForm")}
      {...rest}
    >
      <TextField
        label="Rac number"
        isRequired={false}
        isReadOnly={false}
        value={racNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber: value,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.racNumber ?? value;
          }
          if (errors.racNumber?.hasError) {
            runValidationTasks("racNumber", value);
          }
          setRacNumber(value);
        }}
        onBlur={() => runValidationTasks("racNumber", racNumber)}
        errorMessage={errors.racNumber?.errorMessage}
        hasError={errors.racNumber?.hasError}
        {...getOverrideProps(overrides, "racNumber")}
      ></TextField>
      <TextField
        label="Funding fiscal year"
        isRequired={false}
        isReadOnly={false}
        value={fundingFiscalYear}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear: value,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.fundingFiscalYear ?? value;
          }
          if (errors.fundingFiscalYear?.hasError) {
            runValidationTasks("fundingFiscalYear", value);
          }
          setFundingFiscalYear(value);
        }}
        onBlur={() =>
          runValidationTasks("fundingFiscalYear", fundingFiscalYear)
        }
        errorMessage={errors.fundingFiscalYear?.errorMessage}
        hasError={errors.fundingFiscalYear?.hasError}
        {...getOverrideProps(overrides, "fundingFiscalYear")}
      ></TextField>
      <TextField
        label="State"
        isRequired={false}
        isReadOnly={false}
        value={state}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state: value,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.state ?? value;
          }
          if (errors.state?.hasError) {
            runValidationTasks("state", value);
          }
          setState(value);
        }}
        onBlur={() => runValidationTasks("state", state)}
        errorMessage={errors.state?.errorMessage}
        hasError={errors.state?.hasError}
        {...getOverrideProps(overrides, "state")}
      ></TextField>
      <TextField
        label="County"
        isRequired={false}
        isReadOnly={false}
        value={county}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county: value,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.county ?? value;
          }
          if (errors.county?.hasError) {
            runValidationTasks("county", value);
          }
          setCounty(value);
        }}
        onBlur={() => runValidationTasks("county", county)}
        errorMessage={errors.county?.errorMessage}
        hasError={errors.county?.hasError}
        {...getOverrideProps(overrides, "county")}
      ></TextField>
      <TextField
        label="Submitted by"
        isRequired={false}
        isReadOnly={false}
        value={submittedBy}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy: value,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.submittedBy ?? value;
          }
          if (errors.submittedBy?.hasError) {
            runValidationTasks("submittedBy", value);
          }
          setSubmittedBy(value);
        }}
        onBlur={() => runValidationTasks("submittedBy", submittedBy)}
        errorMessage={errors.submittedBy?.errorMessage}
        hasError={errors.submittedBy?.hasError}
        {...getOverrideProps(overrides, "submittedBy")}
      ></TextField>
      <TextField
        label="Current date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={currentDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate: value,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.currentDate ?? value;
          }
          if (errors.currentDate?.hasError) {
            runValidationTasks("currentDate", value);
          }
          setCurrentDate(value);
        }}
        onBlur={() => runValidationTasks("currentDate", currentDate)}
        errorMessage={errors.currentDate?.errorMessage}
        hasError={errors.currentDate?.hasError}
        {...getOverrideProps(overrides, "currentDate")}
      ></TextField>
      <TextField
        label="Contact phone num"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={contactPhoneNum}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum: value,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.contactPhoneNum ?? value;
          }
          if (errors.contactPhoneNum?.hasError) {
            runValidationTasks("contactPhoneNum", value);
          }
          setContactPhoneNum(value);
        }}
        onBlur={() => runValidationTasks("contactPhoneNum", contactPhoneNum)}
        errorMessage={errors.contactPhoneNum?.errorMessage}
        hasError={errors.contactPhoneNum?.hasError}
        {...getOverrideProps(overrides, "contactPhoneNum")}
      ></TextField>
      <TextField
        label="Contact email"
        isRequired={false}
        isReadOnly={false}
        value={contactEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail: value,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.contactEmail ?? value;
          }
          if (errors.contactEmail?.hasError) {
            runValidationTasks("contactEmail", value);
          }
          setContactEmail(value);
        }}
        onBlur={() => runValidationTasks("contactEmail", contactEmail)}
        errorMessage={errors.contactEmail?.errorMessage}
        hasError={errors.contactEmail?.hasError}
        {...getOverrideProps(overrides, "contactEmail")}
      ></TextField>
      <TextField
        label="Project location"
        isRequired={false}
        isReadOnly={false}
        value={projectLocation}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation: value,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.projectLocation ?? value;
          }
          if (errors.projectLocation?.hasError) {
            runValidationTasks("projectLocation", value);
          }
          setProjectLocation(value);
        }}
        onBlur={() => runValidationTasks("projectLocation", projectLocation)}
        errorMessage={errors.projectLocation?.errorMessage}
        hasError={errors.projectLocation?.hasError}
        {...getOverrideProps(overrides, "projectLocation")}
      ></TextField>
      <TextField
        label="National forest"
        isRequired={false}
        isReadOnly={false}
        value={nationalForest}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest: value,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.nationalForest ?? value;
          }
          if (errors.nationalForest?.hasError) {
            runValidationTasks("nationalForest", value);
          }
          setNationalForest(value);
        }}
        onBlur={() => runValidationTasks("nationalForest", nationalForest)}
        errorMessage={errors.nationalForest?.errorMessage}
        hasError={errors.nationalForest?.hasError}
        {...getOverrideProps(overrides, "nationalForest")}
      ></TextField>
      <TextField
        label="Forest service district"
        isRequired={false}
        isReadOnly={false}
        value={forestServiceDistrict}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict: value,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.forestServiceDistrict ?? value;
          }
          if (errors.forestServiceDistrict?.hasError) {
            runValidationTasks("forestServiceDistrict", value);
          }
          setForestServiceDistrict(value);
        }}
        onBlur={() =>
          runValidationTasks("forestServiceDistrict", forestServiceDistrict)
        }
        errorMessage={errors.forestServiceDistrict?.errorMessage}
        hasError={errors.forestServiceDistrict?.hasError}
        {...getOverrideProps(overrides, "forestServiceDistrict")}
      ></TextField>
      <TextField
        label="Project location township"
        isRequired={false}
        isReadOnly={false}
        value={projectLocationTownship}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship: value,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.projectLocationTownship ?? value;
          }
          if (errors.projectLocationTownship?.hasError) {
            runValidationTasks("projectLocationTownship", value);
          }
          setProjectLocationTownship(value);
        }}
        onBlur={() =>
          runValidationTasks("projectLocationTownship", projectLocationTownship)
        }
        errorMessage={errors.projectLocationTownship?.errorMessage}
        hasError={errors.projectLocationTownship?.hasError}
        {...getOverrideProps(overrides, "projectLocationTownship")}
      ></TextField>
      <TextField
        label="Project goal"
        isRequired={false}
        isReadOnly={false}
        value={projectGoal}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal: value,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.projectGoal ?? value;
          }
          if (errors.projectGoal?.hasError) {
            runValidationTasks("projectGoal", value);
          }
          setProjectGoal(value);
        }}
        onBlur={() => runValidationTasks("projectGoal", projectGoal)}
        errorMessage={errors.projectGoal?.errorMessage}
        hasError={errors.projectGoal?.hasError}
        {...getOverrideProps(overrides, "projectGoal")}
      ></TextField>
      <SelectField
        label="Project description"
        placeholder="Please select an option"
        isDisabled={false}
        value={projectDescription}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription: value,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.projectDescription ?? value;
          }
          if (errors.projectDescription?.hasError) {
            runValidationTasks("projectDescription", value);
          }
          setProjectDescription(value);
        }}
        onBlur={() =>
          runValidationTasks("projectDescription", projectDescription)
        }
        errorMessage={errors.projectDescription?.errorMessage}
        hasError={errors.projectDescription?.hasError}
        {...getOverrideProps(overrides, "projectDescription")}
      >
        <option
          children="Short"
          value="SHORT"
          {...getOverrideProps(overrides, "projectDescriptionoption0")}
        ></option>
        <option
          children="Brief"
          value="BRIEF"
          {...getOverrideProps(overrides, "projectDescriptionoption1")}
        ></option>
      </SelectField>
      <SelectField
        label="Type land"
        placeholder="Please select an option"
        isDisabled={false}
        value={typeLand}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand: value,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.typeLand ?? value;
          }
          if (errors.typeLand?.hasError) {
            runValidationTasks("typeLand", value);
          }
          setTypeLand(value);
        }}
        onBlur={() => runValidationTasks("typeLand", typeLand)}
        errorMessage={errors.typeLand?.errorMessage}
        hasError={errors.typeLand?.hasError}
        {...getOverrideProps(overrides, "typeLand")}
      >
        <option
          children="State"
          value="STATE"
          {...getOverrideProps(overrides, "typeLandoption0")}
        ></option>
        <option
          children="Private"
          value="PRIVATE"
          {...getOverrideProps(overrides, "typeLandoption1")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "typeLandoption2")}
        ></option>
        <option
          children="None"
          value="NONE"
          {...getOverrideProps(overrides, "typeLandoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Meet purpose"
        placeholder="Please select an option"
        isDisabled={false}
        value={meetPurpose}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose: value,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.meetPurpose ?? value;
          }
          if (errors.meetPurpose?.hasError) {
            runValidationTasks("meetPurpose", value);
          }
          setMeetPurpose(value);
        }}
        onBlur={() => runValidationTasks("meetPurpose", meetPurpose)}
        errorMessage={errors.meetPurpose?.errorMessage}
        hasError={errors.meetPurpose?.hasError}
        {...getOverrideProps(overrides, "meetPurpose")}
      >
        <option
          children="Improves maintenance"
          value="IMPROVES_MAINTENANCE"
          {...getOverrideProps(overrides, "meetPurposeoption0")}
        ></option>
        <option
          children="Implement stewardship"
          value="IMPLEMENT_STEWARDSHIP"
          {...getOverrideProps(overrides, "meetPurposeoption1")}
        ></option>
        <option
          children="Restores landhealth"
          value="RESTORES_LANDHEALTH"
          {...getOverrideProps(overrides, "meetPurposeoption2")}
        ></option>
        <option
          children="Restore waterquality"
          value="RESTORE_WATERQUALITY"
          {...getOverrideProps(overrides, "meetPurposeoption3")}
        ></option>
      </SelectField>
      <SelectField
        label="Project type"
        placeholder="Please select an option"
        isDisabled={false}
        value={projectType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType: value,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.projectType ?? value;
          }
          if (errors.projectType?.hasError) {
            runValidationTasks("projectType", value);
          }
          setProjectType(value);
        }}
        onBlur={() => runValidationTasks("projectType", projectType)}
        errorMessage={errors.projectType?.errorMessage}
        hasError={errors.projectType?.hasError}
        {...getOverrideProps(overrides, "projectType")}
      >
        <option
          children="Road maintenance"
          value="ROAD_MAINTENANCE"
          {...getOverrideProps(overrides, "projectTypeoption0")}
        ></option>
        <option
          children="Road decomission"
          value="ROAD_DECOMISSION"
          {...getOverrideProps(overrides, "projectTypeoption1")}
        ></option>
        <option
          children="Trail maintenance"
          value="TRAIL_MAINTENANCE"
          {...getOverrideProps(overrides, "projectTypeoption2")}
        ></option>
        <option
          children="Trail obliteration"
          value="TRAIL_OBLITERATION"
          {...getOverrideProps(overrides, "projectTypeoption3")}
        ></option>
        <option
          children="Other infrastructure maintenance"
          value="OTHER_INFRASTRUCTURE_MAINTENANCE"
          {...getOverrideProps(overrides, "projectTypeoption4")}
        ></option>
        <option
          children="Soil productivity improvement"
          value="SOIL_PRODUCTIVITY_IMPROVEMENT"
          {...getOverrideProps(overrides, "projectTypeoption5")}
        ></option>
        <option
          children="Forest health improvement"
          value="FOREST_HEALTH_IMPROVEMENT"
          {...getOverrideProps(overrides, "projectTypeoption6")}
        ></option>
        <option
          children="Watershed maintenance"
          value="WATERSHED_MAINTENANCE"
          {...getOverrideProps(overrides, "projectTypeoption7")}
        ></option>
        <option
          children="Wildlife habitat restoration"
          value="WILDLIFE_HABITAT_RESTORATION"
          {...getOverrideProps(overrides, "projectTypeoption8")}
        ></option>
        <option
          children="Fish habtiat restoration"
          value="FISH_HABTIAT_RESTORATION"
          {...getOverrideProps(overrides, "projectTypeoption9")}
        ></option>
        <option
          children="Control noxious weeds"
          value="CONTROL_NOXIOUS_WEEDS"
          {...getOverrideProps(overrides, "projectTypeoption10")}
        ></option>
        <option
          children="Reestablish native species"
          value="REESTABLISH_NATIVE_SPECIES"
          {...getOverrideProps(overrides, "projectTypeoption11")}
        ></option>
        <option
          children="Fuels management"
          value="FUELS_MANAGEMENT"
          {...getOverrideProps(overrides, "projectTypeoption12")}
        ></option>
        <option
          children="Implement cwpp project"
          value="IMPLEMENT_CWPP_PROJECT"
          {...getOverrideProps(overrides, "projectTypeoption13")}
        ></option>
        <option
          children="Other project type"
          value="OTHER_PROJECT_TYPE"
          {...getOverrideProps(overrides, "projectTypeoption14")}
        ></option>
      </SelectField>
      <SelectField
        label="Project accomplishments"
        placeholder="Please select an option"
        isDisabled={false}
        value={projectAccomplishments}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments: value,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.projectAccomplishments ?? value;
          }
          if (errors.projectAccomplishments?.hasError) {
            runValidationTasks("projectAccomplishments", value);
          }
          setProjectAccomplishments(value);
        }}
        onBlur={() =>
          runValidationTasks("projectAccomplishments", projectAccomplishments)
        }
        errorMessage={errors.projectAccomplishments?.errorMessage}
        hasError={errors.projectAccomplishments?.hasError}
        {...getOverrideProps(overrides, "projectAccomplishments")}
      >
        <option
          children="Miles road maintained"
          value="MILES_ROAD_MAINTAINED"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption0")}
        ></option>
        <option
          children="Miles road decomissioned"
          value="MILES_ROAD_DECOMISSIONED"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption1")}
        ></option>
        <option
          children="Number structures maintained"
          value="NUMBER_STRUCTURES_MAINTAINED"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption2")}
        ></option>
        <option
          children="Acres of soil productivity improved"
          value="ACRES_OF_SOIL_PRODUCTIVITY_IMPROVED"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption3")}
        ></option>
        <option
          children="Miles river improved"
          value="MILES_RIVER_IMPROVED"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption4")}
        ></option>
        <option
          children="Miles fish habitat"
          value="MILES_FISH_HABITAT"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption5")}
        ></option>
        <option
          children="Acres native species"
          value="ACRES_NATIVE_SPECIES"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption6")}
        ></option>
        <option
          children="Acres hazardous fuel treatment"
          value="ACRES_HAZARDOUS_FUEL_TREATMENT"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption7")}
        ></option>
        <option
          children="Miles trail maintained"
          value="MILES_TRAIL_MAINTAINED"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption8")}
        ></option>
        <option
          children="Miles trail obliterated"
          value="MILES_TRAIL_OBLITERATED"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption9")}
        ></option>
        <option
          children="Acres forest health improved"
          value="ACRES_FOREST_HEALTH_IMPROVED"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption10")}
        ></option>
        <option
          children="Acres rangeland improved"
          value="ACRES_RANGELAND_IMPROVED"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption11")}
        ></option>
        <option
          children="Acres wildlife restored"
          value="ACRES_WILDLIFE_RESTORED"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption12")}
        ></option>
        <option
          children="Acres noxious weed controlled"
          value="ACRES_NOXIOUS_WEED_CONTROLLED"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption13")}
        ></option>
        <option
          children="Timber volume generated"
          value="TIMBER_VOLUME_GENERATED"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption14")}
        ></option>
        <option
          children="Jobs generated fte"
          value="JOBS_GENERATED_FTE"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption15")}
        ></option>
        <option
          children="People reached"
          value="PEOPLE_REACHED"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption16")}
        ></option>
        <option
          children="Direct economic benefit"
          value="DIRECT_ECONOMIC_BENEFIT"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption17")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "projectAccomplishmentsoption18")}
        ></option>
      </SelectField>
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={startDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate: value,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.startDate ?? value;
          }
          if (errors.startDate?.hasError) {
            runValidationTasks("startDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("startDate", startDate)}
        errorMessage={errors.startDate?.errorMessage}
        hasError={errors.startDate?.hasError}
        {...getOverrideProps(overrides, "startDate")}
      ></TextField>
      <TextField
        label="Completion date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={completionDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate: value,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.completionDate ?? value;
          }
          if (errors.completionDate?.hasError) {
            runValidationTasks("completionDate", value);
          }
          setCompletionDate(value);
        }}
        onBlur={() => runValidationTasks("completionDate", completionDate)}
        errorMessage={errors.completionDate?.errorMessage}
        hasError={errors.completionDate?.hasError}
        {...getOverrideProps(overrides, "completionDate")}
      ></TextField>
      <TextField
        label="List partnernships"
        isRequired={false}
        isReadOnly={false}
        value={listPartnernships}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships: value,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.listPartnernships ?? value;
          }
          if (errors.listPartnernships?.hasError) {
            runValidationTasks("listPartnernships", value);
          }
          setListPartnernships(value);
        }}
        onBlur={() =>
          runValidationTasks("listPartnernships", listPartnernships)
        }
        errorMessage={errors.listPartnernships?.errorMessage}
        hasError={errors.listPartnernships?.hasError}
        {...getOverrideProps(overrides, "listPartnernships")}
      ></TextField>
      <TextField
        label="Identify community benefits"
        isRequired={false}
        isReadOnly={false}
        value={identifyCommunityBenefits}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits: value,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.identifyCommunityBenefits ?? value;
          }
          if (errors.identifyCommunityBenefits?.hasError) {
            runValidationTasks("identifyCommunityBenefits", value);
          }
          setIdentifyCommunityBenefits(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "identifyCommunityBenefits",
            identifyCommunityBenefits
          )
        }
        errorMessage={errors.identifyCommunityBenefits?.errorMessage}
        hasError={errors.identifyCommunityBenefits?.hasError}
        {...getOverrideProps(overrides, "identifyCommunityBenefits")}
      ></TextField>
      <TextField
        label="Identify federal benefits"
        isRequired={false}
        isReadOnly={false}
        value={identifyFederalBenefits}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits: value,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.identifyFederalBenefits ?? value;
          }
          if (errors.identifyFederalBenefits?.hasError) {
            runValidationTasks("identifyFederalBenefits", value);
          }
          setIdentifyFederalBenefits(value);
        }}
        onBlur={() =>
          runValidationTasks("identifyFederalBenefits", identifyFederalBenefits)
        }
        errorMessage={errors.identifyFederalBenefits?.errorMessage}
        hasError={errors.identifyFederalBenefits?.hasError}
        {...getOverrideProps(overrides, "identifyFederalBenefits")}
      ></TextField>
      <SelectField
        label="Accomplishment methods"
        placeholder="Please select an option"
        isDisabled={false}
        value={accomplishmentMethods}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods: value,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.accomplishmentMethods ?? value;
          }
          if (errors.accomplishmentMethods?.hasError) {
            runValidationTasks("accomplishmentMethods", value);
          }
          setAccomplishmentMethods(value);
        }}
        onBlur={() =>
          runValidationTasks("accomplishmentMethods", accomplishmentMethods)
        }
        errorMessage={errors.accomplishmentMethods?.errorMessage}
        hasError={errors.accomplishmentMethods?.hasError}
        {...getOverrideProps(overrides, "accomplishmentMethods")}
      >
        <option
          children="Contract"
          value="CONTRACT"
          {...getOverrideProps(overrides, "accomplishmentMethodsoption0")}
        ></option>
        <option
          children="Federal workforce"
          value="FEDERAL_WORKFORCE"
          {...getOverrideProps(overrides, "accomplishmentMethodsoption1")}
        ></option>
        <option
          children="County workforce"
          value="COUNTY_WORKFORCE"
          {...getOverrideProps(overrides, "accomplishmentMethodsoption2")}
        ></option>
        <option
          children="Volunteers"
          value="VOLUNTEERS"
          {...getOverrideProps(overrides, "accomplishmentMethodsoption3")}
        ></option>
        <option
          children="Grant"
          value="GRANT"
          {...getOverrideProps(overrides, "accomplishmentMethodsoption4")}
        ></option>
        <option
          children="Agreement"
          value="AGREEMENT"
          {...getOverrideProps(overrides, "accomplishmentMethodsoption5")}
        ></option>
        <option
          children="Americorps"
          value="AMERICORPS"
          {...getOverrideProps(overrides, "accomplishmentMethodsoption6")}
        ></option>
        <option
          children="Ycc ccc crews"
          value="YCC_CCC_CREWS"
          {...getOverrideProps(overrides, "accomplishmentMethodsoption7")}
        ></option>
        <option
          children="Job corps"
          value="JOB_CORPS"
          {...getOverrideProps(overrides, "accomplishmentMethodsoption8")}
        ></option>
        <option
          children="Stewardship contract"
          value="STEWARDSHIP_CONTRACT"
          {...getOverrideProps(overrides, "accomplishmentMethodsoption9")}
        ></option>
        <option
          children="Merchantable timber plot"
          value="MERCHANTABLE_TIMBER_PLOT"
          {...getOverrideProps(overrides, "accomplishmentMethodsoption10")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "accomplishmentMethodsoption11")}
        ></option>
      </SelectField>
      <TextField
        label="Generate merchantable timber"
        isRequired={false}
        isReadOnly={false}
        value={generateMerchantableTimber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber: value,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.generateMerchantableTimber ?? value;
          }
          if (errors.generateMerchantableTimber?.hasError) {
            runValidationTasks("generateMerchantableTimber", value);
          }
          setGenerateMerchantableTimber(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "generateMerchantableTimber",
            generateMerchantableTimber
          )
        }
        errorMessage={errors.generateMerchantableTimber?.errorMessage}
        hasError={errors.generateMerchantableTimber?.hasError}
        {...getOverrideProps(overrides, "generateMerchantableTimber")}
      ></TextField>
      <SelectField
        label="Anticipated cost"
        placeholder="Please select an option"
        isDisabled={false}
        value={anticipatedCost}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost: value,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.anticipatedCost ?? value;
          }
          if (errors.anticipatedCost?.hasError) {
            runValidationTasks("anticipatedCost", value);
          }
          setAnticipatedCost(value);
        }}
        onBlur={() => runValidationTasks("anticipatedCost", anticipatedCost)}
        errorMessage={errors.anticipatedCost?.errorMessage}
        hasError={errors.anticipatedCost?.hasError}
        {...getOverrideProps(overrides, "anticipatedCost")}
      >
        <option
          children="Title2 funds requested"
          value="TITLE2_FUNDS_REQUESTED"
          {...getOverrideProps(overrides, "anticipatedCostoption0")}
        ></option>
        <option
          children="Is multiyear funding"
          value="IS_MULTIYEAR_FUNDING"
          {...getOverrideProps(overrides, "anticipatedCostoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Other source of funding"
        isRequired={false}
        isReadOnly={false}
        value={otherSourceOfFunding}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding: value,
              monitoringPlan,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.otherSourceOfFunding ?? value;
          }
          if (errors.otherSourceOfFunding?.hasError) {
            runValidationTasks("otherSourceOfFunding", value);
          }
          setOtherSourceOfFunding(value);
        }}
        onBlur={() =>
          runValidationTasks("otherSourceOfFunding", otherSourceOfFunding)
        }
        errorMessage={errors.otherSourceOfFunding?.errorMessage}
        hasError={errors.otherSourceOfFunding?.hasError}
        {...getOverrideProps(overrides, "otherSourceOfFunding")}
      ></TextField>
      <SelectField
        label="Monitoring plan"
        placeholder="Please select an option"
        isDisabled={false}
        value={monitoringPlan}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan: value,
              remediesForFailure,
            };
            const result = onChange(modelFields);
            value = result?.monitoringPlan ?? value;
          }
          if (errors.monitoringPlan?.hasError) {
            runValidationTasks("monitoringPlan", value);
          }
          setMonitoringPlan(value);
        }}
        onBlur={() => runValidationTasks("monitoringPlan", monitoringPlan)}
        errorMessage={errors.monitoringPlan?.errorMessage}
        hasError={errors.monitoringPlan?.hasError}
        {...getOverrideProps(overrides, "monitoringPlan")}
      >
        <option
          children="Describe proces plan"
          value="DESCRIBE_PROCES_PLAN"
          {...getOverrideProps(overrides, "monitoringPlanoption0")}
        ></option>
        <option
          children="Who conducts monitoring"
          value="WHO_CONDUCTS_MONITORING"
          {...getOverrideProps(overrides, "monitoringPlanoption1")}
        ></option>
        <option
          children="Total funding needed"
          value="TOTAL_FUNDING_NEEDED"
          {...getOverrideProps(overrides, "monitoringPlanoption2")}
        ></option>
      </SelectField>
      <SelectField
        label="Remedies for failure"
        placeholder="Please select an option"
        isDisabled={false}
        value={remediesForFailure}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              racNumber,
              fundingFiscalYear,
              state,
              county,
              submittedBy,
              currentDate,
              contactPhoneNum,
              contactEmail,
              projectLocation,
              nationalForest,
              forestServiceDistrict,
              projectLocationTownship,
              projectGoal,
              projectDescription,
              typeLand,
              meetPurpose,
              projectType,
              projectAccomplishments,
              startDate,
              completionDate,
              listPartnernships,
              identifyCommunityBenefits,
              identifyFederalBenefits,
              accomplishmentMethods,
              generateMerchantableTimber,
              anticipatedCost,
              otherSourceOfFunding,
              monitoringPlan,
              remediesForFailure: value,
            };
            const result = onChange(modelFields);
            value = result?.remediesForFailure ?? value;
          }
          if (errors.remediesForFailure?.hasError) {
            runValidationTasks("remediesForFailure", value);
          }
          setRemediesForFailure(value);
        }}
        onBlur={() =>
          runValidationTasks("remediesForFailure", remediesForFailure)
        }
        errorMessage={errors.remediesForFailure?.errorMessage}
        hasError={errors.remediesForFailure?.hasError}
        {...getOverrideProps(overrides, "remediesForFailure")}
      >
        <option
          children="Unused funds returned"
          value="UNUSED_FUNDS_RETURNED"
          {...getOverrideProps(overrides, "remediesForFailureoption0")}
        ></option>
        <option
          children="Other"
          value="OTHER"
          {...getOverrideProps(overrides, "remediesForFailureoption1")}
        ></option>
      </SelectField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
