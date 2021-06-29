import emoji from "react-easy-emoji";

import nisum from "./assets/img/icons/common/nisumLogo.png";

export const greetings = {
  name: "Arsalan Ahmed Nasir",
  title: "Hi, I'm Arsalan Ahmed Nasir",
  description:
    "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks and Cross Platform Mobile Apps With React Native.",
};

export const openSource = {
  githubUserName: "Arsalan-Nasir",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/arsalan.nasir.58",
  github: "https://github.com/Arsalan-Nasir",
  linkedin: "https://www.linkedin.com/in/arsalan-ahmed-nasir-53a95218b/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ I can work on large scale company"),
    emoji("⚡ I can also work as a team player !"),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "scss",
      fontAwesomeClassname: "vscode-icons:file-type-scss",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "JavaScript",
    progressPercentage: "90",
  },
  {
    Stack: "React",
    progressPercentage: "85",
  },
  {
    Stack: "React Native",
    progressPercentage: "85",
  },
  {
    Stack: "Frontend Development",
    progressPercentage: "90",
  },
  {
    Stack: "Backend",
    progressPercentage: "50",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName: "University of Karachi",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "January 2016 - December 2019",
    desc: "Took courses about Software Engineering, Data Structures, Object Oriented Programming, DataBase Management, Automata ...",
    // descBullets: ["Acquire good CGPA","Also took Assembly Language"],
  },
];

export const experience = [
  {
    role: "Software Enginner - Javascript",
    company: "Nisum",
    companylogo: nisum,
    date: "March 2020 – Present",
    desc: "Currently I am a full time JavaScript Developer at Nisum. I worked for many Local and Internationl Clients.",
  },
  {
    role: "Internship",
    company: "Nisum",
    companylogo: nisum,
    date: "Dec 2019 – March 2020",
    desc: "In my Internship period, I learned JavaScript, React, Redux, Nodejs and Problem Solving skills. I also learn how to work in a team and play your role as a Team Player.",
  },
];

export const projects = [
  {
    name: "Baitussalam Mobile Application",
    desc: "In this Project, I worked as a Front-End Developer. The Tech Stack used in this project is React-Native, Redux, React-Native Navigation, Antd. This Project is currently live, you can have a look by clicking below.",
    link: {
      name: "Baitussalam",
      url: "https://apps.apple.com/us/app/baitussalam/id1534314519",
    },
  },
  {
    name: "Content Management System",
    desc: "In this Project, I worked as a Front-End Developer. The Tech Stack used in this project is ReactJs, Redux, Antd, React-Routers and for Backend I used NodeJs with MongoDB",
  },
];
