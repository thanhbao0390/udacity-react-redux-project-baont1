import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let users = {
  sarahedo: {
    id: 'sarahedo',
    password: 'password123',
    name: 'Sarah Edo',
    avatarURL: null,
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionOne',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    password: 'abc321',
    name: 'Tyler McGinnis',
    avatarURL: null,
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  mtsamis: {
    id: 'mtsamis',
    password: 'xyz123',
    name: 'Mike Tsamis',
    avatarURL: null,
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionOne'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  },
  zoshikanlu: {
    id: 'zoshikanlu',
    password: 'pass246',
    name: 'Zenobia Oshikanlu',
    avatarURL: null,
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
    },
    questions: [],
  }
}
const userInfo = localStorage.getItem('userInfo')
  ? localStorage.getItem('userInfo')
  : null;

const initialState = {
  userInfo: userInfo,
  status: 'idle',
};

export const authAsync = createAsyncThunk(
  'auth/login',
  async (userInfo) => {
    return userInfo;
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;

    },
    login: (state, action) => {
      let user = users[action.payload.id];
      if (user) {
        state.userInfo = {
          ...user
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(authAsync.fulfilled, (state) => {
        state.status = 'idle';
      });
  },
});

export const usersList = () => {
  let usersList = [];
  Object.keys(users).forEach(function (key, index) {
    usersList.push(users[key]);
  });
  return usersList;
};

export const { logout, login } = userSlice.actions;

export default userSlice.reducer;
