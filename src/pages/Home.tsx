import { Helmet } from 'react-helmet';
import { Section } from "../styles_by_emotion/global.style";
import { Button } from "../styles_by_emotion/header.style";
import { Search, state } from '../interface';

import {
  AlbumName,
  ButtonContainer,
  DeleteButton,
  HomeWrapper,
  SearchInput,
  SearchWrapper,
  SelectGenre,
  Skeleton,
  SongCard,
  SongGrid,
  SongImage,
  SongName,
  UpdateButton,
} from "../styles_by_emotion/home.style";
import songImage from "../assets/song.webp";
import { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GET_SONGS } from '../redux/sagas/types';
import UpdateSongPopUp from '../components/UpdateSongPopUp';
import { setEditSongSlice } from '../redux/slice/edit_song';



// Home page
const Home: React.FC = () => {

  const [open, setOpen] = useState<boolean>(false);

  // Show pop-up when button "Update" clicked
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Close pop-up
  const handleClose = () => {
    setOpen(false);
  };

  // Dispatch all songs
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_SONGS });
  }, []);


  const [search, setSearch] = useState<Search>(({
    genre: "",
    title: "",
    artist: "",
    album: "",
  }))

  const [searchedSongs, setSearchedSongs] = useState<Search[]>([]);

  const songs = useSelector((state: state) => state.songs.songs);

  const isLoading = useSelector((state: state) => state.songs.isLoading);
  console.log(isLoading);

  useEffect(() => {
    setSearchedSongs(songs);
  }, [songs.length]);

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setSearch((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (songs) {
    }
    const filtered = songs.filter((song) => {
      const { title, artist, album, genre } = search;
      return (
        song.title.toLowerCase().includes(title.toLowerCase()) &&
        song.artist.toLowerCase().includes(artist.toLowerCase()) &&
        song.album?.toLowerCase().includes(album.toLowerCase()) &&
        song.genre.toLowerCase().includes(genre.toLowerCase())
      );
    });
    setSearchedSongs(filtered);
  }, [search, songs]);

  // Handle the action triggerred when submit button in the update-song pop-up is clicked
  const handleUpdate = (song: any) => {
    dispatch(setEditSongSlice(song)); // Dispatch song

    handleClickOpen() // Show the dialog
  };

  const handleDelete = (songId: string) => {
    // Handle delete logic here
    console.log(`Delete song with ID ${songId}`);
  };

  return (
    <div>
      <UpdateSongPopUp
        open={open}
        handleClose={handleClose} />
      <Helmet>
        <title>Addis Music - Home</title>
        <link rel="icon" href={songImage} />
      </Helmet>
      <HomeWrapper>
        <Section>
          <SearchWrapper>
            <SelectGenre>
              <option value="">Select Genre</option>
              <option value="Ambasel">Ambasel</option>
              <option value="Anchihoye">Anchihoye</option>
              <option value="Country">Country</option>
              <option value="Acoustic">Acoustic</option>
            </SelectGenre>
            <SearchInput type="text" placeholder="Search Song" />
            <Button>Search</Button>
          </SearchWrapper>

          <SongGrid>
            {isLoading && new Array(3).fill(<Skeleton />)}
            {!isLoading && (
              <>
                {songs.map((song) => (
                  <SongCard key={song._id}>
                    <SongImage src={songImage} />
                    <SongName>{song.artist} - {song.title}</SongName>
                    <AlbumName>{song.album ? song.album : "No Album"}</AlbumName>
                    <ButtonContainer>
                      <UpdateButton onClick={() => handleUpdate(song)}>
                        Update
                      </UpdateButton>
                      <DeleteButton onClick={() => handleDelete(song._id)}>
                        Delete
                      </DeleteButton>
                    </ButtonContainer>
                  </SongCard>
                ))}
              </>
            )}
          </SongGrid>
        </Section>
      </HomeWrapper>
    </div>
  );
};

export default Home;