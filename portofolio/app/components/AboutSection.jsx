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
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
        </ul>
      ),
    },
    {
      title:"Interest",
      id:"interest",
      content: (
        <ul>
          <li>Web Development</li>
          <li>Mobile Development</li>
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
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/computer.png' width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold mb-4 '>About Me</h2>

                <p className='text-base lg:text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce at nibh in lacus faucibus bibendum. Mauris ut ante vulputate,
                laoreet arcu eget, scelerisque sapien. Duis ac maximus odio, 
                a convallis dui. Aenean condimentum nunc sed bibendum viverra. 
                Nam ac elit blandit, ultricies ligula non, auctor nulla. Integer 
                congue lacus vulputate velit vestibulum, vel aliquam urna pretium. 
                Sed vel placerat massa, nec blandit nibh.</p>

                <div className="flex flex-row justify-start mt-8">
                <TabButton
                selectTab={() => handleTabChange("skills")} 
                active={tab === "skills"}> 
                {" "}
                Skills{" "} 
                </TabButton>
                <TabButton
                selectTab={() => handleTabChange("interest")} 
                active={tab === "interest"}> 
                {" "}
                Interest{" "} 
                </TabButton>              
                <TabButton
                selectTab={() => handleTabChange("education")} 
                active={tab === "education"}> 
                {" "}
                Education{" "} 
                </TabButton>
                </div>
                <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection