import { createSlice } from "@reduxjs/toolkit";

const chatPanel = createSlice({
  name: "chatPanel",
  initialState: {
    userPanel: false,
    threadPanel: false,
  },
  reducers: {
    openUserPanel: (state) => {
      state.userPanel = true;
      state.threadPanel = false;
    },
    openThreadPanel: (state) => {
      state.threadPanel = true;
      state.userPanel = false;
    },
    closeChatPanel: (state) => {
      state.userPanel = false;
      state.threadPanel = false;
    },
  },
});

export default chatPanel.reducer;
export const { openUserPanel, openThreadPanel, closeChatPanel } =
  chatPanel.actions;
