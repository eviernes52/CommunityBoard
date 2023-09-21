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
          <div className = "Card"><Card image ='https://i2-prod.football.london/incoming/article25379096.ece/ALTERNATES/s1200/0_CFC-Article-Template-11.png' name ='Chelsea Vs Brigton' type='September 27th 2023' viewmenu='https://www.chelseafc.com/en/match/chelsea-vs-brighton-and-hove-albion-english-league-cup-2023-09-27' /> </div>
          <div className = "Card"><Card image ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWiwpL06sdkRG1Yg98w2zhDoCGGN67aNYnneQNjZFiUKY_sF17waEEMyAhzGqrnXaLZho&usqp=CAU' name ='Chelsea Vs Fullham' type='October 2nd 2023' viewmenu='https://www.chelseafc.com/en/match/fulham-vs-chelsea-english-premier-league-2023-10-02' /> </div>
          <div className = "Card"><Card image ='https://i2-prod.football.london/chelsea-fc/article17147521.ece/ALTERNATES/s1200/0_Burnley-v-Chelsea.png' name ='Chelsea Vs Burnley' type='October 7th 2023' viewmenu='https://www.chelseafc.com/en/match/burnley-vs-chelsea-english-premier-league-2023-10-07' /> </div>
          <div className = "Card"><Card image ='https://static.standard.co.uk/2021/08/09/11/PLChelseaArsenal2122.jpg?width=1200&auto=webp&quality=75' name ='Chelsea Vs Arsenal' type='October 21st 2023' viewmenu='https://www.chelseafc.com/en/match/chelsea-vs-arsenal-english-premier-league-2023-10-21' /> </div>
          <div className = "Card"><Card image ='https://static.standard.co.uk/2021/08/09/14/PLBrentfordCheslea2122.jpg?width=1200' name ='Chelsea Vs Brentford' type='October 28th 2023' viewmenu='https://www.chelseafc.com/en/match/chelsea-vs-brentford-english-premier-league-2023-04-26' /> </div>
          <div className = "Card"><Card image ='https://static.standard.co.uk/2021/08/09/11/PLChelseaTottenham2122.jpg?width=1200&auto=webp&quality=75' name ='Chelsea Vs Tottenham' type='November 6th 2023' viewmenu='https://www.chelseafc.com/en/match/chelsea-vs-tottenham-hotspur-english-premier-league-2024-02-24' /> </div>
          <div className = "Card"><Card image ='https://static.standard.co.uk/2021/08/09/09/PLManCityChelsea2122.jpg?width=1200&auto=webp&quality=75' name ='Chelsea Vs Man City' type='November 12th 2023' viewmenu='https://www.chelseafc.com/en/match/chelsea-vs-manchester-city-english-premier-league-2023-01-05' /> </div>
          <div className = "Card"><Card image ='https://static.standard.co.uk/2021/08/09/11/PLChelseaNewcastle2122.jpg?width=1200&auto=webp&quality=75' name ='Chelsea Vs Newcastle' type='November 25th 2023' viewmenu='https://www.chelseafc.com/en/match/newcastle-united-vs-chelsea-english-premier-league-2023-11-25' /> </div>


      </div>
    </div>
  )
}

export default App