"use client";
import React, {useTransition, useState} from 'react'
import Image from "next/legacy/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const TAB_DATA = [
    {
      title:"Skills",
      id:"skills",
      content: (
        <ul>
          <li>Python</li>
          <li>Haskell</li>
          <li>C++</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      ),
    },
    {
      title:"Interests",
      id:"interests",
      content: (
        <ul>
          <li>Web Development</li>
          <li>Mobile Development</li>
          <li>Game Development</li>
          <li>Artificial Intelligence</li>
        </ul>
      ),
    },
    {
      title:"Education",
      id:"education",
      content: (
        <ul>
          <li>Bandung Institute of Technology</li>
        </ul>
      ),
    },
    {
      title:"Achievement",
      id:"achievement",
      content: (
        <ul>
          <li>-</li>
        </ul>
      ),
    },
  ];

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition ] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-4 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/computer.png' alt="computer"width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-2xl font-bold mb-4 md:text-2xl'>About Me</h2>

                <p className='text-base lg:text-lg'>
                I am a second-year undergraduate student in Informatics Engineering at the Bandung Institute of Technology, 
                with a strong interest in Software Engineering and Artificial Intelligence. I have a solid foundation 
                in Python, Haskell, C++, and Javascript. I am driven to keep learning and contribute to innovative tech solutions.
                </p>

                <div className="flex flex-row justify-start mt-8">
                <TabButton
                selectTab={() => handleTabChange("skills")} 
                active={tab === "skills"}> 
                {" "}
                Skills{" "} 
                </TabButton>
                <TabButton
                selectTab={() => handleTabChange("interests")} 
                active={tab === "interests"}> 
                {" "}
                Interests{" "} 
                </TabButton>              
                <TabButton
                selectTab={() => handleTabChange("education")} 
                active={tab === "education"}> 
                {" "}
                Education{" "} 
                </TabButton>
                <TabButton
                selectTab={() => handleTabChange("achievement")} 
                active={tab === "achievement"}> 
                {" "}
                Achievement{" "} 
                </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection