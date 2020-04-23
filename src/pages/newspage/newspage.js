import React from 'react';
import './newspage.scss';
import NavBar from '../../components/navbar/navbar'
import TwitterFeed from '../../components/twitterFeed/twitterFeed'
import Footer from '../../components/footer/footer'
import NewsFeed from '../../components/newsFeed/newsFeed'

const newsPage = () => (
  <div className="newspage">
    <NavBar/>

    <TwitterFeed/>
    <NewsFeed/>
    <Footer/>
  </div>
  );

export default newsPage;