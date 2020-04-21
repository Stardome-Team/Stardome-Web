import React from 'react';
import './homePage.scss';
import NavBar from '../../components/navbar/navbar'
import TwitterFeed from '../../components/twitterFeed/twitterFeed'
import HomePageCarousel from '../../components/homePageCarousel/homepagecarousel'
import Footer from '../../components/footer/footer'

const HomePage = () => (
  <div className="homepage">
    <NavBar/>
    <HomePageCarousel/>
    <TwitterFeed/>
    <Footer/>
  </div>
  );

export default HomePage;
