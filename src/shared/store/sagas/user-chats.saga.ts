import { put, call, takeEvery, select } from "redux-saga/effects";
import { userActions } from "../reducers/user.slice";
import { RootState } from "..";
import { ChatService } from "../../services/chat.service";
// TODO: replace any type

export function* getChatsWorker(): any {
  const user = yield select((state: RootState) => state.userReducer.user);
  if (!user) {
    yield put(userActions.setUserChats([]));
  } else {
    console.log("fetching chats for user with id", user.id);
    const chats = yield call(
      (id) => ChatService.Instance.getByUserId(id),
      user.id
    );
    yield put(userActions.setUserChats(chats));
  }
}

export function* chatsWatcher() {
  yield takeEvery(userActions.fetchUserChats, getChatsWorker);
}
