import React from 'react'
import { FloatingDock } from "@/components/ui/floatingIcons";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMail,
  IconPhoneCall,
} from "@tabler/icons-react";

const Socials = () => {
    const links = [
        {
          title: "LinkedIn",
          icon: (
            <IconBrandLinkedin className="h-full w-full text-blue-600" />
          ),
          href: "https://www.linkedin.com/in/muhammed-shaheer-t/",
        },
     
        {
          title: "Mail",
          icon: (
            <IconMail className="h-full w-full text-red-500" />
          ),
          href: "mailto:shaheermhd007@gmail.com",
        },
        {
          title: "Phone",
          icon: (
            <IconPhoneCall className="h-full w-full text-orange-500" />
          ),
          href: "tel:+971502058789",
        },
        {
          title: "WhatsApp",
          icon: (
            <IconBrandWhatsapp className='h-full w-full text-green-500' />
          ),
          href: "https://wa.me/+971502058789",
        },
        {
          title: "Instagram",
          icon: (
            <IconBrandInstagram className="h-full w-full text-pink-800" />
          ),
          href: "#",
        },
        {
          title: "GitHub",
          icon: (
            <IconBrandGithub className="h-full w-full text-neutral-300" />
          ),
          href: "https://github.com/Shaheer-mhd",
        },
      ];
  return (
    <div className='relative bg-default w-full'>
        <div className='mask-wrapper absolute' />
        <div className='content-wrapper relative z-50'>
            <div className='w-full flex flex-col gap-12 py-20'>
                <h1 className='text-white font-bold text-4xl tracking-wider uppercase w-full text-center'>Socials</h1>
                <div className="flex items-center justify-center w-full">
                    <FloatingDock
                        // mobileClassName="translate-y-20" // only for demo, remove for production
                        items={links}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Socials