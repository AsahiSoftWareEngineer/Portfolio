
"use client"
import React from "react";
import styles from "../styles/components/skills.module.css";

export class SkillsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          is_mount: false,
        }
    }

    componentDidMount = () => {
      this.setState({ is_mount: true})
    }

  

    render = () => {
        return <>
        <section className={`${styles.skills} ${this.state.is_mount? styles.mount: styles.unmount}`}>
        <h3>My Skills</h3>
        <ul className={styles.category}>
          <li><dl>
            <dt>Programming languages</dt>
            <dd>
              <ul>
                <li>Python</li>
                <li>JavaScript</li>
              </ul>
            </dd>
          </dl></li>

          <li><dl>
            <dt>Framework</dt>
            <dd> 
              <ul>
                <li>React</li>
                <li>Next.js</li>
                <li>Django</li>
              </ul>
          </dd>
          </dl></li>
          
         <li><dl><dt>Database</dt>
         <dd><ul>
            <li>SQLite</li>
            <li>MySQL</li>
            <li>PostgreSQL</li>
          </ul></dd>
         </dl></li>
          
          <li><dl>
            <dt>Cloud</dt>
            <dd>
              <ul>
                <li>AWS - EC2</li>
                <li>AWS - RDS</li>
                <li>AWS - Lambda</li>
              </ul>
            </dd>
          </dl></li>
          <li><dl>
            <dt>Tools</dt>
            <dd>
              <ul>
                <li>Github</li>
                <li>Git</li>
                <li>Figma</li>
                <li>Markdown</li>
              </ul>
            </dd>
            </dl>
            </li>
  
          
        </ul>
      </section>

        </>
    }
}