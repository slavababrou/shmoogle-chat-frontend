import { put, call, takeEvery } from 'redux-saga/effects';

import { USER_TOKEN } from 'core/constants/tokens';
import { DmService } from 'shared/services/dm.service';
import { ChatService } from '../../services/chat.service';
import { UserService } from '../../services/user.service';
import { userActions } from '../reducers/user.slice';

// TODO: replace any type
export function* getUserWorker(): any {
  console.log('user fetch worker!');
  const id = localStorage.getItem(USER_TOKEN);
  if (id == null) {
    yield put(userActions.setLoggedUser(null));
  } else {
    const user = yield call((id) => UserService.Instance.get(id), +id);
    yield put(userActions.setLoggedUser(user));

    const chats = yield call((id) => ChatService.Instance.getByUserId(id), user.id);
    yield put(userActions.setUserChats(chats));

    const dms = yield call((id) => DmService.Instance.getByOwnerId(id), user.id);
    yield put(userActions.setUserDms(dms));
  }
}

export function* userWatcher() {
  yield takeEvery(userActions.fetchLoggedUser, getUserWorker);
}
