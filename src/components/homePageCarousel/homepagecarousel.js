import React from 'react';
import Slider from "react-slick";
import './homepagecarousel.scss';
import ImgComp from './ImgComp'
import Fifa from "../../assets/img/fifa.png";
import Pubg from "../../assets/img/pubg.png";
import Car from "../../assets/img/car.png";

/*
function HomePageCarousel (){
    let sliderArr = [<ImgComp src={Fifa}/>,<ImgComp src={Pubg}/>,<ImgComp src={Car}/>];
    const [x, setX] = useState(0);
    const goLeft = () => {
        (x === 0) ? setX(-100*(sliderArr.length-1)) : setX(x + 100);
    };
    const goRight = () => {
        (x === -100*(sliderArr.length-1)) ? setX(0) : setX(x - 100);
    };
    return (
        <div className="slider">
            {sliderArr.map((item, index) => {
                return(
                    <div key={index} className="slide" style={{transform:`translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })}
            <button id="goLeft" onClick={goLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button id="goRight"onClick={goRight}>
            <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    )
  }

*/

function HomePageCarousel ()
{
    const settings = 
    {
        dots: false,
        lazyLoad: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        cssEase: "ease-in-out",
        nextArrow: null,
        prevArrow: null
  };

  let sliderArr = [<ImgComp src={Fifa}/>,<ImgComp src={Pubg}/>,<ImgComp src={Car}/>];

  return (
    <div className="slider">
        <Slider style={{width: "100%"}} {...settings}>

        {sliderArr.map((item, index) => {
                return(
                    <div key={index} >
                        {item}
                    </div>
                )
            })}

        </Slider>
        </div>
  );

}

export default HomePageCarousel;