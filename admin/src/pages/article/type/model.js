import {
  addArticleTypeList,
  queryArticleTypeList,
  removeArticleTypeList,
  updateArticleTypeList,
} from './service';
const Model = {
  namespace: 'articleTypeList',
  state: {
    list: [],
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      const response = yield call(queryArticleTypeList, payload);
      yield put({
        type: 'queryList',
        payload: response,
      });
    },

    *appendFetch({ payload }, { call, put }) {
      const response = yield call(queryArticleTypeList, payload);
      yield put({
        type: 'appendList',
        payload: Array.isArray(response) ? response : [],
      });
    },

    *submit({ payload }, { call, put }) {
      let callback;

      if (payload.id) {
        callback =
          Object.keys(payload).length === 1 ? removeArticleTypeList : updateArticleTypeList;
      } else {
        callback = addArticleTypeList;
      }

      const response = yield call(callback, payload); // post

      yield put({
        type: 'queryList',
        payload: response,
      });
    },
  },
  reducers: {
    queryList(state, action) {
      return { ...state, list: action.payload.data };
    },

    appendList(
      state = {
        list: [],
      },
      action,
    ) {
      return { ...state, list: state.list.concat(action.payload) };
    },
  },
};
export default Model;
