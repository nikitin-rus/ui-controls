import { ReactNode } from "react";
import { ITheme, Theme } from "../../styles/theme";
import { GlobalStyle } from "./AppContainer.styled";

interface AppContainerProps {
  children?: ReactNode;
  theme?: ITheme;
}

const AppContainer = function ({ theme = Theme, children }: AppContainerProps) {
  return (
    <>
      <GlobalStyle theme={theme} />
      {children}
    </>
  );
};

export { AppContainer };
