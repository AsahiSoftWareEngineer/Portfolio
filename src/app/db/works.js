import bussiness from "./media/bussiness.png"
import riv from "./media/riv.png"
import sample from "./media/sampleapp.png"

export const works_db = [
    {
        title: 'Sample App',
        img: sample,
        description: <><p>
            自分の技スキル発展のためにAWSでのインフラ構築・</p>
            <p>ChatGPTのAPIの組み込み・ドラッグ&ドロップを用いてタスク管理機能を実装を行いました。</p>
            <a href="https://top.sidelops.com" target="_blank">Show more</a>
            </>
        ,
        uses: [
            {name: "React - Frontend"},
            {name: "Django - Backend"},
            {name: "PostgreSQL/AWS RDS - DB"},
            {name: "AWS EC2 - Infrastructure"},
            {name: "Next.js - LP"},
            {name: "Nginx"},
            {name: "ChatGPT API"}
        ]
    },

    {
        title: 'API-Gateway - Development/Delivery',
        description: '',
        uses: [
            {name: "Django"},
        ]
    },
    {
        title: "Office system - Development/Delivery",
        description: '',
        uses: [
            {name: "Python - Django"},
            {name: "JavaScript - React"},
            {name: "Other more..."}
        ]
    },{
        title: 'Riv.inc HP - Development',
        description:  <a target="_blank" href="https://riv-inc.jp">Show more</a>,
        img:riv,
        uses: [
            {name: "JavaScript"},
            {name: "Next.js"},
            {name: "Swiper.js"},
            {name: "Conoha VPS"},
            {name: "Nginx"}
        ]
    },
    {
        title: "This portfolio",
        description: '',
        uses: [
            {name: "Javascript - Next.js"}
        ]
    },
    {
        title: "My business HP",
        img: bussiness,
        description: <a target="_blank" href="https://mapworks.tech">Show more</a>,
        uses: [
            {name: "Python-Django"},
            {name: "JavaScript"},
            {name: "Swiper.js"},
            {name: "ConohaVPS"},
            {name: "Nginx"}
        ]
    }
]