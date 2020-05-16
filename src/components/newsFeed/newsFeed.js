import React from 'react';
import './newsFeed.scss'
import ImgComp from './ImgComp';
import feed from '../../assets/img/feed.png';
import feed1 from '../../assets/img/feed1.png';
import feed2 from '../../assets/img/feed2.png';
import feed3 from '../../assets/img/feed3.png';
import TwitterFeed from '../../components/twitterFeed/twitterFeed'
import NewsPopUp from '../newsPopUp/newsPopUp'

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = 
    {
        showNews: false
    }
    this.toggleshowNews = this.toggleshowNews.bind(this);
}

toggleshowNews = () =>
{
    this.setState({
        showNews: !this.state.showNews
    });
}

render() {
    const {showNews} = this.state;
    let picArr = [<ImgComp src={feed}/>,<ImgComp src={feed1}/>,<ImgComp src={feed2}/>,<ImgComp src={feed3}/>, <ImgComp src={feed2}/>, <ImgComp src={feed1}/>];
    let infoArr = ['']
    return (
      <div className="midsection">
        <TwitterFeed/>
        {showNews && <NewsPopUp setChanged={this.toggleshowNews}/>}
        <div className="newsfeed"> 
          {picArr.map((item, index) => {
                    return(
                        <div key={index} className="feed-content" onClick={() => this.toggleshowNews()}>
                          {item}
                          <div className="feed-header">
                            <div></div>
                            Call of Duty: Lagos Regionals 2020
                            <div className="feed-preamble">
                              The knock out selections have been made for the regionals, fixture dates will son be released.
                            </div>
                          </div>
                        </div>
                    )
                })}              
        </div>
      </div>
    );
  }
}

export default NewsFeed;
