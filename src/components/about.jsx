"use client"
import React from "react";
import styles from "../styles/components/about.module.css";
import Image from "next/image";
import profile from "../img/profile.JPG";

export class AboutComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_mount: false
        }
    }

    componentDidMount = () => {
        this.setState({ is_mount: true})
    }

    componentWillUnmount = () => {
        this.setState({ is_mount: false })
    }

    render = () => {
        return  (<>
        <section className={`${styles.about} ${this.state.is_mount? styles.mounted:styles.unmounted}`}>
        <h3>About</h3>
        <span className={styles.icon}>
          <Image src={profile.src} height={profile.height} width={profile.width}/>
        </span>
        
        <article>
          <p>Asahi Fujisawa is a full-stack developer and CTO of Riv.inc live in Japan. </p>  
        </article>
        <h4>BIO</h4>
        <ul>
          <li>2002 - Born in Oita, Japan</li>
          <li>2021 - Enter Oita university</li>
          <li>2022 - Become a freelance engineer</li>
          <li>2023 - Drop out of Oita university</li>
          <li>2023 - Become a CTO of Riv.inc</li>
        </ul>
      </section>
        </>)
    }
}