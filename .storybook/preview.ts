import { Preview, ReactRenderer } from "@storybook/react";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";
import { withThemeByClassName } from "@storybook/addon-themes";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-remix-react-router";
import withI18next from "./decorators/withI18next";

import { CUSTOM_VIEWPORTS } from "./customViewports";

import "../src/styles/main.css";
import withQueryProvider from "./decorators/withQueryProvider";
import withApiProvider from "./decorators/withApiProvider";
import withToast from "./decorators/withToast";
import mockApi from "./mockApi";
import withModal from "./decorators/withModal";
import withCustomZodErrorMap from "./decorators/withCustomZodErrorMap";
import withUser from "./decorators/withUser";

const preview: Preview = {
  parameters: {
    layout: "fullscreen",
    reactRouter: reactRouterParameters({
      routing: { path: "/" },
    }),
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...CUSTOM_VIEWPORTS,
      },
      defaultViewport: "large",
    },
  },
  decorators: [
    withModal,
    withApiProvider(mockApi),
    withI18next,
    withRouter,
    withQueryProvider,
    withCustomZodErrorMap,
    withThemeByClassName<ReactRenderer>({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
    withToast,
    withUser,
  ],
};

export default preview;
