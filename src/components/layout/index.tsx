import { FC, ReactNode } from "react";
import { useAppSelector } from "shared/hooks/app-selector.hook";
import { Header } from "./header";
import { Sidebar } from "./sidebar";
import { BodyContainer, FlexContainer } from "./styled";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { isActive } = useAppSelector((state) => state.sidebarReducer);

  return (
    <>
      <Header />
      <FlexContainer width={"100%"} height={"100%"}>
        <Sidebar />
        <BodyContainer margin={isActive ? "" : "0 0 0 72px"}>
          {children}
        </BodyContainer>
      </FlexContainer>
    </>
  );
};
