// import images
// import Hero_person from "./assets/images/Hero/person.png";
import Hero_person from "./assets/images/Hero/undraw_digital_nomad_re_w8uy.svg";


import figma from "./assets/images/Skills/figma.png";
import django from "./assets/images/Skills/django.png";
import reactjs from "./assets/images/Skills/react.png";
import nextjs from "./assets/images/Skills/next.png";
import redux from "./assets/images/Skills/redux.png";
import typescript from "./assets/images/Skills/typescript.png";
import javascript from "./assets/images/Skills/javascript.png";
import nodejs from "./assets/images/Skills/node.png";
import python from "./assets/images/Skills/python.png";

import services_logo1 from "./assets/images/Services/logo1.png";
import services_logo2 from "./assets/images/Services/logo2.png";
import services_logo3 from "./assets/images/Services/logo3.png";

import person_project from "./assets/images/Projects/person.png";
import dashyDashImg from './assets/images/Projects/dashyDashImage.webp'
import communityImg from './assets/images/Projects/communityImage.jpg'
import tensorplaceImg from './assets/images/Projects/tensorplaceImage.jpg'
import greenpillImg from './assets/images/Projects/greenpillImage.jpg'
import productionManageentImg from './assets/images/Projects/productionManageent.png'
import hemsuriImg from './assets/images/Projects/hemsuriImage.jpg'


import avatar1 from "./assets/images/Testimonials/avatar1.png";
import avatar2 from "./assets/images/Testimonials/avatar2.png";
import avatar3 from "./assets/images/Testimonials/avatar3.png";
import avatar4 from "./assets/images/Testimonials/avatar4.png";

import Hireme_person from "./assets/images/Hireme/person.png";
import Hireme_person2 from "./assets/images/Hireme/person2.png";

// import icons from react-icons
import { GrMail } from "react-icons/gr";
import { MdArrowForward, MdCall } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { BsInstagram, BsGithub } from "react-icons/bs";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { RiServiceLine, RiProjectorLine } from "react-icons/ri";
import { MdOutlinePermContactCalendar } from "react-icons/md";

export const content = {
  nav: [
    {
      link: "#home",
      icon: TbSmartHome,
    },
    {
      link: "#skills",
      icon: BiUser,
    },
    {
      link: "#services",
      icon: RiServiceLine,
    },
    {
      link: "#projects",
      icon: RiProjectorLine,
    },
    {
      link: "#contact",
      icon: MdOutlinePermContactCalendar,
    },
  ],
  hero: {
    title: "Full Stack Developer",
    firstName: "PRIYANK",
    LastName: "JAIN",
    btnText: "Hire Me",
    image: Hero_person,
    hero_content: [
      {
        count: "2+",
        text: "Years of Experinse in Web development",
      },
      {
        count: "15+",
        text: "Projects Worked in my career",
      },
    ],
  },
  skills: {
    title: "Skills",
    subtitle: "For Those Who Know What They’re Looking For...",
    skills_content: [
      {
        name: "React js",
        para: "Lorem ipsum text  dummy",
        logo: reactjs,
      },
      {
        name: "Next js",
        para: "Lorem ipsum text  dummy",
        logo: nextjs,
      },
      {
        name: "Redux",
        para: "Lorem ipsum text  dummy",
        logo: redux,
      },
      {
        name: "Figma",
        para: "Lorem ipsum text  dummy",
        logo: figma,
      },
      {
        name: "Node js",
        para: "Lorem ipsum text  dummy",
        logo: nodejs,
      },
      {
        name: "Django",
        para: "Lorem ipsum text  dummy",
        logo: django,
      },
      {
        name: "Javascript",
        para: "Lorem ipsum text  dummy",
        logo: javascript,
      },
      {
        name: "Typescript",
        para: "Lorem ipsum text  dummy",
        logo: typescript,
      },
      {
        name: "Python",
        para: "Lorem ipsum text  dummy",
        logo: python,
      },
    ],
    icon: MdArrowForward,
  },
  services: {
    title: "Services",
    subtitle: "WHAT I OFFER",
    service_content: [
      {
        title: "Web Development",
        para: "Create end to end attractive and responsive website for your business",
        logo: services_logo1,
      },
      {
        title: "ui / ux DESIGNING",
        para: "User experience design services that can turn all your ideas into reality.",
        logo: services_logo2,
      },
      {
        title: "Application Development",
        para: "Create end to end user attractive mobile application",
        logo: services_logo3,
      },
    ],
  },
  Projects: {
    title: "Projects",
    subtitle: "MY CREATION",
    image: person_project,
    project_content:
      [
        { title: 'DashyDash', description: 'A Platform for processing Restaurant invoices and providing analyzed valuable data with the attractive graphs. Users will upload invoices and will get processed data and additionally analyzed data weekly, monthly, and yearly, which helps grow their business.', techStack: ['ReactJs', 'Django', 'Lambda', 'S3Bucket', 'API Gateway', 'PostgreSQL'], site: 'https://www.dashydash.com/', projectImg: dashyDashImg },
        { title: 'JainSangh', description: 'A Platform for Connecting All Jain Sangh on one platform Digitally. Users can join any of Sangh(community) and get connected with them and get participate in multiple events and activities mange by Sangh.', techStack: ['ReactJs', 'Nodejs', 'S3Bucket', 'API Gateway', 'PostgreSQL'], site: 'https://www.jainsangh.info/', projectImg: communityImg },
        { title: 'Tensorplace.io', description: 'A transparent blockchain-enabled marketplace platform for Machine Learning and Data Science capabilities.  Users can sell and buy repositories as per their needs. The seller can sell his private repositories of platforms like GitHub, Bitbucket, and GitLab and generate revenue using the Tensorplace platform.', techStack: ['ReactJs', 'Nodejs', 'FireStore'], site: 'https://www.tensorplace.in/', projectImg: tensorplaceImg },
        { title: 'GreenPill Admin Panel', description: 'An Admin PlatForm for one of the Solar Equipment Delar, From where he can manage his products to sell, his user’s inquiry, offer Module, new update notification, Payment Module, Each open service status.', techStack: ['JavaScript', 'NodeJs', 'FireStore'], site: 'A Admin PlatForm for one of the Solar Equipment Delar, From where he can manage his products to sell, his user’s inquiry, offer Module, new update notification, Payment Module, Each open service status', projectImg: greenpillImg },
        { title: 'Production Management', description: 'A Platform for production factory to manage their work, where they can manage their orders and give live update of stage where orders exists', techStack: ['ReactJs'], site: 'https://main.d2em53wksydifu.amplifyapp.com/', projectImg: productionManageentImg },
        { title: 'Hemsuri Maharaj', description: 'It is a project of booking continuous upvas(fast) for 1year, on occasion of hemsuri maharaj pratishtha', techStack: ['React', 'FireStore'], site: 'https://www.hemsuri.in/', projectImg: hemsuriImg },
        // { title: '', description: '', techStack: [], site: '',github:"" },
      ],
  },
  Testimonials: {
    title: "Testimonials",
    subtitle: "MY CLIENT REVIEWS",
    testimonials_content: [
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar1,
        name: "PRIYANK DOE",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar2,
        name: "Tom Alex",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar3,
        name: "Johnny",
      },
      {
        review:
          "“In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstra”",
        img: avatar4,
        name: "ROBBIN",
      },
    ],
  },
  Hireme: {
    title: "Hire Me",
    subtitle: "FOR YOUR PROJECTS",
    image1: Hireme_person,
    image2: Hireme_person2,
    para: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document elying on mean",
    btnText: "Hire Me",
  },
  Contact: {
    title: "Contact Me",
    subtitle: "GET IN TOUCH",
    social_media: [
      {
        text: "Priyank Jain",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/priyank8141",
      },
      {
        text: "priyank8141",
        icon: BsGithub,
        link: "https://github.com/priyank8141",
      },
      {
        text: "jainpriyank789@gmail.com",
        icon: GrMail,
        link: "mailto:jainpriyank789@gmail.com",
      },
    ],
  },
  Footer: {
    text: "All © Copy Right Reserved 2022",
  },
};
