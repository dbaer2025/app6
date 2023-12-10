/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, DividerProps, FlexProps, IconProps, TextFieldProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UINewReviewOverridesProps = {
    UINewReview?: PrimitiveOverrideProps<FlexProps>;
    Content?: PrimitiveOverrideProps<FlexProps>;
    "Edit Profile"?: PrimitiveOverrideProps<FlexProps>;
    Icon?: PrimitiveOverrideProps<ViewProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "Create Review"?: PrimitiveOverrideProps<TextProps>;
    Divider4075334?: PrimitiveOverrideProps<DividerProps>;
    Forms?: PrimitiveOverrideProps<FlexProps>;
    TextField4075415?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4075436?: PrimitiveOverrideProps<TextFieldProps>;
    TextField4075443?: PrimitiveOverrideProps<TextFieldProps>;
    Divider4075339?: PrimitiveOverrideProps<DividerProps>;
    "Frame 322"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type UINewReviewProps = React.PropsWithChildren<Partial<FlexProps> & {
    d?: any;
} & {
    overrides?: UINewReviewOverridesProps | undefined | null;
}>;
export default function UINewReview(props: UINewReviewProps): React.ReactElement;
