"use client"

import { works_db } from "@/app/db/works"
import React from "react"
import styles from "../styles/components/works.module.css"
import Image from "next/image"

export class WorksComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            is_mount: false,
        }
    }

    componentDidMount = () => {
        this.setState({ is_mount: true })
    }

    render = () => {
        return (<>
        <section  className={`${styles.works} ${this.state.is_mount? styles.mount: styles.unmount}`}>
            <h3>Works</h3>
            <ul>
                {works_db.map((work, i) => {
                    return (<>
                    <li key={i}>
                        <dl>
                            <dt><h4>{work.title}</h4></dt> 
                            <span className={` ${styles.frame}`}>
                                {work.img?<>
                                <Image src={work.img.src} width={work.img.width} height={work.img.height}/>
                                </>:<>
                                <p>No image</p>
                                </>}
                            </span>
                            {work.description}
                            <dd>
                                <h5>Uses</h5>
                                <ul>
                                    {work.uses.map((tool, j) => {
                                        return <li key={j}>{tool.name}</li>
                                    })}
                                </ul>
                            </dd>
                        </dl>
                    </li>
                    </>)
                })}
            </ul>
        </section>
        </>)
    }
}