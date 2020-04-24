import React from 'react';
import './homePage.scss';
// import Forms from "../SignUpLogin/forms";
import NavBar from '../../components/navbar/navbar';
import TwitterFeed from '../../components/twitterFeed/twitterFeed';
import HomePageCarousel from '../../components/homePageCarousel/homepagecarousel';

const HomePage = () => (
  <div className="homepage">
    <NavBar/>
    <HomePageCarousel/>
    
    {/* <Forms /> */}
    <TwitterFeed/>
  </div>
  );

export default HomePage;
