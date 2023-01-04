import React from "react";
import { Layout } from "./components/layout";
import { GlobalStyle } from "./globalStyle";
import { ChatPage } from "./pages/chat-page";
import { WelcomePage } from "./pages/welcome-page";
import { AppBody } from "./styled";

function App() {
  return (
    <AppBody>
      <GlobalStyle />
      <Layout>
        <ChatPage
          chat={{ id: 1, name: "testChat", creatorId: 1 }}
          chatInfo={{
            id: 1,
            chatId: 1,
            messages: [],
            users: [
              {
                id: 1,
                username: "Oleg Jabrony",
                login: "tt@gmail.com",
                statusId: 1,
              },
            ],
          }}
        ></ChatPage>
      </Layout>
    </AppBody>
  );
}

export default App;
