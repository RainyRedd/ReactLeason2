import  Header  from './components/Header/Header.jsx'
import  Content  from './components/Content/Content.jsx'
import  Footer  from './components/Footer/Footer.jsx'
import racoonThumbs from "./assets/RacoonThumbs.png";



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
            height: "100vh",


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
