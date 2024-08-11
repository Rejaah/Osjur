import React from 'react'
import Image from "next/legacy/image";
import Link from "next/link";

const ContactSection = () => {
  return (
    <section id="contact" className='gap-8 items-center py-4 px-4 xl:gap-8 sm:py-8 xl:px-16'>
        <div>
            <h5 className='text-2xl font-bold text-white my-2'>Let's Connect</h5>
            <p className='text-[#ADB7BE] mb-4 max-w-xl'>
            I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision. 
            Whether you have a question, a proposal, or just want to say hello, feel free to reach out. I look forward to connecting with you!
            </p>
        </div>
        <div className='socials flex flex-row gap-2'>
            <Link href="https://www.instagram.com/rzahmadsyarif?">
                <Image src="/images/instagram icon.png" alt="Instagram icon" width={48} height={48}></Image>
            </Link>
            <Link href="https://www.linkedin.com/in/reza-ahmad-syarif">
                <Image src="/images/linkedin icon.png" alt="LinkeIn Icon"width={48} height={48}></Image>
            </Link>
        </div>
    </section>
  )
}

export default ContactSection