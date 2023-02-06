import { put, call, takeEvery, select } from 'redux-saga/effects';

import { userActions } from '../reducers/user.slice';
import { RootState } from '..';
import { DmService } from 'shared/services/dm.service';
// TODO: replace any type

export function* getDmsWorker(): any {
  const user = yield select((state: RootState) => state.userReducer.user);
  if (!user) {
    yield put(userActions.setUserDms([]));
  } else {
    console.log('fetching dms for user with id', user.id);
    const dms = yield call((id) => DmService.Instance.getByOwnerId(id), user.id);
    yield put(userActions.setUserDms(dms));
  }
}

export function* dmsWatcher() {
  yield takeEvery(userActions.fetchUserDms, getDmsWorker);
}
