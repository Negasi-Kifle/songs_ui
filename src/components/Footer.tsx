import { CircularLetter, FooterWrapper } from "../styles_by_emotion/footer.style";
import { Section, Wrapper } from "../styles_by_emotion/global.style";
import { Letter } from "../styles_by_emotion/header.style";

// Footer component
const Footer = () => {
  return (
    <Wrapper>
      <Section>
        <FooterWrapper>
          <Letter>
            <CircularLetter>F</CircularLetter>
            <CircularLetter>X</CircularLetter>
            <CircularLetter>L</CircularLetter>
          </Letter>
          <div>&copy; {new Date().getFullYear()}</div>
        </FooterWrapper>
      </Section>
    </Wrapper>
  );
};

export default Footer;
