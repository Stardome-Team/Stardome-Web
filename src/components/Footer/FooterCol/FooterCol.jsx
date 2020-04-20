import React from 'react';
import styles from "./FooterCol.module.scss";

export default function FooterCol({title,links}) {
    return (
        <div>
            <h2>{title}</h2>
            <ul className={styles.ListBlock}>
              {  links.map( (link,i) => <li key={i}> <a href={link.url}>{link.text}</a> </li>  )}
            </ul>
        </div>
    )
}
