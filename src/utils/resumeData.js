import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import CodeIcon from '@material-ui/icons/Code';
import LanguageIcon from '@material-ui/icons/Language';

import htmlcss from '../assests/images/htmlcss.png';
import psd from '../assests/images/psd.jpg';
import pizza from '../assests/images/pizza.jpg';
import todo from '../assests/images/todo.jpg';
import faq from '../assests/images/faq.png';
import tic from '../assests/images/tic.png';
import pass from '../assests/images/pass.jpg';
import calc from '../assests/images/calc.jpg';
import toe from '../assests/images/toe.jpg';
import emailtemp from '../assests/images/email template.jpg';
export default {
    name: 'Ahmed Egeh',
    title: 'Full stack web developer',
    birthday: '3rd of August 1998',
    email: '18700126@emu.edu.tr',
    address: 'Famagusta Cyprus',
    phone: '05338223225',

    social: {
        /*
        Facebook:{
            link: 'https://www.facebook.com/ahmed.eggy',
            text: 'My Facebook',
            icon: <FacebookIcon />
        },
        Twitter:{
            link: 'https://twitter.com/MRXB1',
            text: 'My Twitter',
            icon: <TwitterIcon />
        },*/
        LinkedIn:{
            link: 'https://www.linkedin.com/in/mrahmedegeh',
            text: 'mrahmedegeh',
            icon: <LinkedInIcon />
        },
        Github:{
            link: 'https://github.com/MrAhmedEgeh',
            text: 'MrAhmedEgeh',
            icon: <GitHubIcon />
        },
        Instagram:{
            link: 'https://www.instagram.com/mrxb',
            text: 'My instagram',
            icon: <InstagramIcon />
        }
    },
    aboutme: `I am a passionate web developer who's not only in love with the web but with programming and IT in general. I currently in my last year and will graduate in February 2022.  I am a full stack web developer, I use React JS in the Front End and PHP AND MYSQL in the Back end. \n\n Learning new technologies and frameworks facientae me and keep me fired up, I am always trying to learn and get new skills, I might not be the smartest in the room but I am definitely the hardest worker`,
    experiences: [
        {
            title: 'Help disk',
            date: 'Juanuary 2017 - May 2017',
            description: 'Assistant in a Building materials company where I was responsible of paper work and making reports and also fixing, updating and maintaining programs and PCs for the company'
        }
    ],
    education: [
        {
            title: 'Eastern Mediterranean University',
            place: 'Cyprus - Famagusta',
            date: 'September 2018 - Until now',
            description: 'I am a student of bachelor of information tecnology in Eastern Mediterranean University, I am at my 4th year right now and I have completed the previous semesters as honor student, my current CGPA is 3.22'
        },
        {
            title: 'Eircan Language Center',
            place: 'Malaysia - Kuala Lumpur',
            date: 'Juanuary 2017 - May 2017',
            description: 'Assistant in a Building materials company when I was responsible of paper work and making reports and also fixing, updating and maintaining programs and PCs for the company'
        },
        {
            title: 'Al Khobar High School',
            place: 'Saudi Arabia - Al Khobar',
            date: 'September 2014 - June 2016',
            description: 'I have studied in Al khobar high school in khobar city in Saudi Arabia, by june 2016 I graduated from high school with a really good grade of 86.5%'
        }
    ],

    services: [
        {
            title: 'Front End',
            description: 'I am a professional Front End developer who have created many amazing project with HTML, CSS, JS and React',
            icon: <CodeIcon />
        },
        {
            title: 'Back End',
            description: 'I am a professional Back End developer who is experienced with PHP and currently learning laravel',
            icon: <CodeIcon />
        },
        {
            title: 'Wordpress',
            description: 'I can develop decent website with Wordpress and currently learning more',
            icon: <LanguageIcon />
        },
    ],
    skilles: [
        {
            title: 'FRONT END',
            description: ['HTML','CSS','JS','React js', 'Bootstrap', 'Material UI']
        },
        {
            title: 'BACK END',
            description: ['PHP']
        },
        {
            title: 'DATABASE',
            description: ['SQL', 'Firebase']
        },
        {
            title: 'Virsion Control',
            description: ['Git', 'Github']
        }
    ],
    projects: [
        {
            tag: 'HTML & CSS',
            tags: ['HTML', 'CSS', 'CSS Flexbox'],
            image: emailtemp,
            title: 'Email template',
            caption: 'As a task in my internship in Alqoud Enterprise',
            description: 'As a task in my internship in Alqoud Enterprise, I was asked to design an email template that can be used in a contact us form for an app we were developing. Click on the icon to see the project on github.',
            links:[
                {link: 'https://github.com/MrAhmedEgeh/email-template', icon: <GitHubIcon />}
            ]
            },
        {
        tag: 'HTML & CSS',
        tags: ['HTML', 'CSS', 'CSS Float', 'CSS Flexbox'],
        image: psd,
        title: 'PSD TO HTML & CSS',
        caption: 'I turned a PSD file into HTML & CSS',
        description: 'In this project I have downloaded a PSD I found online and tried to design it using HTML & CSS, and it took me some days but I was able to fully design it in a responsive way. Click on the icon to see the project on github.',
        links:[
            {link: 'https://github.com/MrAhmedEgeh/html-css-template1', icon: <GitHubIcon />}
        ]
        },
        {
            tag: 'HTML & CSS',
            tags: ['HTML', 'CSS', 'Vanilla JS', 'Bootstrap Grid'],
            image: pizza,
            title: 'Pizza Website',
            caption: 'A Pizza Website using HTML & CSS & Bootstrap',
            description: 'In this project, I designed a website completely from scratch, the design is my original design I have not copied it, I used HTML, CSS and Bootstrap. Click on the icon to see the project on github.',
            links:[
                {link: 'https://github.com/MrAhmedEgeh/pizzaWebsite', icon: <GitHubIcon />}
            ]
            },
        {
        tag: 'Vanilla JS',
        tags: ['HTML', 'CSS', 'Vanilla JS', 'JS OOP'],
        image: todo,
        title: 'Todo List App',
        caption: 'Using OOP JS I have created Todo list app',
        description: 'I created this project to train myself to Object oriented programming using javascript, I am fimiliar with Object oreinted programming in many languages but this was my first in Javascript. Click on the icon to see the project on github.',
        links:[
            {link: 'https://github.com/MrAhmedEgeh/todo-app-JS-OOP', icon: <GitHubIcon />}
        ]
        },
        {
            tag: 'Vanilla JS',
            tags: ['HTML', 'CSS', 'Vanilla JS'],
            image: faq,
            title: 'FAQ Page',
            caption: 'FAQ Page using vanilla JS',
            description: 'This is a quite simple project I made on the spot using Javascript, it is a simple FAQ page. Click on the icon to see the project on github.',
            links:[
                {link: 'https://github.com/MrAhmedEgeh/FAQ-JS', icon: <GitHubIcon />}
            ]
        },
        {
            tag: 'Vanilla JS',
            tags: ['HTML', 'CSS', 'Vanilla JS'],
            image: tic,
            title: 'Tic Tac Toe',
            caption: 'I made a User against computer tic tac toe',
            description: 'This project was hectic but fun also, I created it using vanilla JS, it is a tic tac toe and the player plays against the computer. Click on the icon to see the project on github.',
            links:[
                {link: 'https://github.com/MrAhmedEgeh/tic-tac-toe-vanilla-JS', icon: <GitHubIcon />}
            ]
        },
        {
            tag: 'React JS',
            tags: ['React Js'],
            image: pass,
            title: 'Password Generator',
            caption: 'Password generator using React js',
            description: 'I created this project as my first React js project and it was simple and fun to develop, it is a password generator which also has a copy password feature. Click on the icon to see the project on github.',
            links:[
                {link: 'https://github.com/MrAhmedEgeh/passwordGenerator', icon: <GitHubIcon />}
            ]
        },
        {
            tag: 'React JS',
            tags: ['React Js'],
            image: calc,
            title: 'Calculator',
            caption: 'A calculator using React JS',
            description: 'This is one of my favourit project because it made me dive deeper into React js and understand much about things like states and hooks. Click on the icon to see the project on github.',
            links:[
                {link: 'https://github.com/MrAhmedEgeh/calculator-react', icon: <GitHubIcon />}
            ]
        },
        {
            tag: 'React JS',
            tags: ['React Js'],
            image: toe,
            title: 'Tic Tac Toe',
            caption: 'A Tic Tac Toe using React JS',
            description: 'Another tic tac toe game but this time created using React js, learned so much about react and made me think as a React js developer. Click on the icon to see the project on github.',
            links:[
                {link: 'https://github.com/MrAhmedEgeh/tic-tac-toe-React', icon: <GitHubIcon />}
            ]
        },
]
}