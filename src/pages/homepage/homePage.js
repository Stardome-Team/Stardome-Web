import React from 'react';
import './homePage.scss';
import NavBar from '../../components/navbar/navbar';
import TwitterFeed from '../../components/twitterFeed/twitterFeed';
import HomePageCarousel from '../../components/homePageCarousel/homepagecarousel';
import Footer from '../../components/footer/footer'
import NewsFeed from '../../components/newsFeed/newsFeed';

const HomePage = () => (
  <div className="homepage">
    <NavBar/>
    <HomePageCarousel/>
    {/* <TwitterFeed/> */}
    <NewsFeed/>
    <Footer/>
  </div>
  );

export default HomePage;
