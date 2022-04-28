import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPostList = createAsyncThunk(
  "post/fetchPostList",
  async () => {
    return "";
  }
);

export const postSlice = createSlice({
  name: "post",
  initialState: {
    text: "",
    videos: [],
    images: [],
  },
  reducers: {
    setPost: (state, payload) => {
      const { text, videos, images } = payload;
      state.text = text;
      state.videos = videos;
      state.images = images;
    },
  },
  extraReducers: {},
});

export const { setPost } = postSlice.actions;
