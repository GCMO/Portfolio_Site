import { ThemeProvider } from 'styled-components'
import GlobalStyles from './components/styles/GlobalStyles'
import content from './content'
import projects from './projects'
import Header from './components/Header'
import Footer from './components/Footer'
import Card from './components/Card'
import CarouselCard from './components/CarouselCards'
import { Carousel } from "react-configurable-carousel"
import { Container } from './components/styles/Container.styled'
// import Carousel from './components/Carousel'

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#fff',
  },
  mobile: '860px',
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      
        <GlobalStyles />
        <Header />

          <Container className='container'>
            {content.map((item, index) => (
              <Card key={index} item={item} />
            ))}
            <h2> MY PROJECTS </h2>
              <Carousel
                // arrows={true}
                dotsNavigation={true}
                dotsNavigationInside={false}
                max-width={"100%"}
                height={"auto"}
                carouselStyle={"3d"}
                dotNavigationFillColor={"#ff0099"}
                autoScrollInterval={3000}
                autoScrollClickDelay={10000}
                outOfFocusDarken={true}
                >
                  {projects.map((item, index) => (
                    <CarouselCard key={index} item={item} />
                ))}
              </Carousel>

          </Container>
          
        <Footer />
      
    </ThemeProvider>
  )
}

export default App
