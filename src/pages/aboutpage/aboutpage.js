import React from 'react';
import './aboutpage.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
import HomePageCarousel from '../../components/homePageCarousel/homepagecarousel';
import NavBar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'



const aboutPage = () => (
    
  <div className="aboutpage">
    <NavBar/>
    <div className = "aboutMessage">
        <h2><strong>About Stardome</strong></h2>
        <p>Consequat sit Lorem exercitation anim Lorem proident tempor cupidatat elit consectetur sint proident enim adipisicing. Excepteur id ipsum anim pariatur non ad. Exercitation sunt do aliqua ipsum magna consequat occaecat sunt cillum officia nostrud. Id voluptate ut minim quis. Et ea et quis nostrud anim velit occaecat laborum laborum eu nisi ad.

        Ipsum eiusmod culpa sunt aliquip. In nulla ut aute labore aute. Magna do aliquip ullamco aute magna nisi veniam ut excepteur et incididunt aute incididunt laboris. Fugiat elit adipisicing cillum irure voluptate duis dolore est esse pariatur occaecat fugiat ad. Dolore sint fugiat nulla esse dolor ullamco in minim occaecat anim aliqua id.

Elit voluptate aute et fugiat nisi culpa ex pariatur ea do duis commodo. Id eiusmod in consequat minim do esse non ut nostrud non laborum labore. Ex occaecat commodo in veniam. Esse sint cupidatat adipisicing laboris voluptate in id. Laborum quis magna aliquip dolor proident velit deserunt commodo.

Ut ut officia commodo adipisicing aliqua do duis fugiat velit. Irure non non ea voluptate quis. Duis enim pariatur proident duis fugiat velit sit fugiat non. Proident exercitation nostrud officia quis. Quis culpa voluptate non dolore quis mollit cupidatat elit aliquip.Ea id adipisicing sunt incididunt pariatur. Ipsum et eiusmod nisi consequat duis amet. Labore laboris amet minim ullamco irure quis velit. Consequat nostrud qui mollit aute tempor fugiat esse commodo Lorem eiusmod ad.Ullamco sit esse amet ut tempor Lorem. Deserunt labore quis ut tempor nulla occaecat do ut aliqua qui dolor est ea minim. Fugiat dolor reprehenderit sit commodo qui laborum amet magna sit elit excepteur deserunt. Elit eu aute esse dolore et cillum eu proident. Deserunt mollit excepteur minim ex officia. Sit do labore do magna ex. Ut do qui ullamco laborum incididunt aliqua laborum non occaecat dolor est cupidatat proident.</p>
    </div>

    <div className="aboutGrid">
        <div className = "gridElement">
            <h5><strong>Tournaments Organized</strong></h5>
            <p><strong>28 Tournaments</strong></p>

        </div>

        <div className = "gridElement">
            <h5><strong>Participants</strong></h5>
            <p><strong>Over 500 Participants</strong></p>
        </div>

        <div className = "gridElement">
            <h5><strong>Cash Prizes</strong></h5>
            <p><strong>$250k</strong></p>
            
        </div>
    
    </div>

    <div className = "dropUp">
        <h4 className = "text"><strong>How To Watch</strong></h4>
        <FontAwesomeIcon className = "fontStyle" icon = {faAngleUp} />
    </div>

    

    {/* <Footer/> */}
  </div>
  );

export default aboutPage;