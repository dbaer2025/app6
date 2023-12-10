/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { MyIconProps } from "./MyIcon";
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
export declare type ReviewCard1OverridesProps = {
    ReviewCard1?: PrimitiveOverrideProps<FlexProps>;
    image?: PrimitiveOverrideProps<ImageProps>;
    "Frame 324"?: PrimitiveOverrideProps<ViewProps>;
    MyIcon?: MyIconProps;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Card Area"?: PrimitiveOverrideProps<FlexProps>;
    "Text Group"?: PrimitiveOverrideProps<FlexProps>;
    "Name of Restaurant"?: PrimitiveOverrideProps<TextProps>;
    "Writer/Author"?: PrimitiveOverrideProps<TextProps>;
    "Description of Review"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ReviewCard1Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ReviewCard1OverridesProps | undefined | null;
}>;
export default function ReviewCard1(props: ReviewCard1Props): React.ReactElement;
