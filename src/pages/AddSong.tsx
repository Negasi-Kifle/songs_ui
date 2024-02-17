import { useState } from "react";
import {
  AddSongContainer,
  Button,
  Form,
  FormGroup,
  Heading,
  Input,
  Label,
} from "../styles_by_emotion/addsong.style";
import { Section, Wrapper } from "../styles_by_emotion/global.style";

// Add-song page
const AddSong = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");

  return (
    <Wrapper>
      <Section>
        <AddSongContainer>
          <Heading>Add New Song</Heading>
          <Form>
            <FormGroup>
              <Label>Title :</Label>
              <Input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Artist :</Label>
              <Input
                type="text"
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Album :</Label>
              <Input
                type="text"
                value={album}
                onChange={(e) => setAlbum(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label>Genre :</Label>
              <Input
                type="text"
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
              />
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        </AddSongContainer>
      </Section>
    </Wrapper>
  );
};

export default AddSong;
