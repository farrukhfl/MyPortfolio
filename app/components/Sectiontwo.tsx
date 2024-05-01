import React from "react";
import square from "../../public/square.svg";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import figma from "../../public/techStack/figma.svg";
import chatgpt from "../../public/techStack/chatgpt.svg";
import github from "../../public/techStack/github.svg";
import youtube from "../../public/techStack/youtube.svg";
import chrome from "../../public/techStack/chrome.svg";
import vs from "../../public/techStack/vs.png";
import twitter from "../../public/twitter.svg";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";
import fb from "../../public/fb.png";
import { Button } from "@/components/ui/button";
import css from "../../public/skills/css.png";
import firebse from "../../public/skills/firebase.png";
import git from "../../public/skills/git.png";
import html from "../../public/skills/html.png";
import js from "../../public/skills/javascript.png";
import mongo from "../../public/skills/mongo.png";
import next from "../../public/skills/Nextjs.png";
import react from "../../public/skills/react.png";
import supabse from "../../public/skills/supabase-seeklogo.svg";
import tailwind from "../../public/skills/tailwind.png";
import ts from "../../public/skills/ts.png";

const icons = [css, firebse, git, html, js,mongo,next,react,supabse,tailwind,ts];

const socialMedia = [
  {
    id: 1,
    icon: insta,
    name: "Instagram",
    username: "@farrukh_shahzad111",
    link: "http://localhost:3000/",
  },

  {
    id: 2,
    icon: linkedin,
    name: "Linkedin",
    username: "farrukh-shahzad-13b05aa6",
    link: "https://www.linkedin.com/in/farrukh-shahzad-13b05aa6/",
  },
  {
    id: 3,
    icon: fb,
    name: "Facebook",
    username: "@farrukhfl",
    link: "https://www.facebook.com/farrukhfl",
  },
];

export default function Sectiontwo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
      <div className="w-full relative col-span-1">
        <Image
          src={square}
          alt="square"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none">
          <CardHeader>
            <CardTitle>My Expertise</CardTitle>
            {/* <CardDescription>Checkout the tools I use daily</CardDescription> */}
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((item, index) => (
              <Image key={index} src={item} alt="Icon" className="w-16 h-16" />
            ))}
          </CardContent>
        </Card>
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none"
            >
              <Image src={item.icon} alt="Icon" className="w-16 h-16" />
              <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link}>Follow</a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
