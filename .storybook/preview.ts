import type { Preview } from "@storybook/react";
import "../src/styles/globals.scss";
import "../src/styles/normalize.scss";

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
