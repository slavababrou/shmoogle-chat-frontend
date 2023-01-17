import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Layout } from "./components/layout";
import { USER_TOKEN } from "./core/constants/tokens";
import { useAppDispatch } from "./shared/hooks/app-dispatch.hook";
import { userActions } from "./shared/store/reducers/user.slice";
import { AppBody } from "./styled";

function App() {
  const dispatch = useAppDispatch();
  localStorage.setItem(USER_TOKEN, "1");
  useEffect(() => {
    dispatch(userActions.fetchLoggedUser());
  }, []);

  return (
    <AppBody>
      <Layout>
        <Outlet />
      </Layout>
    </AppBody>
  );
}

export default App;
