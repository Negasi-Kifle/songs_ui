import { CircularLetter, FooterWrapper } from "../style_by_emotion/footer.style";
import { Section, Wrapper } from "../style_by_emotion/global.style";
import { Letter } from "../style_by_emotion/header.style";

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
