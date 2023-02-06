import { all } from 'redux-saga/effects';

import { chatsWatcher } from './user-chats.saga';
import { dmsWatcher } from './user-dms.saga';
import { userWatcher } from './user.saga';

export default function* rootSaga() {
  yield all([userWatcher(), chatsWatcher(), dmsWatcher()]);
}
