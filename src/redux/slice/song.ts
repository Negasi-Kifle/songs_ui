import { createSlice } from "@reduxjs/toolkit";

const song = createSlice({
  name: "song",
  initialState: {
    title: "",
    artist: "",
    album: "",
    genre: "Ambasel",
  },
  reducers: {
    setSongSlice: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setSongSlice } = song.actions;

export default song.reducer;
