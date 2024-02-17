import { Helmet } from 'react-helmet';
import { Section } from "../styles_by_emotion/global.style";
import { Button } from "../styles_by_emotion/header.style";
import {
  AlbumName,
  ButtonContainer,
  DeleteButton,
  HomeWrapper,
  SearchInput,
  SearchWrapper,
  SelectGenre,
  SongCard,
  SongGrid,
  SongImage,
  SongName,
  UpdateButton,
} from "../styles_by_emotion/home.style";
import songImage from "../assets/song.webp";



// Home page
const Home = () => {
  const songs = [
    { id: 1, name: "Song 1", album: "Album 1" },
    { id: 2, name: "Song 2", album: "Album 2" },
    { id: 3, name: "Song 3", album: "Album 3" },
    // Add more songs here
  ];

  const handleUpdate = (songId: number) => {
    // Handle update logic here
    console.log(`Update song with ID ${songId}`);
  };

  const handleDelete = (songId: number) => {
    // Handle delete logic here
    console.log(`Delete song with ID ${songId}`);
  };

  return (
    <div>
      <Helmet>
        <title>Addis Music - Home</title>
        <link rel="icon" href={songImage} />
      </Helmet>
      <HomeWrapper>
        <Section>
          <SearchWrapper>
            <SelectGenre>
              <option value="">Select Genre</option>
              <option value="rock">Rock</option>
              <option value="pop">Pop</option>
              <option value="hip-hop">Hip Hop</option>
            </SelectGenre>
            <SearchInput type="text" placeholder="Search Song" />
            <Button>Search</Button>
          </SearchWrapper>

          <SongGrid>
            {songs.map((song) => (
              <SongCard key={song.id}>
                <SongImage src={songImage} />
                <SongName>{song.name}</SongName>
                <AlbumName>{song.album}</AlbumName>
                <ButtonContainer>
                  <UpdateButton onClick={() => handleUpdate(song.id)}>
                    Update
                  </UpdateButton>
                  <DeleteButton onClick={() => handleDelete(song.id)}>
                    Delete
                  </DeleteButton>
                </ButtonContainer>
              </SongCard>
            ))}
          </SongGrid>
        </Section>
      </HomeWrapper>
    </div>
  );
};

export default Home;
