import  Header  from './components/Header/Header.jsx'
import  Content  from './components/Content/Content.jsx'
import  Footer  from './components/Footer/Footer.jsx'
import racoonThumbs from "./assets/RacoonThumbs.png";
import SnowLeo from "./assets/SnowLeo.jpg";
import LizzardLeo from "./assets/LizzardLeo.jpg";
import RedPanda from "./assets/RedPanda.jpg";
import AyeAye from "./assets/Aye-Aye.jpg";
import ShoeBill from "./assets/ShoeBill.jpg";
import Tiger from "./assets/Tiger.jpeg";
import Quokka from "./assets/Quokka.jpg";
import SandKat from "./assets/SandKat.jpg";
import ImageCard from "./components/Image/imageCard.jsx";
import Image from "./components/Image/Image.jsx";
import Card from "./components/Card/Card.jsx";
import GridContainer from "./components/GridContainer/GridContainer.jsx";



function App() {

    return (
        <>
            <Header headerText='TitleNotMadeYetok'/>

            <Content
                paragraphTitleOne='First Title'
                paragraphOne='This is the first paragraph.'
                paragraphTitleTwo='Second Title'
                paragraphTwo='This is the second paragraph.'
                paragraphTitleThree='Third Title'
                paragraphThree='This is the third paragraph.'
            />
            
            <div className="image-grid">
                <ImageCard title="Snow Leopard" description="Meow">
                    <Image src={SnowLeo} alt="Snow Leopard" />
                </ImageCard>

                <ImageCard title="Racoon" description="Thumbs Up">
                    <Image src={racoonThumbs} alt="Racoon Thumbs" />
                </ImageCard>
            </div>
          
                <GridContainer className="card-grid">
                    <Card title="Snow Leopard" description="PsPsPs" pris="100000" image={SnowLeo} knap="Press me"/>
                    <Card title="Racoon" description="Thunbs up" pris="20000" image={racoonThumbs} knap="Press me"/>
                    <Card title="Lizzard" description="Wide Stance" pris="1500" image={LizzardLeo} knap="Press me"/>
                    <Card title="Red Panda" description=":D" pris="80000" image={RedPanda} knap="Press me"/>
                    <Card title="Aye-Aye" description="O_O" pris="50000" image={AyeAye} knap="Press me"/>
                    <Card title="Shoe Bill" description="Serious Bird" pris="30000" image={ShoeBill} knap="Press me"/>
                    <Card title="Tiger" description="PsPsPS" pris="120000" image={Tiger} knap="Press me"/>
                    <Card title="Quokka" description="Happy Littel guy" pris="40000" image={Quokka} knap="Press me"/>
                    <Card title="Sand Cat" description="PsPsPs" pris="25000" image={SandKat} knap="Press me"/>
                </GridContainer>
                
          s

            
            <Footer
                mail='Mail: Mathiaskjaerab@gmail.com'
                phoneNumber='Tlf: 81211021'
                address='Address: Somewhere in Denmark'
            />
        </>
    )
}

export default App
