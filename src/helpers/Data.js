import aj from "../images/projects/aj.jpg";

import taythrifts from "../images/projects/taythrifts/1.PNG";

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
      image: taythrifts,
      languages: ["ReactJS", "Firebase", "TailwindCss"],
      link: "/projects/taythrifts",
      linkName: "taythrifts",
      repository: "https://github.com/ajcandelariaa/reactjs-taythrifts",
      website: "",
      description: "An e-commerce web application for Taytay Thrift Market with store-owner Inventory system.",
      about: "TayThrifts is an e-commerce web application for Taytay Thrift Market with store-owner Inventory system. I am the Lead Developer in this project and this is made for my final project as a one of the requirements of my subject. ",
      screenshots: [certDatabase,aj,aj,taythrifts,certDatabase,aj,certDatabase,aj,certDatabase,aj,certDatabase,aj],
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
