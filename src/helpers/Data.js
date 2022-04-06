import taythrifts_main from "../images/projects/taythrifts/0.PNG";
import taythriftsImages from "../helpers/projectImages/TayThrifts";

import desktopop_main from "../images/projects/desktopop/0.PNG";
import desktopopImages from "../helpers/projectImages/Desktopop";

import recipeIdeas_main from "../images/projects/recipeIdeas/0.PNG";
import recipeIdeasImages from "../helpers/projectImages/RecipeIdeas";

import travelAgency_main from "../images/projects/travelAgency/0.PNG";
import travelAgencyImages from "../helpers/projectImages/TravelAgency";

import payrollSystem_main from "../images/projects/payrollSystem/0.PNG";
import payrollSystemImages from "../helpers/projectImages/PayrollSystem";

import gradingSystem_main from "../images/projects/gradingSystem/0.PNG";
import gradingSystemImages from "../helpers/projectImages/GradingSystem";

import bankingSystem_main from "../images/projects/bankingSystem/0.PNG";
import bankingSystemImages from "../helpers/projectImages/BankingSystem";

import lrt2TicketingSystem_main from "../images/projects/lrt2TicketingSystem/0.PNG";
import lrt2TicketingSystemImages from "../helpers/projectImages/Lrt2TicketingSystem";

import foodRecipes_main from "../images/projects/foodRecipes/0.PNG";
import foodRecipesImages from "../helpers/projectImages/FoodRecipes";

import quickchen_main from "../images/projects/quickchen/0.PNG";
import quickchenImages from "../helpers/projectImages/Quickchen";

import humanAnatomy_main from "../images/projects/humanAnatomy/0.PNG";
import humanAnatomyImages from "../helpers/projectImages/HumanAnatomy";

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
    {
      id: 5,
      title: "Payroll System",
      image: payrollSystem_main,
      languages: ["C++"],
      link: "/projects/payroll-system",
      linkName: "payroll-system",
      repository: "https://github.com/ajcandelariaa/cplusplus-payroll-system",
      website: "",
      description: "A travel agency system that is made for japan.",
      about: "Recipe Ideas is a Blog Website about Food Recipes and Ingredients information that is shared by the users. It is a solo project and I am the Lead Developer in it. This is made for my final project as a one of the requirements of my subject. To develop this system I used Codeigniter, JavaScript, MySQL and Bootstrap. ",
      features: [
        "Registration & Login", 
        "Add, Edit and Delete Food Recipe",
      ],
      screenshots: payrollSystemImages(),
    },
    {
      id: 6,
      title: "Grading System",
      image: gradingSystem_main,
      languages: ["C++"],
      link: "/projects/grading-system",
      linkName: "grading-system",
      repository: "https://github.com/ajcandelariaa/cplusplus-grading-system",
      website: "",
      description: "A travel agency system that is made for japan.",
      about: "Recipe Ideas is a Blog Website about Food Recipes and Ingredients information that is shared by the users. It is a solo project and I am the Lead Developer in it. This is made for my final project as a one of the requirements of my subject. To develop this system I used Codeigniter, JavaScript, MySQL and Bootstrap. ",
      features: [
        "Registration & Login", 
        "Add, Edit and Delete Food Recipe",
      ],
      screenshots: gradingSystemImages(),
    },
    {
      id: 7,
      title: "Banking System",
      image: bankingSystem_main,
      languages: ["C++"],
      link: "/projects/banking-system",
      linkName: "banking-system",
      repository: "https://github.com/ajcandelariaa/cplusplus-mini-banking-system",
      website: "",
      description: "A travel agency system that is made for japan.",
      about: "Recipe Ideas is a Blog Website about Food Recipes and Ingredients information that is shared by the users. It is a solo project and I am the Lead Developer in it. This is made for my final project as a one of the requirements of my subject. To develop this system I used Codeigniter, JavaScript, MySQL and Bootstrap. ",
      features: [
        "Registration & Login", 
        "Add, Edit and Delete Food Recipe",
      ],
      screenshots: bankingSystemImages(),
    },
    {
      id: 8,
      title: "LRT 2 Ticketing System",
      image: lrt2TicketingSystem_main,
      languages: ["C++"],
      link: "/projects/lrt2-ticketing-system",
      linkName: "lrt2-ticketing-system",
      repository: "https://github.com/ajcandelariaa/cplusplus-train-ticketing-system",
      website: "",
      description: "A travel agency system that is made for japan.",
      about: "Recipe Ideas is a Blog Website about Food Recipes and Ingredients information that is shared by the users. It is a solo project and I am the Lead Developer in it. This is made for my final project as a one of the requirements of my subject. To develop this system I used Codeigniter, JavaScript, MySQL and Bootstrap. ",
      features: [
        "Registration & Login", 
        "Add, Edit and Delete Food Recipe",
      ],
      screenshots: lrt2TicketingSystemImages(),
    },
    {
      id: 9,
      title: "Food Recipes",
      image: foodRecipes_main,
      languages: ["C++"],
      link: "/projects/food-recipes",
      linkName: "food-recipes",
      repository: "https://github.com/ajcandelariaa/android-food-recipes",
      website: "",
      description: "A travel agency system that is made for japan.",
      about: "Recipe Ideas is a Blog Website about Food Recipes and Ingredients information that is shared by the users. It is a solo project and I am the Lead Developer in it. This is made for my final project as a one of the requirements of my subject. To develop this system I used Codeigniter, JavaScript, MySQL and Bootstrap. ",
      features: [
        "Registration & Login", 
        "Add, Edit and Delete Food Recipe",
      ],
      screenshots: foodRecipesImages(),
    },
    {
      id: 10,
      title: "Quickchen",
      image: quickchen_main,
      languages: ["C++"],
      link: "/projects/quickchen",
      linkName: "quickchen",
      repository: "https://github.com/ajcandelariaa/xcode-quickchen",
      website: "",
      description: "A travel agency system that is made for japan.",
      about: "Recipe Ideas is a Blog Website about Food Recipes and Ingredients information that is shared by the users. It is a solo project and I am the Lead Developer in it. This is made for my final project as a one of the requirements of my subject. To develop this system I used Codeigniter, JavaScript, MySQL and Bootstrap. ",
      features: [
        "Registration & Login", 
        "Add, Edit and Delete Food Recipe",
      ],
      screenshots: quickchenImages(),
    },
    {
      id: 11,
      title: "Human Anatomy",
      image: humanAnatomy_main,
      languages: ["C++"],
      link: "/projects/human-anatomy",
      linkName: "human-anatomy",
      repository: "https://github.com/ajcandelariaa/xcode-human-anatomy",
      website: "",
      description: "A travel agency system that is made for japan.",
      about: "Recipe Ideas is a Blog Website about Food Recipes and Ingredients information that is shared by the users. It is a solo project and I am the Lead Developer in it. This is made for my final project as a one of the requirements of my subject. To develop this system I used Codeigniter, JavaScript, MySQL and Bootstrap. ",
      features: [
        "Registration & Login", 
        "Add, Edit and Delete Food Recipe",
      ],
      screenshots: humanAnatomyImages(),
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
