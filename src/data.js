import react from './assets/React.png';
import redux from './assets/Redux.svg';
import node from './assets/NodeJs.svg';
import express from './assets/Express.png';
import mongo from './assets/MongoDB.svg';
import javascript from './assets/Javascript.svg';
import tailwind from './assets/Tailwind.png';
import html from './assets/HTML.png';
import css from './assets/CSS.png';
import git from './assets/Git.svg';
import github from './assets/Github.svg';
import studynotion from './assets/StudyNotion.png';
import shoppingcart from './assets/shopping cart.png'
import razorpay from './assets/RazorPay.png'
import weatherApp from './assets/weatherApp.png'
import randomGif from './assets/randomgif.png'
import authapp from './assets/authApp.png'


export const education =[{
    id:'UG1',
    course:'Bachelor Of Technology, EEE',
    session:'2019-2023',
    institute:'Lok Nayak Jai Prakash Institute Of Technology',
    grade:'8.3 CGPA'
},
{
    id:'ISC',
    course:'Internediate in Science, XIIth',
    session:'2017-2019',
    institute:'Central Board Of Secondary Education',
    grade:'71%'
},
{
    id:'MTC',
    course:'Seconary Education, Xth',
    session:'2016-2017',
    institute:'Central Board Of Sencondary Education',
    grade:'10 CGPA'
}];

export const projects =[{
    id:'PR1',
    name:'Study Notion- Ed-tech',
    description:'This is a full-stack website built using React, Node and Express. It uses JWT for Authentication and Authorization. Users can Sign-in and Sign-up to access dashboard.',
    githubLink:'https://github.com/mihirgit9/study-notion',
    skills:[react, redux, node, express, tailwind, mongo, git, github],
    backgroundImg:studynotion,
    imageAlt:'studynotion'
},
{
    id:'PR2',
    name:'Shopping Cart App',
    description:'This is a front-end web app built using React and Redux. It fetches third-party API to render products on the Home page. It navigates between Home page and Cart page. Cart page contains added products and total checkout money.',
    githubLink:'https://github.com/mihirgit9/ShopingCartApp',
    skills:[react, redux, javascript, tailwind, css, html, git, github],
    backgroundImg:shoppingcart,
    imageAlt:'shoppingcart'
},
{
    id:'PR3',
    name:'RazorPay Clone',
    description:'It is a pure clone of RazorPay Front-end. I have used HTML, CSS and JavaScript to build this website. This beautiful website contains all the minute designs and details as available on RazorPay.',
    githubLink:'https://github.com/mihirgit9/RazorPay-Clone',
    skills:[html, javascript, tailwind, css, git, github],
    backgroundImg:razorpay,
    imageAlt:'razorpay'
},
{
    id:'PR4',
    name:'Weather Report App',
    description:'It is based on a third-party API, which is used to render weather data of a location. It automatically detects browser location and provide weather data. User can also search for any location.',
    githubLink:'https://github.com/mihirgit9/WEB-Dev/tree/main/Projects/Weather%20App',
    skills:[html, javascript, tailwind, css, git, github],
    backgroundImg:weatherApp,
    imageAlt:'weatherapp'
},
{
    id:'PR5',
    name:'Random GIF',
    description:'I have used React and custom hook to build this project. It randomly generates a GIF with or without tag. It is a cool and funny app. It uses an API to render GIF.',
    githubLink:'https://github.com/mihirgit9/random-gif',
    skills:[react, redux, javascript, tailwind, css, git, github],
    backgroundImg:randomGif,
    imageAlt:'randomgif'
},
{
    id:'PR6',
    name:'Auth App',
    description:'This is a server side application built using Node and Express. It is used for Authentication and Authorization of the user while login or signup after interaction with database using MongoDB. It also helps in managing cookie and JWT.',
    githubLink:'https://github.com/mihirgit9/AuthApp',
    skills:[node, express, javascript, mongo, git, github],
    backgroundImg:authapp,
    imageAlt:'authapp'
}];