import { config } from "@/theme/stitches.config";

interface GetResponsiveValuesProps {
  key: string;
  values: string[] | number[] | string | number;
  prefix?: boolean;
}

/**
 * @param {string} key style key to apply responsive values to
 * @param {array || string || number} values values or value to to
 * @param {boolean} prefix whether to prefix the value with a dollar sign
 * @returns an object with the key/value pairs mapped to media breakpoints or an empty object
 */
export const getResponsiveValues = ({
  key,
  values,
  prefix = true,
}: GetResponsiveValuesProps) => {
  if (!values || !key) {
    return {};
  }
  const valuePrefix = prefix ? "$" : "";
  const isArray = Array.isArray(values);
  const responsiveValues: Record<string, any> = {};
  responsiveValues[key] = isArray
    ? `${valuePrefix}${values[0]}`
    : `${valuePrefix}${values}`;

  if (!isArray) {
    return responsiveValues;
  }

  const { media } = config || {};

  if (!media) {
    console.warn(
      "[getResponsiveValues] could not get media object from stitches. media:",
      media
    );
    return {};
  }

  // construct new object from media breakpoints
  const bps: Record<string, any> = {};
  const bpArray = Object.keys(media);

  for (let i = 0; i < bpArray.length; i++) {
    const currentBp = bpArray[i];
    bps[i + 1] = "@" + currentBp;
  }

  // construct a new object for each value
  for (let i = 1; i < values.length; i++) {
    const currentValue = values[i];

    // Skip current bp if value is falsy ( this allows for values like: [1, null, 2] )
    if (!currentValue && currentValue !== 0) {
      continue;
    }

    const currentBp = bps[i];
    const styleObject: Record<string, any> = {};

    styleObject[key] = valuePrefix + currentValue;
    responsiveValues[currentBp] = styleObject;
  }

  return responsiveValues;
};

export default getResponsiveValues;
