import './App.css';
import Card from './components/Card'

const App = () => {
  return (
    <div className="App">


      <div className='header'>
        <header><img src="src\assets\awning.png" alt="header image" />  
        <h1>Food Truck Favorites</h1></header>
      </div>

      <div className ='container'>
          <div className = "Card"><Card image ='https://pyxis.nymag.com/v1/imgs/38c/2ac/b02a093f6b846ebd1aca78b0d59c7e427a-birria-1.rsocial.w1200.jpg' name ='Birria-Landia' type='Jamaican' viewmenu='https://thebirrialandia.com/menu/ '/> </div>
          <div className = "Card"><Card image ='https://infatuation.imgix.net/media/images/reviews/jerk-pan/banners/1561989308.8.jpg' name ='Jerk Pan' type='Mexican' viewmenu='https://www.allmenus.com/ny/new-york/360888-jerk-pan/menu/' /> </div>
          <div className = "Card"><Card image ='https://nypost.com/wp-content/uploads/sites/2/2014/08/081114featureshalaguysbz-1.jpg?quality=75&amp;strip=all&amp;w=1024' name ='The Halal Guys' type='Middle Eastern' viewmenu='https://thehalalguys.com/menu/' /> </div>
          <div className="Card"><Card image="https://nydosas.com/wp-content/uploads/2018/07/maxresdefault-2-1024x630.jpg"name="NY Dosas"type="Vegetarian"viewmenu="https://nydosas.com/menu/"/></div>
          <div className="Card"><Card image="https://static01.nyt.com/images/2019/09/04/dining/29hungry-tong2/merlin_159654336_783be212-7726-485e-9250-4793a743af41-jumbo.jpg" name="Tong" type="Bangladeshi" viewmenu="https://www.facebook.com/Bangladeshistreetfoods/"/></div>

<div className="Card">
<Card
image="https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg"
name="King Souvlaki of Astoria"
type="Greek"
viewmenu="https://kingsouvlakinyc.com/"
/>
</div>

<div className="Card">
<Card
image="https://res.cloudinary.com/the-infatuation/image/upload/c_fill,w_1200,ar_4:3,g_auto,f_auto/cms/reviews/mysttik-masala/banners/1561989798.42"
name="Mysttik Masala"
type="Indian"
viewmenu="https://indianfoodny.com/"
/>
</div>

<div className="Card">
<Card
image="https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg"
name="Ling's Sweet Mini Cakes"
type="Chinese"
viewmenu="https://canalstreet.market/"
/>
</div>

<div className="Card">
<Card
image="https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg"
name="Uncle Gussy's"
type="Greek"
viewmenu="https://unclegussys.com/menus/"
/>
</div>

<div className="Card">
<Card
image="https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg"
name="Patacon Pisao"
type="Venezuelan"
viewmenu="https://www.pataconpisaonyc.com/menus/"
/>
</div>

<div className="Card">
<Card
image="https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png"
name="Mom's Momo"
type="Tibetan"
viewmenu="https://www.restaurantji.com/ny/jackson-heights/moms-momo-/menu/"
/>
</div>

<div className="Card">
<Card
image="https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg"
name="Makina Cafe"
type="Ethiopian"
viewmenu="https://makinacafenyc.com/"
/>
</div>

      </div>
    </div>
  )
}

export default App