import React from 'react';
import './App.css';
import ImgComp from './ImgComp';
import feed1 from '../../assets/img/feed1';
import feed2 from '../../assets/img/feed2';
import feed3 from '../../assets/img/feed3';
import feed4 from '../../assets/img/feed4';

function NewsFeed () {
  let picArr = [<ImgComp src={feed1}/>,<ImgComp src={feed2}/>,<ImgComp src={feed3}/>,<ImgComp src={feed4}/>];
  return (
    <div></div>
  );
}

export default NewsFeed;
