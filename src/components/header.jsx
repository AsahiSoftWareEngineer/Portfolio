"use client"

import Link from "next/link";
import styles from "../styles/components/header.module.css";
import { ArrowDownSquare, List, X } from "react-bootstrap-icons";
import {useState, useEffect} from "react"


export default function Header() {
    const [is_menu_open, set_menu_state] = useState(false);
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);  
    },[]);
    console.log(width);
    return <>
    <header className={styles.header}>
        <Link href="/"><h1>Asahi Fujisawa</h1></Link>
        <nav className={is_menu_open? styles.open:styles.close}>
            <ul>
                <li>
                    <Link href="/about" onClick={() => {set_menu_state(false)}}>
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/skills" onClick={() => {set_menu_state(false)}}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link href="/works" onClick={() => {set_menu_state(false)}}>
                        Works
                    </Link>
                </li>
                <li>
                    <Link href="https://github.com/AsahiSoftWareEngineer" target="_blank" onClick={() => {set_menu_state(false)}}>
                    Github
                    </Link>
                </li>
                <li>
                    <a href={"/職務経歴書(藤澤 朝陽).pdf"} download onClick={() => {set_menu_state(false)}}>
                        <ArrowDownSquare/>
                        Skill sheet</a>
                </li>
                
            </ul>
        </nav>
        {width <= 480?<>
        <button onClick={() => {set_menu_state(!is_menu_open)}} class={styles.menu_button}>
            {is_menu_open?<><X/></>:<><List/></>}
        </button></>:<>
        </>}
    </header>
    </>
}