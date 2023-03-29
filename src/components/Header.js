import { StyledHeader, Nav, Image, } from './styles/Header.styled';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { Button } from './styles/Button.styled';
import { GiHoneycomb } from "react-icons/gi";


export default function Header() {
  return (
    <StyledHeader>
      <Container>

        <Nav>
          <h1> <GiHoneycomb style={{marginBottom:"-6px"}}/> GABE'S CODE TREKS </h1>
          <a href="../public/images/GOCV.pdf" download>
            <Button  bg='#ff4099' color='#fff'> Download CV </Button>
          </a>
          {/* <BrowserRouter>
              <Routes>
                <Route path="/" element={<NavLink>Home</NavLink>} />
                <Route path="/about" element={<NavLink>About</NavLink>} /> 
                <Route path="/projects" element={<NavLink>Projects</NavLink>} />
                <Route path="/contact" element={<NavLink>Contact</NavLink>} />
              </Routes>
          </BrowserRouter> */}
        </Nav>

        <Flex>
          <div className='header-text'>
            <h2>IN A FEW WORDS: </h2>

            <p>
              <b>About:</b> Web Dev. and Graphic Designer with a deep love for UX/UI, Data Visualization and Photography. Currently @ SALT as a Full-Stack Developer. 
              <br/>
              <b>Next Steps:</b> Focus on more Python-based Data Science, ML & DL projects and bring innovative Data-Visualization solutions to Web Development. <br/>
              <b>Interests:</b> Meditation, Acupuncture, Neuroscience, Biomorphism,  <br/>
              <b>Hobbies:</b> Percussions, Trekking, Skiing, Yoga, Cycling. <br/>
              <b>My Repos: </b> 
              <a href="https://www.github.com/GCMO" > www.github.com/GCMO</a>
            </p>

            {/* <Button bg='#ff0099' color='#fff'>
              Download CV
            </Button> */}
          </div>

          <Image src='/images/IMG_4241.png' alt='profile pic' />
        </Flex>
      </Container>
    </StyledHeader>
  )
}
