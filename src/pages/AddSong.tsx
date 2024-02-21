import { useState } from "react";
import {
  AddSongContainer,
  Button,
  FormGroup,
  Heading,
  Input,
  Label,
} from "../styles_by_emotion/addsong.style";
import { Section, Wrapper } from "../styles_by_emotion/global.style";
import Form from "../components/AddSongForm";

// Add-song page
const AddSong = () => {
  return (
    <Wrapper>
      <Section>
        <AddSongContainer>
          <Heading>Add New Song</Heading>
          <Form />
        </AddSongContainer>
      </Section>
    </Wrapper>
  );
};

export default AddSong;
