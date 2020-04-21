import React from 'react';
import './newsFeed.scss'
import ImgComp from './ImgComp';
import feed from '../../assets/img/feed.png';
import feed1 from '../../assets/img/feed1.png';
import feed2 from '../../assets/img/feed2.png';
import feed3 from '../../assets/img/feed3.png';
import TwitterFeed from '../../components/twitterFeed/twitterFeed'

function NewsFeed () {
  let picArr = [<ImgComp src={feed}/>,<ImgComp src={feed1}/>,<ImgComp src={feed2}/>,<ImgComp src={feed3}/>];
  return (
    <div className="midsection">
      <TwitterFeed/>
      <div className="newsfeed"> 
        {picArr.map((item, index) => {
                  return(
                      <div key={index}>
                          {item}
                      </div>
                  )
              })}
      </div>
    </div>
  );
}

export default NewsFeed;
