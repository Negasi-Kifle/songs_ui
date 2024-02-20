import { createSlice } from "@reduxjs/toolkit";

const editSong = createSlice({
  name: "editSong",
  initialState: {
    title: "",
    artist: "",
    album: "",
    genre: "Ambasel",
  },
  reducers: {
    setEditSongSlice: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setEditSongSlice } = editSong.actions;

export default editSong.reducer;
