import { createBrowserRouter, Navigate } from 'react-router-dom';

import { routes } from './routes';
import App from 'App';
import { ChatPage } from 'pages/chat-page';
import { WelcomePage } from 'pages/welcome-page';
import { DmPage } from 'pages/dm-page';

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <App />,
    children: [
      {
        element: <WelcomePage />,
        index: true,
      },
      {
        path: routes.chat + ':id',
        element: <ChatPage />,
      },
      {
        path: routes.dm + ':id',
        element: <DmPage />,
      },
    ],
  },
  {
    path: routes.welcome,
    element: <Navigate to={routes.home} />,
  },
]);
