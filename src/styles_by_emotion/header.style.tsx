import styled from "@emotion/styled";
import { css } from "@emotion/react";

// Style of the header wrapper
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #cef1ff;
  padding: 1rem;
  border-radius: 0.5rem;
`;

// style of the logo
export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

// Style of button
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

// Style of LinkStyle
export const LinkStyle = css`
  text-decoration: none;
  color: #176897;
  font-weight: bold;
  margin-left: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  background-color: #f2f2f2;

  &:hover {
    background-color: #176897;
    color: #fff;
  }
`;

// Style of social media icons/letters in the footer
export const Letter = styled.div`
  display: flex;
  gap: 0.2rem;
`;

// Style of ActiveLinkStyle
export const ActiveLinkStyle = css`
  background-color: #176897;
  color: #fff;
`;
