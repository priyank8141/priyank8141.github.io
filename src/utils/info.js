import react from '../images/skills/react.png'
import javascript from '../images/skills/javascript.png'
import typescript from '../images/skills/typescript.png'
import nodejs from '../images/skills/nodejs.png'
import python from '../images/skills/python.png'
import mongoDB from '../images/skills/mongoDB.png'
import mysql from '../images/skills/mysql.png'
import firebase from '../images/skills/firebase.png'
import redux from '../images/skills/redux.png'
import django from '../images/skills/django.png'
import figma from '../images/skills/figma.png'

const name = 'Priyank Jain'

export const data = {
    about: {
        name,
        mobile: '8780533084',
        email: 'jainpriyank789@gmail.com',
        address: 'Gujarat, India',
        shortIntro: `I Help people and brands reach their business goals by designing & building fast, responsive and user friendly digital products with interactive experiences`
    },
    skills: {
        skillsList: [
            { skillName: 'React', imageFile: react },
            { skillName: 'Redux', imageFile: redux },
            { skillName: 'Node JS', imageFile: nodejs },
            { skillName: 'Django', imageFile: django },
            { skillName: 'Java Script', imageFile: javascript },
            { skillName: 'Type Script', imageFile: typescript },
            { skillName: 'Python', imageFile: python },
            { skillName: 'MongoDB', imageFile: mongoDB },
            { skillName: 'MySQL', imageFile: mysql },
            { skillName: 'Firebase', imageFile: firebase },
            { skillName: 'Figma', imageFile: figma },
        ]
    },
    projects: [
        { title: 'DashyDash', description: 'A Platform for processing Restaurant invoices and providing analyzed valuable data with the attractive graphs. Users will upload invoices and will get processed data and additionally analyzed data weekly, monthly, and yearly, which helps grow their business.', techStack: ['ReactJs', 'Django', 'Lambda', 'S3Bucket', 'API Gateway', 'PostgreSQL'], site: 'https://www.dashydash.com/' },
        { title: 'JainSangh', description: 'A Platform for Connecting All Jain Sangh on one platform Digitally. Users can join any of Sangh(community) and get connected with them and get participate in multiple events and activities mange by Sangh.', techStack: ['ReactJs', 'Nodejs', 'S3Bucket', 'API Gateway', 'PostgreSQL'], site: 'https://www.jainsangh.info/' },
        { title: 'Tensorplace.io', description: 'A transparent blockchain-enabled marketplace platform for Machine Learning and Data Science capabilities.  Users can sell and buy repositories as per their needs. The seller can sell his private repositories of platforms like GitHub, Bitbucket, and GitLab and generate revenue using the Tensorplace platform.', techStack: ['ReactJs', 'Nodejs', 'FireStore'], site: 'https://www.tensorplace.in/', github: "" },
        { title: 'GreenPill Admin Panel', description: 'An Admin PlatForm for one of the Solar Equipment Delar, From where he can manage his products to sell, his user’s inquiry, offer Module, new update notification, Payment Module, Each open service status.', techStack: ['JavaScript','NodeJs','FireStore'], site: 'A Admin PlatForm for one of the Solar Equipment Delar, From where he can manage his products to sell, his user’s inquiry, offer Module, new update notification, Payment Module, Each open service status',github:"" },
        { title: 'Production Management', description: 'A Platform for production factory to manage their work, where they can manage their orders and give live update of stage where orders exists', techStack: ['ReactJs'], site: 'https://main.d2em53wksydifu.amplifyapp.com/' },
        { title: 'Hemsuri maharaj project', description: 'It is a project of booking continuous upvas(fast) for 1year, on occasion of hemsuri maharaj pratishtha', techStack: ['React','FireStore'], site: 'https://www.hemsuri.in/',github:"" },
        // { title: '', description: '', techStack: [], site: '',github:"" },
    ]
}