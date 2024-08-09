import React from "react";
import type { Preview } from "@storybook/react";
import { AppContainer } from "../src/components/AppContainer";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <AppContainer>
        <Story />
      </AppContainer>
    ),
  ],
};

export default preview;
