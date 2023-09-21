import './App.css';
import Card from './components/Card'

const App = () => {
  return (
    <div className="App">


      <div className='header'>
        <header><img src="https://logos-world.net/wp-content/uploads/2020/05/Chelsea-Logo-1999-2003.png" alt="header image" />  
        <h1>Chelsea FC Upcoming Games</h1></header>
      </div>

      <div className ='container'>
          <div className = "Card"><Card image ='https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F99055e4e-37a1-4be7-a3ae-ff81e496a451_1200x630.jpeg' name ='Chelsea Vs Bournemouth' type='September 17th 2023' viewmenu='https://www.chelseafc.com/en/match/bournemouth-vs-chelsea-english-premier-league-2023-09-17' /> </div>
          <div className = "Card"><Card image ='https://static.standard.co.uk/2021/08/09/11/PLChelseaAstonVilla2122.jpg?width=1200&auto=webp&quality=75' name ='Chelsea Vs Aston Villa' type='September 24th 2023' viewmenu='https://www.chelseafc.com/en/match/chelsea-vs-aston-villa-english-premier-league-2023-09-24'/> </div>
          <div className = "Card"><Card image ='https://i2-prod.football.london/incoming/article25379096.ece/ALTERNATES/s1200/0_CFC-Article-Template-11.png' name ='Chelsea Vs Brigton' type='September 28th 2023' viewmenu='https://www.chelseafc.com/en/match/chelsea-vs-brighton-and-hove-albion-english-league-cup-2023-09-27' /> </div>
          <div className = "Card"><Card image ='https://i2-prod.football.london/incoming/article25379096.ece/ALTERNATES/s1200/0_CFC-Article-Template-11.png' name ='Chelsea Vs Brigton' type='September 28th 2023' viewmenu='https://www.chelseafc.com/en/match/chelsea-vs-brighton-and-hove-albion-english-league-cup-2023-09-27' /> </div>
          <div className = "Card"><Card image ='https://i2-prod.football.london/incoming/article25379096.ece/ALTERNATES/s1200/0_CFC-Article-Template-11.png' name ='Chelsea Vs Brigton' type='September 28th 2023' viewmenu='https://www.chelseafc.com/en/match/chelsea-vs-brighton-and-hove-albion-english-league-cup-2023-09-27' /> </div>
          <div className = "Card"><Card image ='https://i2-prod.football.london/incoming/article25379096.ece/ALTERNATES/s1200/0_CFC-Article-Template-11.png' name ='Chelsea Vs Brigton' type='September 28th 2023' viewmenu='https://www.chelseafc.com/en/match/chelsea-vs-brighton-and-hove-albion-english-league-cup-2023-09-27' /> </div>
          <div className = "Card"><Card image ='https://i2-prod.football.london/incoming/article25379096.ece/ALTERNATES/s1200/0_CFC-Article-Template-11.png' name ='Chelsea Vs Brigton' type='September 28th 2023' viewmenu='https://www.chelseafc.com/en/match/chelsea-vs-brighton-and-hove-albion-english-league-cup-2023-09-27' /> </div>
          <div className = "Card"><Card image ='https://i2-prod.football.london/incoming/article25379096.ece/ALTERNATES/s1200/0_CFC-Article-Template-11.png' name ='Chelsea Vs Brigton' type='September 28th 2023' viewmenu='https://www.chelseafc.com/en/match/chelsea-vs-brighton-and-hove-albion-english-league-cup-2023-09-27' /> </div>
          <div className = "Card"><Card image ='https://i2-prod.football.london/incoming/article25379096.ece/ALTERNATES/s1200/0_CFC-Article-Template-11.png' name ='Chelsea Vs Brigton' type='September 28th 2023' viewmenu='https://www.chelseafc.com/en/match/chelsea-vs-brighton-and-hove-albion-english-league-cup-2023-09-27' /> </div>
          <div className = "Card"><Card image ='https://i2-prod.football.london/incoming/article25379096.ece/ALTERNATES/s1200/0_CFC-Article-Template-11.png' name ='Chelsea Vs Brigton' type='September 28th 2023' viewmenu='https://www.chelseafc.com/en/match/chelsea-vs-brighton-and-hove-albion-english-league-cup-2023-09-27' /> </div>


      </div>
    </div>
  )
}

export default App