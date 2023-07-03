/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ProjectAttributes } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ProjectAttributesUpdateFormInputValues = {
    racNumber?: string;
    fundingFiscalYear?: string;
    state?: string;
    county?: string;
    submittedBy?: string;
    currentDate?: string;
    contactPhoneNum?: string;
    contactEmail?: string;
    projectLocation?: string;
    nationalForest?: string;
    forestServiceDistrict?: string;
    projectLocationTownship?: string;
    projectGoal?: string;
    projectDescription?: string;
    typeLand?: string;
    meetPurpose?: string;
    projectType?: string;
    projectAccomplishments?: string;
    startDate?: string;
    completionDate?: string;
    listPartnernships?: string;
    identifyCommunityBenefits?: string;
    identifyFederalBenefits?: string;
    accomplishmentMethods?: string;
    generateMerchantableTimber?: string;
    anticipatedCost?: string;
    otherSourceOfFunding?: string;
    monitoringPlan?: string;
    remediesForFailure?: string;
};
export declare type ProjectAttributesUpdateFormValidationValues = {
    racNumber?: ValidationFunction<string>;
    fundingFiscalYear?: ValidationFunction<string>;
    state?: ValidationFunction<string>;
    county?: ValidationFunction<string>;
    submittedBy?: ValidationFunction<string>;
    currentDate?: ValidationFunction<string>;
    contactPhoneNum?: ValidationFunction<string>;
    contactEmail?: ValidationFunction<string>;
    projectLocation?: ValidationFunction<string>;
    nationalForest?: ValidationFunction<string>;
    forestServiceDistrict?: ValidationFunction<string>;
    projectLocationTownship?: ValidationFunction<string>;
    projectGoal?: ValidationFunction<string>;
    projectDescription?: ValidationFunction<string>;
    typeLand?: ValidationFunction<string>;
    meetPurpose?: ValidationFunction<string>;
    projectType?: ValidationFunction<string>;
    projectAccomplishments?: ValidationFunction<string>;
    startDate?: ValidationFunction<string>;
    completionDate?: ValidationFunction<string>;
    listPartnernships?: ValidationFunction<string>;
    identifyCommunityBenefits?: ValidationFunction<string>;
    identifyFederalBenefits?: ValidationFunction<string>;
    accomplishmentMethods?: ValidationFunction<string>;
    generateMerchantableTimber?: ValidationFunction<string>;
    anticipatedCost?: ValidationFunction<string>;
    otherSourceOfFunding?: ValidationFunction<string>;
    monitoringPlan?: ValidationFunction<string>;
    remediesForFailure?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ProjectAttributesUpdateFormOverridesProps = {
    ProjectAttributesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    racNumber?: PrimitiveOverrideProps<TextFieldProps>;
    fundingFiscalYear?: PrimitiveOverrideProps<TextFieldProps>;
    state?: PrimitiveOverrideProps<TextFieldProps>;
    county?: PrimitiveOverrideProps<TextFieldProps>;
    submittedBy?: PrimitiveOverrideProps<TextFieldProps>;
    currentDate?: PrimitiveOverrideProps<TextFieldProps>;
    contactPhoneNum?: PrimitiveOverrideProps<TextFieldProps>;
    contactEmail?: PrimitiveOverrideProps<TextFieldProps>;
    projectLocation?: PrimitiveOverrideProps<TextFieldProps>;
    nationalForest?: PrimitiveOverrideProps<TextFieldProps>;
    forestServiceDistrict?: PrimitiveOverrideProps<TextFieldProps>;
    projectLocationTownship?: PrimitiveOverrideProps<TextFieldProps>;
    projectGoal?: PrimitiveOverrideProps<TextFieldProps>;
    projectDescription?: PrimitiveOverrideProps<SelectFieldProps>;
    typeLand?: PrimitiveOverrideProps<SelectFieldProps>;
    meetPurpose?: PrimitiveOverrideProps<SelectFieldProps>;
    projectType?: PrimitiveOverrideProps<SelectFieldProps>;
    projectAccomplishments?: PrimitiveOverrideProps<SelectFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    completionDate?: PrimitiveOverrideProps<TextFieldProps>;
    listPartnernships?: PrimitiveOverrideProps<TextFieldProps>;
    identifyCommunityBenefits?: PrimitiveOverrideProps<TextFieldProps>;
    identifyFederalBenefits?: PrimitiveOverrideProps<TextFieldProps>;
    accomplishmentMethods?: PrimitiveOverrideProps<SelectFieldProps>;
    generateMerchantableTimber?: PrimitiveOverrideProps<TextFieldProps>;
    anticipatedCost?: PrimitiveOverrideProps<SelectFieldProps>;
    otherSourceOfFunding?: PrimitiveOverrideProps<TextFieldProps>;
    monitoringPlan?: PrimitiveOverrideProps<SelectFieldProps>;
    remediesForFailure?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type ProjectAttributesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ProjectAttributesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    projectAttributes?: ProjectAttributes;
    onSubmit?: (fields: ProjectAttributesUpdateFormInputValues) => ProjectAttributesUpdateFormInputValues;
    onSuccess?: (fields: ProjectAttributesUpdateFormInputValues) => void;
    onError?: (fields: ProjectAttributesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ProjectAttributesUpdateFormInputValues) => ProjectAttributesUpdateFormInputValues;
    onValidate?: ProjectAttributesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ProjectAttributesUpdateForm(props: ProjectAttributesUpdateFormProps): React.ReactElement;
