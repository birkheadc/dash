import React from "react";
import { z } from "zod";
import zodCustomErrorMap from "../../src/zodErrorMap";

z.setErrorMap(zodCustomErrorMap);

/**
 * Decorator to set the custom Zod error map for the story to match the application..
 * @param Story - The story to wrap.
 * @returns A wrapped story with the custom Zod error map provided.
 */
const withCustomZodErrorMap = (Story: any) => {
  return <Story />;
};

export default withCustomZodErrorMap;
