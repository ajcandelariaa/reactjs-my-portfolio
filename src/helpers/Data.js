import aj from "../images/projects/aj.jpg";
import certDatabase from "../images/projects/certDatabase.PNG";

import taythrifts from "../images/projects/taythrifts/1.PNG";

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
      issued: "Cisco",
      image: taythrifts
    }
  ]
  return data;
}
