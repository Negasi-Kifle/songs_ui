import { NavLink } from "react-router-dom";
import { Section, Wrapper } from "../styles_by_emotion/global.style";
import { HeaderWrapper, Logo } from "../styles_by_emotion/header.style";

const LinkStyle = {
  textDecoration: "none",
  color: "#176897",
  fontWeight: "bold",
  marginLeft: "1rem",
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  font: "18px",
  backgroundColor: "inherit",
};

const Header = () => {
  return (
    <Wrapper>
      <Section>
        <HeaderWrapper>
          <Logo>Logo</Logo>
          <div>
            <NavLink to="/" style={LinkStyle}>
              Home
            </NavLink>
            <NavLink to="/addsong" style={LinkStyle}>
              Add Song
            </NavLink>
            <NavLink to="/analytics" style={LinkStyle}>
              Analytics
            </NavLink>
          </div>
        </HeaderWrapper>
      </Section>
    </Wrapper>
  );
};

export default Header;
