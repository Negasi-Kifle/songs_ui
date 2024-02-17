import styled from "@emotion/styled";

export const HomeWrapper = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 1rem;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

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

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
`;

export const SelectGenre = styled.select`
  padding: 0.5rem;
  border-radius: 4px;
  margin-right: 1rem;
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 4px;
  margin-right: 1rem;
`;

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
export const SongCard = styled.div`
  background-image: linear-gradient(to bottom, #176897, #cef1ff);
  padding: 2rem;
  border-radius: 1rem;
`;

export const SongImage = styled.img`
  width: 100%;
  border-radius: 0.5rem;

  height: auto;
  margin-bottom: 0.1rem;
`;

export const SongName = styled.h3`
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

export const AlbumName = styled.p`
  font-size: 1%.2rem;
  color: #666;
  margin-bottom: 1rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
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
