import { configureStore } from "@reduxjs/toolkit";
import chatPanelReducer from './ui/chatPanel';

const store = configureStore({
  reducer: {
    chatPanel: chatPanelReducer,
  },
});

export default store;
