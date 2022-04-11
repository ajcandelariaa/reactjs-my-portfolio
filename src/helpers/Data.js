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
      about: "TayThrifts is an e-commerce web application for Taytay Thrift Market with store-owner Inventory system. It is a group project and I am the Lead Developer in it. This is made for our final project as a one of the requirements in our subject. To develop this system we used ReactJS, Firebase and TailwindCss. ",
      features: [
        "Registration & Login", 
        "Edit Account Information", 
        "Add, Edit and Delete Store Items",
        "Add, Edit and Delete Items to Cart",
        "Checkout Payment",
        "Customer and Store Transaction History",
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
      about: "Desktopop is an E-Learning Website about Programming, Networking and Hardware with Exercises. It is a group project and I am the Lead Developer in it. This is made for our final project as one of the requirements in our subject. To develop this system we used HTML, CSS, JavaScript, MySQL and Bootstrap. ",
      features: [
        "Hardware Topics and Exercises",
        "Programming Topics and Exercises",
        "Networking Topics and Exercises",
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
      description: "A Blog Website about Food Recipes and Ingredients that is shared by the registered users.",
      about: "Recipe Ideas is a Blog Website about Food Recipes and Ingredients that is shared by the registered users. It is a solo project and I am the Lead Developer in it. This is made for my final project as a one of the requirements in my subject. To develop this system I used Codeigniter, JavaScript, MySQL and Bootstrap. ",
      features: [
        "Registration & Login",
        "Add, Edit and Delete Food Recipe",
      ],
      screenshots: recipeIdeasImages(),
    },
    {
      id: 4,
      title: "Food Recipes",
      image: foodRecipes_main,
      languages: ["Android", "Kotlin", "SQLite"],
      link: "/projects/food-recipes",
      linkName: "food-recipes",
      repository: "https://github.com/ajcandelariaa/android-food-recipes",
      website: "",
      description: "An Android Mobile Application about Food Recipes and Ingredients stored in the database.",
      about: "Food Recipes is an Android Mobile Application about Food Recipes and Ingredients stored in the database. It is a group project and I am the Lead Developer in it. This is made for our final project as a one of the requirements of our subject. To develop this system we used Android Studio, Kotlin and SQLite. ",
      features: [
        "Registration & Login", 
        "Add, Edit and Delete Food Recipe",
      ],
      screenshots: foodRecipesImages(),
    },
    {
      id: 5,
      title: "Quickchen",
      image: quickchen_main,
      languages: ["IOS", "Swift"],
      link: "/projects/quickchen",
      linkName: "quickchen",
      repository: "https://github.com/ajcandelariaa/xcode-quickchen",
      website: "",
      description: "An IOS Mobile Application about Food Recipes and Ingredients.",
      about: "Quickchen is an IOS Mobile Application about Food Recipes and Ingredients. It is a group project and I am the Lead Developer in it. This is made for our final project as a one of the requirements of our subject. To develop this system we used Xcode and Swift. ",
      features: [
        "View Main Dish Recipes", 
        "View Appetizer Recipes", 
        "View Dessert Recipes", 
        "View Soup Recipes", 
        "View Salad Recipes", 
      ],
      screenshots: quickchenImages(),
    },
    {
      id: 6,
      title: "Human Anatomy",
      image: humanAnatomy_main,
      languages: ["Xcode", "Swift"],
      link: "/projects/human-anatomy",
      linkName: "human-anatomy",
      repository: "https://github.com/ajcandelariaa/xcode-human-anatomy",
      website: "",
      description: "An IOS Mobile Application about that talks about the different parts of the human body and their functions.",
      about: "Human Anatomy is an IOS Mobile Application about that talks about the different parts of the human body and their functions. It is a group project and I am the Lead Developer in it. This is made for our final project as a one of the requirements of our subject. To develop this system we used Xcode and Swift. ",
      features: [
        "Viewing the parts and function of Digestive System", 
        "Viewing the parts and function of Urinary System", 
      ],
      screenshots: humanAnatomyImages(),
    },
    {
      id: 7,
      title: "Mai Otome Travel Agency",
      image: travelAgency_main,
      languages: ["C++"],
      link: "/projects/travelAgency",
      linkName: "travelAgency",
      repository: "https://github.com/ajcandelariaa/cplusplus-travel-agency",
      website: "",
      description: "A Console Application about japan's travel agency with tour packages and local travels",
      about: "Mai Otome Travel Agency is a Console Application about japan's travel agency with tour packages and local travels It is a group project and I am the Lead Developer in it. This is made for our final project as a one of the requirements of our subject. To develop this system we used C++. ",
      features: [
        "Add, Edit and Delete Tour Packages", 
        "Add, Edit and Delete Japan Cities", 
        "Add, Edit and Delete Airports", 
        "Add, Edit and Delete Flights", 
        "View Transactions", 
        "Book a Flight [One Way]",
        "Book a Flight [Roundtrip]",
      ],
      screenshots: travelAgencyImages(),
    },
    {
      id: 8,
      title: "Payroll System",
      image: payrollSystem_main,
      languages: ["C++"],
      link: "/projects/payroll-system",
      linkName: "payroll-system",
      repository: "https://github.com/ajcandelariaa/cplusplus-payroll-system",
      website: "",
      description: "A Console Application that calculate the salary of a registered employee",
      about: "Payroll System is a Console Application that calculate the salary of a registered employee. It is a solo project and I am the Lead Developer in it. This is made for my client. To develop this system I used C++. ",
      features: [
        "Add Employees", 
        "Delete Employees", 
        "View Employees",
        "Calculate the salary of employee",
        "Printing the receipt of the employee using pop-up .txt file",
      ],
      screenshots: payrollSystemImages(),
    },
    {
      id: 9,
      title: "Grading System",
      image: gradingSystem_main,
      languages: ["C++"],
      link: "/projects/grading-system",
      linkName: "grading-system",
      repository: "https://github.com/ajcandelariaa/cplusplus-grading-system",
      website: "",
      description: "A Console Application that add high school students as well as their grades per year and subject.",
      about: "Grading System is a Console Application that add high school students as well as their grades per year and subject. It is a solo project and I am the Lead Developer in it. This is made for my client. To develop this system I used C++. ",
      features: [
        "Add Students", 
        "View Students",
        "View and Edit Student Grade",
      ],
      screenshots: gradingSystemImages(),
    },
    {
      id: 10,
      title: "Banking System",
      image: bankingSystem_main,
      languages: ["C++"],
      link: "/projects/banking-system",
      linkName: "banking-system",
      repository: "https://github.com/ajcandelariaa/cplusplus-mini-banking-system",
      website: "",
      description: "A Console Application that register users as well as their current balance.",
      about: "Banking System is a Console Application that register users as well as their current balance. It is a solo project and I am the Lead Developer in it. This is made for my client. To develop this system I used C++. ",
      features: [
        "Registration & Login", 
        "Withdraw Money",
        "Deposit Money",
        "Checking Balance",
      ],
      screenshots: bankingSystemImages(),
    },
    {
      id: 11,
      title: "LRT 2 Ticketing System",
      image: lrt2TicketingSystem_main,
      languages: ["C++"],
      link: "/projects/lrt2-ticketing-system",
      linkName: "lrt2-ticketing-system",
      repository: "https://github.com/ajcandelariaa/cplusplus-train-ticketing-system",
      website: "",
      description: "A Console Application that calculates the train travel fee between two destinations.",
      about: "LRT 2 Ticketing System is a Console Application that calculates the train travel fee between two destinations. It is a solo project and I am the Lead Developer in it. This is made for my final project as a one of the requirements of my subject. To develop this system I used C++. ",
      features: [
        "View Stations", 
        "Calculate the travel fee between two stations", 
      ],
      screenshots: lrt2TicketingSystemImages(),
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
      delay: .2,
    },
    {
      id: 3,
      badge: badgeCcna,
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuedBy: "Cisco",
      issuedDate: "December 06, 2021",
      certificate: certCcna,
      credly: "https://www.credly.com/badges/ad2729b3-9a9a-4809-950c-fd70f17db17e",
      delay: .2,
    },
    {
      id: 4,
      badge: badgeDevnet,
      title: "DevNet Associate",
      issuedBy: "Cisco",
      issuedDate: "August 23, 2021",
      certificate: certDevnet,
      credly: "https://www.credly.com/badges/6d9169b4-2755-41c0-a503-94b7b8086469",
      delay: .2,
    },
  ]
  return data;
}
