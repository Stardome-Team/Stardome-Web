import React from "react";
import FooterCol from "./FooterCol/FooterCol";
import styles from "./Footer.module.scss";
import Logo from "../../assets/img/stardome_logo.png";

const cols = [
  {
    title: "Stardome TV",
    links: [
      {
        url: "/",
        text: "How to watch",
      },
      {
        url: "/",
        text: "Shows",
      },
      {
        url: "/",
        text: "Channels",
      },
      {
        url: "/",
        text: "Presenters",
      },
      {
        url: "/",
        text: "Sponsors",
      },
    ],
  },
  {
    title: "Stardome Info",
    links: [
      {
        url: "/",
        text: "About",
      },
      {
        url: "/",
        text: "Privacy Policy",
      },
      {
        url: "/",
        text: "FAQs",
      },
      {
        url: "/",
        text: "Rules",
      },
      {
        url: "/",
        text: "Support",
      },
    ],
  },
  {
    title: "Stardome Biz",
    links: [
      {
        url: "/",
        text: "Advertisement",
      },
      {
        url: "/",
        text: "Sponsorship",
      },
      {
        url: "/",
        text: "Press & Resource",
      },
      {
        url: "/",
        text: "Contact Us",
      },
    ],
  },
];

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterFlex}>
        {cols.map((item) => (
          <FooterCol title={item.title} key={item.title} links={item.links} />
        ))}
      </div>

      <div className={styles.FooterCentered}>
        <div className={styles.Logo}>
          <img src={Logo} alt="Stardome Logo" />
        </div>

        <h3>Copyright | &copy; 2019, StarDome Entertainment Ltd.</h3>
      </div>
    </footer>
  );
}
