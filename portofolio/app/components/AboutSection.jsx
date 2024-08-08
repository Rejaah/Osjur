import React from 'react'
import Image from "next/legacy/image";

const AboutSectiopn = () => {
  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src='/images/computer.png' width={500} height={500}/>
            <div>
                <h2 className='text-4xl font-bold mb-4 '>About Me</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Fusce at nibh in lacus faucibus bibendum. Mauris ut ante vulputate,
                laoreet arcu eget, scelerisque sapien. Duis ac maximus odio, 
                a convallis dui. Aenean condimentum nunc sed bibendum viverra. 
                Nam ac elit blandit, ultricies ligula non, auctor nulla. Integer 
                congue lacus vulputate velit vestibulum, vel aliquam urna pretium. 
                Sed vel placerat massa, nec blandit nibh.</p>
            </div>
            <div className="flex flex-row mt-8">
                <span className='mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b'>Skills</span>
                <span>Education</span>
                <span>Interest</span>
            </div>
        </div>
    </section>
  )
}

export default AboutSectiopn