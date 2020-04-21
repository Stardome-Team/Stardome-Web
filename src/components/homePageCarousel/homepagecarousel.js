import React, {useState} from 'react';
import './homepagecarousel.scss';
import ImgComp from './ImgComp'
import Fifa from "../../assets/img/fifa.png";
import Pubg from "../../assets/img/pubg.png";
import Car from "../../assets/img/car.png";


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

export default HomePageCarousel;