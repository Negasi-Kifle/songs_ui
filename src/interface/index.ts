export interface InputProps {
  variant: "primary" | "secondary";
}

// Toggle button props
export interface ToggleButtonProps {
  isActive: boolean;
}

// Fields in song document
export interface Song {
  title: string;
  artist: string;
  album?: string;
  genre: string;
}

// Search song
export interface Search {
  genre: string | "";
  album: string;
  title: string;
  artist: string;
  _id?: any;
}

// Form
export interface FormValues {
  title: string;
  artist: string;
  album: string;
  genre: string;
  _id: string;
}

export interface UpdateFormValues {
  title: string;
  artist: string;
  album: string;
  genre: string;
}

// State
export interface state {
  song: FormValues;
  songs: songsState;
  editSong: FormValues;
}

// Songs state
export interface songsState {
  songs: FormValues[];
  isLoading: boolean;
}

// Genre stat
export interface GenreStat {
  _id: string;
  totalSongs: number;
}

// Analytics structure
export interface AnalyticsType {
  allSongs: number;
  uniqueArtists: number;
  uniqueAlbums: number;
  uniqueGenres: number;
  songsByArtist: SongsByArtist[];
  songsByAlbum: SongsByAlbum[];
  songsByGenre: SongsByGenre[];
}

// Structure of songs-by-artist
interface SongsByArtist {
  artist: string;
  count: number;
}

// Structure of songs-by-album
interface SongsByAlbum {
  album: string;
  count: number;
}

// Structure of songs-by-genre
interface SongsByGenre {
  genre: string;
  count: number;
}

// Artist stat
export interface ArtistStat {
  artists: individual[];
  album: string;
  totalSongs: number;
  _id?: string;
}

//
export interface individual {
  album: string;
  totalSongs: number;
}
