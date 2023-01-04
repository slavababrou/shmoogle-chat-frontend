import { FC, ReactNode } from "react";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { BodyContainer, FlexContainer } from "./styled";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <FlexContainer width={"100%"} height={"100%"}>
        <Sidebar />
        <BodyContainer>{children}</BodyContainer>
      </FlexContainer>
    </>
  );
};
