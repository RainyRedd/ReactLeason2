import  Header  from './components/Header/Header.jsx'
import  Content  from './components/Content/Content.jsx'
import  Footer  from './components/Footer/Footer.jsx'
import racoonThumbs from "./assets/RacoonThumbs.png";
import SnowLeo from "./assets/SnowLeo.jpg";
import ImageCard from "./components/Image/imageCard.jsx";
import Image from "./components/Image/Image.jsx";



function App() {
 

  return (
    <>
      <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            fontFamily: "Arial, sans-serif",
            padding: "20px",
            backgroundColor: "black",
            color: "white",
            height: "200vh",


          }}>
        <Header headerText='TitleNotMadeYetok'/>
        <Content
        paragraphTitleOne='First Title'
        paragraphOne='This is the first paragraph.'
        paragraphTitleTwo='Second Title'
        paragraphTwo='This is the second paragraph.'
        paragraphTitleThree='Third Title'
        paragraphThree='This is the third paragraph.'
        img={racoonThumbs}
        />
          <ImageCard
            title="Snow Leopard"
            description="Meow"
          >
              <Image
              src={SnowLeo}
              alt="Snow Leopard"
              />
              
          </ImageCard>
        <Footer
        mail='Mathiaskjaerab@gmail.com'
        phoneNumber='81211021'
        address='Somewhere in Denmark'
        />
      </div>
    </>
  )
}

export default App
