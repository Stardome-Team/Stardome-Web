import React from 'react';
import './aboutpage.scss';
import DropUp from "./DropUp/DropUp";
import NavBar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';


const AboutPage = () =>
{

    const grid1 =
        [
            {
                title: "How To Watch",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            },
            {
                title: "Shows",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            },
            {
                title: "How To Watch",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            },
            {
                title: "Channels",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            },
            {
                title: "How To Watch",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            },
            {
                title: "Presenters",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            },
            {
                title: "Sponsors",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            },

        ];

    const grid2 =
        [
            {
                title: "About",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            },
            {
                title: "Privacy Policy",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            },
            {
                title: "FAQs",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            },
            {
                title: "Rules",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            },
            {
                title: "Support",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            }
        ];

    const grid3 =
        [
            {
                title: "Advertisement",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            },
            {
                title: "Sponsorship",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            },
            {
                title: "Press & Resource",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            },
            {
                title: "Contact Us",
                content: "Nasjovrnjnvrsjb r bjirngbn rbjnrobiujosb jdbundbn rb nbno;r gsfn ugbn ekal"
            }

        ];

    return (
        <div className="aboutpage">
            <div className="bg-image"></div>
            <NavBar />

            <div className="content-wrapper" >
                <div className="content-wrapper-overlay" ></div>

                <div className="aboutGrid">
                    <div className="gridElement">
                        <h5><strong>Tournaments Organized</strong></h5>
                        <i style={ { fontSize: "xxx-large" } } class="fas fa-gamepad"></i>
                        <p><strong>28 Tournaments</strong></p>

                    </div>

                    <div className="gridElement">
                        <h5><strong>Participants so far</strong></h5>
                        <i style={ { fontSize: "xxx-large" } } class="fas fa-users"></i>
                        <p><strong>Over 530 participants</strong></p>
                    </div>

                    <div className="gridElement">
                        <h5><strong>Cash Prizes</strong></h5>
                        <i style={ { fontSize: "xxx-large" } } class="fas fa-hand-holding-usd"></i>
                        <p><strong>$250k +</strong></p>

                    </div>

                </div>

                <div className="aboutMessage">
                    <h2><strong>About Stardome</strong></h2>
                    <p>Lorem ipsum, some kind many many bants alaye. No need to salaye yourself, just sabagidi.Lorem ipsum, some kind many many bants alaye. No need to salaye yourself, just sabagidi.Lorem ipsum, some kind many many bants alaye. No need to salaye yourself, just sabagidi.Lorem ipsum, some kind many many bants alaye. No need to salaye yourself, just sabagidi.Lorem ipsum, some kind many many bants alaye. No need to salaye yourself, just sabagidi.Lorem ipsum, some kind many many bants alaye. No need to salaye yourself, just sabagidi.Lorem ipsum, some kind many many bants alaye. No need to salaye yourself, just sabagidi.</p>
                </div>

                <div className="about-grid">

                    <div className="grid1">

                        {
                            grid1.map( el => <DropUp key={ el.title } title={ el.title } content={ el.content } /> )
                        }

                    </div>
                    <div className="grid2">
                        {
                            grid2.map( el => <DropUp key={ el.title } title={ el.title } content={ el.content } /> )
                        }
                    </div>


                    <div className="grid3">
                        {
                            grid3.map( el => <DropUp key={ el.title } title={ el.title } content={ el.content } /> )
                        }
                    </div>

                </div>



            </div>



            <Footer className="footer" />
        </div>

    );
};

export default AboutPage;