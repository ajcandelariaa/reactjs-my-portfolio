import taythrifts_main from "../images/projects/taythrifts/0.PNG";
import taythriftsImages from "../helpers/projectImages/TayThrifts";

import desktopop_main from "../images/projects/desktopop/0.PNG";
import desktopopImages from "../helpers/projectImages/Desktopop";

import recipeIdeas_main from "../images/projects/recipeIdeas/0.PNG";
import recipeIdeasImages from "../helpers/projectImages/RecipeIdeas";

import travelAgency_main from "../images/projects/travelAgency/0.PNG";
import travelAgencyImages from "../helpers/projectImages/TravelAgency";

import certJavascript from "../images/achievements/certJavascript.PNG";
import certDatabase from "../images/achievements/certDatabase.PNG";
import certCcna from "../images/achievements/certCcna.PNG";
import certDevnet from "../images/achievements/certDevnet.PNG";

import badgeJavascript from "../images/achievements/badgeJavascript.png";
import badgeDatabase from "../images/achievements/badgeDatabase.png";
import badgeCcna from "../images/achievements/badgeCcna.png";
import badgeDevnet from "../images/achievements/badgeDevnet.png";


export function getProjects() {
  const data = [
    {
      id: 1,
      title: "TayThrifts",
      image: taythrifts_main,
      languages: ["ReactJS", "Firebase", "TailwindCss"],
      link: "/projects/taythrifts",
      linkName: "taythrifts",
      repository: "https://github.com/ajcandelariaa/reactjs-taythrifts",
      website: "",
      description: "An e-commerce web application for Taytay Thrift Market with store-owner Inventory system.",
      about: "TayThrifts is an e-commerce web application for Taytay Thrift Market with store-owner Inventory system. It is a group project and I am the Lead Developer in it. This is made for our final project as a one of the requirements of our subject. To develop this system I used ReactJS, Firebase and TailwindCss. ",
      features: [
        "Registration & Login", 
        "Add, Edit and Delete Account Information", 
        "Add, Edit and Delete Store Items",
        "Add, Edit and Delete Items to Cart",
        "Checkout Payment",
        "Customer and Store Transaction History"
      ],
      screenshots: taythriftsImages(),
    },
    {
      id: 2,
      title: "Desktopop",
      image: desktopop_main,
      languages: ["HTML", "CSS", "JavaScript", "MySQL", "Bootstrap"],
      link: "/projects/desktopop",
      linkName: "desktopop",
      repository: "https://github.com/ajcandelariaa/html-desktopop",
      website: "https://desktopop-e-learning.netlify.app/",
      description: "An E-Learning Website about Programming, Networking and Hardware with Exercises.",
      about: "Desktopop is E-Learning Website about Programming, Networking and Hardware with Exercises. It is a group project and I am the Lead Developer in it. This is made for our final project as a one of the requirements of our subject. To develop this system I used HTML, CSS, JavaScript, MySQL and Bootstrap. ",
      features: [
        "Assessment Management",
        "Live Feedback",
      ],
      screenshots: desktopopImages(),
    },
    {
      id: 3,
      title: "Recipe Ideas",
      image: recipeIdeas_main,
      languages: ["Codeigniter", "JavaScript", "MySQL", "Bootstrap"],
      link: "/projects/recipeIdeas",
      linkName: "recipeIdeas",
      repository: "https://github.com/ajcandelariaa/codeigniter-recipe-ideas",
      website: "",
      description: "A Blog Website about Food Recipes and Ingredients information that is shared by the users.",
      about: "Recipe Ideas is a Blog Website about Food Recipes and Ingredients information that is shared by the users. It is a solo project and I am the Lead Developer in it. This is made for my final project as a one of the requirements of my subject. To develop this system I used Codeigniter, JavaScript, MySQL and Bootstrap. ",
      features: [
        "Registration & Login", 
        "Add, Edit and Delete Food Recipe",
      ],
      screenshots: recipeIdeasImages(),
    },
    {
      id: 4,
      title: "Mai Otome Travel Agency",
      image: travelAgency_main,
      languages: ["C++"],
      link: "/projects/travelAgency",
      linkName: "travelAgency",
      repository: "https://github.com/ajcandelariaa/cplusplus-travel-agency",
      website: "",
      description: "A travel agency system that is made for japan.",
      about: "Recipe Ideas is a Blog Website about Food Recipes and Ingredients information that is shared by the users. It is a solo project and I am the Lead Developer in it. This is made for my final project as a one of the requirements of my subject. To develop this system I used Codeigniter, JavaScript, MySQL and Bootstrap. ",
      features: [
        "Registration & Login", 
        "Add, Edit and Delete Food Recipe",
      ],
      screenshots: travelAgencyImages(),
    },
  ];
  return data;
}


export function getAchievements(){
  const data = [
    {
      id: 1,
      badge: badgeJavascript,
      title: "JavaScript",
      issuedBy: "Certiport",
      issuedDate: "March 19, 2022",
      certificate: certJavascript,
      credly: "https://www.credly.com/badges/3c2bb824-6241-4a8e-bace-08a00cc0826b",
      delay: .2,
    },
    {
      id: 2,
      badge: badgeDatabase,
      title: "Database Fundamentals",
      issuedBy: "Microsoft",
      issuedDate: "November 18, 2019",
      certificate: certDatabase,
      credly: "https://www.credly.com/badges/5ad3cd7b-dfce-46d1-9ecc-92f5d1a89bae",
      delay: .3,
    },
    {
      id: 3,
      badge: badgeCcna,
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuedBy: "Cisco",
      issuedDate: "December 06, 2021",
      certificate: certCcna,
      credly: "https://www.credly.com/badges/ad2729b3-9a9a-4809-950c-fd70f17db17e",
      delay: .4,
    },
    {
      id: 4,
      badge: badgeDevnet,
      title: "DevNet Associate",
      issuedBy: "Cisco",
      issuedDate: "August 23, 2021",
      certificate: certDevnet,
      credly: "https://www.credly.com/badges/6d9169b4-2755-41c0-a503-94b7b8086469",
      delay: .5,
    },
  ]
  return data;
}
