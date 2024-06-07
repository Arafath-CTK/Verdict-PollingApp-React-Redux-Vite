import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  polls: [],
};

const pollsSlice = createSlice({
  name: "polls",
  initialState,
  reducers: {
    addPoll: (state, action) => {
      state.polls.push(action.payload);
    },
    vote: (state, action) => {
      const { pollId, optionIndex } = action.payload;
      const poll = state.polls.find((poll) => poll.id === pollId);
      if (poll) {
        poll.options[optionIndex].votes += 1;
      }
    },
  },
});

export const { addPoll, vote } = pollsSlice.actions;
export default pollsSlice.reducer;
