import { styled } from "@/theme/stitches.config";
import { forwardRef } from "react";
import { getResponsiveValues } from "@/utils/getResponsiveValues";

const BaseStack = styled("div", {
  display: "flex",

  variants: {
    width: {
      content: {
        maxWidth: "$content",
      },
    },
    row: {
      true: {
        flexDirection: "row",
      },
    },
    column: {
      true: {
        flexDirection: "column",
      },
    },
  },
});

type DivProps = JSX.IntrinsicElements["div"];

interface StackProps {
  gap?: string | number;
  basis?: string | number;
  align?: string;
  justify?:
    | "normal"
    // Positional alignment
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end"
    | "left"
    | "right"
    // Distributed alignment
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "stretch";
  css?: any;
}

export const Stack = forwardRef<HTMLDivElement, StackProps & DivProps>(
  (
    {
      gap = 0,
      basis = "normal",
      align = "normal",
      justify = "normal",
      css = {},
      ...props
    }: StackProps,
    ref
  ) => {
    const responsiveValues = getResponsiveValues({ key: "gap", values: gap });

    return (
      <BaseStack
        css={{
          gap: `$${gap}`,
          alignItems: align,
          justifyContent: justify,
          flexBasis: basis,
          ...responsiveValues,
          ...css,
        }}
        {...props}
        ref={ref}
      />
    );
  }
);

Stack.displayName = "Stack";

export default Stack;
