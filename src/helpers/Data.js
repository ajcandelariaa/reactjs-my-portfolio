import aj from "../images/projects/aj.jpg";
import certDatabase from "../images/projects/certDatabase.PNG";

export function getProjects() {
  const data = [
    {
      id: 1,
      title: "SamQuicksal",
      image: aj,
      languages: ["Laravel", "Android", "TailwindCss", "Kotlin", "MySQL"],
      link: "/projects/samquicksal",
      linkName: "samquicksal",
      repository: "",
      website: "",
      description: "An e-commerce web application for Taytay Thrift Market with store-owner Inventory system.",
      about: "TayThrifts is an e-commerce web application for Taytay Thrift Market with store-owner Inventory system. I am the Lead Developer in this project and this is made for my final project as a one of the requirements of my subject",
      screenshots: [certDatabase,aj,aj,aj,certDatabase,aj,certDatabase,aj,certDatabase,aj,certDatabase,aj],
    },
    {
      id: 2,
      title: "SamQuicksal2",
      image: aj,
      languages: ["Laravel", "Android", "TailwindCss", "Kotlin", "MySQL"],
      link: "/projects/samquicksal2",
      linkName: "samquicksal2",
      repository: "",
      website: "",
      description: "An e-commerce web application for Taytay Thrift Market with store-owner Inventory system.",
      about: "TayThrifts is an e-commerce web application for Taytay Thrift Market with store-owner Inventory system. I am the Lead Developer in this project and this is made for my final project as a one of the requirements of my subject",
      screenshots: [aj,aj,aj,aj],
    },
    {
      id: 3,
      title: "SamQuicksal3",
      image: aj,
      languages: ["Laravel", "Android", "TailwindCss", "Kotlin", "MySQL"],
      link: "/projects/samquicksal3",
      linkName: "samquicksal3",
      repository: "",
      website: "",
      description: "An e-commerce web application for Taytay Thrift Market with store-owner Inventory system.",
      about: "TayThrifts is an e-commerce web application for Taytay Thrift Market with store-owner Inventory system. I am the Lead Developer in this project and this is made for my final project as a one of the requirements of my subject",
      screenshots: [aj,aj,aj,aj],
    }
  ];

  return data;
}
