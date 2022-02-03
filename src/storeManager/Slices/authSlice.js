import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const authSlice = createSlice({ // Simplifies the action and reducer boilerplate
  name: 'auth',
  initialState: {
    auth: null
  },
  reducers: {
    getAuth:(state,{payload}) => {
        state.auth = payload;
      },
  },
});

// Actions
export const { getAuth} = authSlice.actions;

// export const fetchAuth= (showId) => async dispatch => {
  //     const data = await axios.get()
  //   dispatch(getAuth(data));
// };

export const selectAuth = state => state.auth;

export default authSlice.reducer;
