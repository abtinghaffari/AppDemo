/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function NotesList(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="0.5px SOLID rgba(0,0,0,0.25)"
      borderRadius="5px"
      padding="15.5px 15.5px 15.5px 15.5px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NotesList")}
      {...rest}
    >
      <Flex
        gap="0"
        direction="column"
        width="287px"
        height="336px"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "content")}
      >
        <Flex
          gap="0"
          direction="row"
          width="unset"
          height="24px"
          justifyContent="space-between"
          alignItems="flex-start"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "header")}
        >
          <Text
            fontFamily="Inter"
            fontSize="20px"
            fontWeight="700"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="What is Title II?"
            {...getOverrideProps(overrides, "What is Title II?")}
          ></Text>
        </Flex>
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="24px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="0.01px"
          width="287px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="&#xA;Title II provides assistance to agricultural producers and landowners to adopt conservation activities on agricultural and forest lands to protect and improve water quality and quantity, soil health, wildlife habitat, and air quality."
          {...getOverrideProps(
            overrides,
            "Title II provides assistance to agricultural producers and landowners to adopt conservation activities on agricultural and forest lands to protect and improve water quality and quantity, soil health, wildlife habitat, and air quality."
          )}
        ></Text>
      </Flex>
    </Flex>
  );
}
