import React from "react";
import { Api } from "../../src/types/api/api";
import { ApiProvider } from "../../src/contexts/ApiContext/ApiProvider";
import { DecoratorFunction } from "storybook/internal/types";
import { ReactRenderer } from "@storybook/react";

/**
 * Decorator to provide a API to the story. Extracts the API from the story parameters. Useful for mocking the API.
 * @param Story - The story to wrap.
 * @param options - The options for the story.
 * @returns A wrapped story with the API provided.
 */
const withApiProvider = (
  api: Api,
): DecoratorFunction<ReactRenderer, { [x: string]: any }> => {
  return (Story: any) => {
    return (
      <ApiProvider api={api}>
        <Story />
      </ApiProvider>
    );
  };
};

export default withApiProvider;
