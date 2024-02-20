import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

// Style for the home wrapper
export const HomeWrapper = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
`;

// Style for header wrapper
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 1rem;
`;

// Style for the logo
export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

// Style for the buttons in home page
export const Button = styled.button`
  background-color: #176897;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-left: 1rem;
  cursor: pointer;
  font-size: 15px;
`;

// Style for the search wrapper
export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

// Style for the select-genre dropdown in the homepage
export const SelectGenre = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  margin-right: 1rem;
`;

// Style for the search input field in the homepage
export const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  margin-right: 1rem;
`;

// Style for the song grid
export const SongGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

// Style for a song card
export const SongCard = styled.div`
  background-image: linear-gradient(to bottom, #176897, #cef1ff);
  padding: 2rem;
  border-radius: 1rem;
`;

// Style for song image
export const SongImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;

  height: auto;
  margin-bottom: 0.1rem;
`;

// Style for the song name
export const SongName = styled.h3`
  font-size: 1.0rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

// Style for the album name
export const AlbumName = styled.p`
  font-size: 1%.2rem;
  color: #666;
  margin-bottom: 1rem;
`;

// Style fir the container of the "Update" and "Delete" buttons
export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

// Style for the update button
export const UpdateButton = styled.button`
  padding: 8px 0;
  background-color: #176897;
  color: #fff;
  width: 100%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 15px;
`;

// Style for the delete button
export const DeleteButton = styled.button`
  padding: 8px 0;
  width: 100%;
  font-size: 15px;
  background-color: #df0000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ParagraphSmall = styled.p`
  color: white;
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 10rem;
  text-align: center;
`;



export const skeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

// Loading skeleton styles
export const Skeleton = styled.div`
  width: 100%;
  height: 18rem;
  border-radius: 0.5rem;

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0)
  );
  background-size: 200px 100%;
  animation: ${skeletonAnimation} 1.5s infinite linear;
`;

export const SkeletonText = styled.div`
  width: 50%;
  height: 1.21rem;
  border-radius: 0.3rem;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0)
  );
  background-size: 200px 100%;
  animation: ${skeletonAnimation} 1.5s infinite linear;
`;