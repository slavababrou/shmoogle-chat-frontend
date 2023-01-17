import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import { ChatPage } from "../../pages/chat-page";
import { WelcomePage } from "../../pages/welcome-page";
import { routes } from "./routes";

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <App />,
    children: [
      {
        path: routes.welcome,
        element: <WelcomePage />,
      },
      {
        path: routes.chat,
        element: <ChatPage />,
      },
    ],
  },
]);
