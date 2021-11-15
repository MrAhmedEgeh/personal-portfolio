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
import sidemenu from '../assests/images/Side Menu.png';
import loginform from '../assests/images/loginform.png';
import logoanim from '../assests/images/logoanim.png';
import narcos from '../assests/images/Narcos.png';
import onepiece from '../assests/images/onepiece.png';
import counter from '../assests/images/counter.png';
import colorGenerator from '../assests/images/colorgenerator.png';
import survey from '../assests/images/surveyform.png';
import landing from '../assests/images/landingpage.png';
import technicalDoc from '../assests/images/technicaldoc.png';
import portofolio from '../assests/images/personalporto.png';
import Fyodor from '../assests/images/Fyodor Dostoyevsky.png';
import imgslider from '../assests/images/imgslider.png';
import weather from '../assests/images/weather.png';
import fatine from '../assests/images/fatine.png';
import todoApp from '../assests/images/todoApp.png';

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
            title: 'Web & App developer intern',
            place: 'Bahrain - Manama',
            date: '1st July 2021 - 31st August 2021',
            description: 'I have worked in Alqoud Enterprise for 2 months of internship, I was working in the IT department and worked in developing the Natural Bites App for Android using Flutter and Dart, I also worked with Firebase and Firestore databases.'
        },
        {
            title: 'Help disk',
            place: 'Saudi Arabia - AL Khobar',
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
        /*---------REACT-----------------*/
        {
            tag: 'React JS',
            tags: ['React Js', 'SASS'],
            image: todoApp,
            title: 'Todo List App',
            caption: 'A Todo List App made by using React js and its hooks and SASS',
            description: 'This project is a Todo App made by React js and its hooks like useEffect, useRef and useState and also by using SASS instead of CSS. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/react-todo-app/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/react-todo-app', icon: <GitHubIcon />}
            ]
        },
        {
            tag: 'React JS',
            tags: ['React Js'],
            image: weather,
            title: 'Weather App',
            caption: 'A Weather App I made using React js',
            description: 'This project is a weather app made using React js and I used a weather API from open weather map site. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/weather-app/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/weather-app', icon: <GitHubIcon />}
            ]
        },
        {
            tag: 'React JS',
            tags: ['React Js'],
            image: imgslider,
            title: 'Image Slider',
            caption: 'An Image slider using React js',
            description: 'This project is an image slider made with React js. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/react-image-slider/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/react-image-slider', icon: <GitHubIcon />}
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
                {link: 'https://mrahmedegeh.github.io/tic-tac-toe-React/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/tic-tac-toe-React', icon: <GitHubIcon />}
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
                {link: 'https://mrahmedegeh.github.io/calculator-react/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/calculator-react', icon: <GitHubIcon />}
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
                {link: 'https://mrahmedegeh.github.io/passwordGenerator/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/passwordGenerator', icon: <GitHubIcon />}
            ]
        },
        /*-------VANILLA JS--------------*/
        {
            tag: 'Vanilla JS',
            tags: ['HTML', 'CSS', 'Vanilla JS'],
            image: Fyodor,
            title: 'Dostoyevsky Tribute Page',
            caption: 'Fyodor Dostoyevsky Tribute Page made with HTML, CSS and JS',
            description: 'Fyodor Dostoyevsky Tribute Page made with HTML, CSS and JS. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/Fyodor-Dostoyevsky/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/Fyodor-Dostoyevsky', icon: <GitHubIcon />},
            ]
        },
        {
            tag: 'Vanilla JS',
            tags: ['HTML', 'CSS', 'Vanilla JS'],
            image: colorGenerator,
            title: 'Color generator app',
            caption: 'Color generator app with javascript',
            description: 'A Color generator made with vanilla javascript. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/color-generator-js/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/color-generator-js', icon: <GitHubIcon />},
            ]
        },
        {
            tag: 'Vanilla JS',
            tags: ['HTML', 'CSS', 'Vanilla JS'],
            image: counter,
            title: 'Counter App',
            caption: 'Counter app made with javascript',
            description: 'A counter app made with vanilla javascript. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/counter-app/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/counter-app', icon: <GitHubIcon />},
            ]
        },
        {
            tag: 'Vanilla JS',
            tags: ['HTML', 'CSS'],
            image: sidemenu,
            title: 'Responsive Side Menu',
            caption: 'I made a responsive side menu using HTML&CSS',
            description: 'I made a responsive side menu using HTML&CSS, simple and straight to the point. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/sidemenu/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/sidemenu', icon: <GitHubIcon />},
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
                {link: 'https://mrahmedegeh.github.io/todo-app-JS-OOP/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/todo-app-JS-OOP', icon: <GitHubIcon />}
            ]
            },
            {
                tag: 'Vanilla JS',
                tags: ['HTML', 'CSS', 'Vanilla JS'],
                image: fatine,
                title: 'Portfolio Website',
                caption: 'A portfolio website for a friend',
                description: 'I created this website using HTML, CSS and Javascript for a friend so he can put out his skills and knowledge for potential recruiters.',
                links:[
                    {link: 'https://fatine.ga', icon: <LanguageIcon />}
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
                    {link: 'https://mrahmedegeh.github.io/FAQ-JS/', icon: <LanguageIcon />},
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
                    {link: 'https://mrahmedegeh.github.io/tic-tac-toe-vanilla-JS/', icon: <LanguageIcon />},
                    {link: 'https://github.com/MrAhmedEgeh/tic-tac-toe-vanilla-JS', icon: <GitHubIcon />}
                ]
            },
        /*------HTML & CSS---------------*/
        {
            tag: 'HTML & CSS',
            tags: ['HTML', 'CSS'],
            image: technicalDoc,
            title: 'A Technical documentation',
            caption: 'A Technical documentation page made with HTML and CSS',
            description: 'A Technical documentation page made with HTML and CSS. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/technical-documentation/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/technical-documentation', icon: <GitHubIcon />},
            ]
        },
        {
            tag: 'HTML & CSS',
            tags: ['HTML', 'CSS'],
            image: portofolio,
            title: 'A Portfolio page',
            caption: 'A basic portofolio page made with HTML and CSS',
            description: 'A basic portofolio page made with HTML and CSS. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/personal-portfolio-HTMLCSS/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/personal-portfolio-HTMLCSS', icon: <GitHubIcon />},
            ]
        },
        {
            tag: 'HTML & CSS',
            tags: ['HTML', 'CSS'],
            image: landing,
            title: 'A Landing page',
            caption: 'A Landing page made with HTML and CSS',
            description: 'A Landing page made with HTML and CSS. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/product-landing/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/product-landing', icon: <GitHubIcon />},
            ]
        },
        {
            tag: 'HTML & CSS',
            tags: ['HTML', 'CSS'],
            image: survey,
            title: 'A Survey Form',
            caption: 'A survey form made with HTML and CSS',
            description: 'A survey form made with HTML and CSS. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/survey-form/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/survey-form', icon: <GitHubIcon />},
            ]
        },
        {
            tag: 'HTML & CSS',
            tags: ['HTML', 'CSS'],
            image: onepiece,
            title: 'One Piece card design',
            caption: 'One Piece card design using HTML and CSS',
            description: 'I made a simple design for One piece anime. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/one-piece-card/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/one-piece-card', icon: <GitHubIcon />},
            ]
        },
        {
            tag: 'HTML & CSS',
            tags: ['HTML', 'CSS'],
            image: narcos,
            title: 'Movie Card with animation',
            caption: 'Narcos tv show card design using HTML and CSS',
            description: 'Narcos tv show card design using HTML and CSS, the animation was entirely made with pure CSS. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/movie-card-animation/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/movie-card-animation', icon: <GitHubIcon />},
            ]
        },
        {
            tag: 'HTML & CSS',
            tags: ['HTML', 'CSS'],
            image: logoanim,
            title: 'Logo Animation with HTML & CSS',
            caption: 'I made a login form with an animation using just HTML&CSS',
            description: 'I made a login form with an animation using just HTML&CSS, everthing is made with pure CSS. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/logo-animation/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/logo-animation', icon: <GitHubIcon />},
            ]
        },
        {
            tag: 'HTML & CSS',
            tags: ['HTML', 'CSS'],
            image: loginform,
            title: 'Login Form With Animation',
            caption: 'I made a login form with an animation using HTML&CSS',
            description: 'I a login form with an animation using HTML & CSS, simple and straight to the point. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/login-form/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/login-form', icon: <GitHubIcon />},
            ]
        },
        {
            tag: 'HTML & CSS',
            tags: ['HTML', 'CSS', 'CSS Flexbox'],
            image: emailtemp,
            title: 'Email template',
            caption: 'As a task in my internship in Alqoud Enterprise',
            description: 'As a task in my internship in Alqoud Enterprise, I was asked to design an email template that can be used in a contact us form for an app we were developing. Click on the icon to see the project on github.',
            links:[
                {link: 'https://mrahmedegeh.github.io/email-template/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/email-template', icon: <GitHubIcon />},
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
            {link: 'https://mrahmedegeh.github.io/html-css-template1/', icon: <LanguageIcon />},
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
                {link: 'https://mrahmedegeh.github.io/pizzaWebsite/', icon: <LanguageIcon />},
                {link: 'https://github.com/MrAhmedEgeh/pizzaWebsite', icon: <GitHubIcon />}
            ]
            },
]
}