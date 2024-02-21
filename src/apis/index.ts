import axios from "axios";
import { Song, UpdateFormValues } from "../interface";

const VITE_API_URL = import.meta.env.VITE_API_URL;
const VITE_API_KEY = import.meta.env.VITE_API_KEY;

// Fetch all songs in DB
export const getSongsAPI = async () =>
  axios.get(`${VITE_API_URL}/songs`, {
    headers: { "x-api-key": VITE_API_KEY },
  });

// Fetch a song by id
export const getSongByIdAPI = async (id: number) =>
  axios.get(`${VITE_API_URL}/songs/${id}`, {
    headers: { "x-api-key": VITE_API_KEY },
  });

// Create a song
export const createSongAPI = async (song: Song) => {
  return axios.post(`${VITE_API_URL}/songs`, song, {
    headers: { "x-api-key": VITE_API_KEY },
  });
};

// Update a song
export const updateSongAPI = async (id: number, song: UpdateFormValues) => {
  return axios.patch(
    `${VITE_API_URL}/songs/${id}`,
    {
      title: song.title,
      artist: song.artist,
      album: song.album,
      genre: song.genre,
    },
    {
      headers: { "x-api-key": VITE_API_KEY },
    }
  );
};

// Delete a song
export const deleteSongAPI = async (_id: number) =>
  axios.delete(`${VITE_API_URL}/songs/${_id}`, {
    headers: { "x-api-key": VITE_API_KEY },
  });
