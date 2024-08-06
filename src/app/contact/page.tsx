'use client'
import React from 'react'
import { Button } from '@/components/ui/button';
import {Input} from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea';
import { Select,SelectContent,SelectGroup,SelectTrigger,SelectItem,SelectLabel } from '@/components/ui/select';
import {FaPhoneAlt,FaEnvelope,FaMapMarkerAlt} from 'react-icons/fa' 
import {motion} from 'framer-motion'
import { SelectValue } from '@radix-ui/react-select';


const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: '(+92) 317 2912 659',
  },
  {
    icon: <FaEnvelope/>,
    title: "Email",
    description: 'muhibkmehboob@gmail.com',
  },
  {
    icon: <FaMapMarkerAlt/>,
    title: "Address",
    description: 'Karachi Pakistan',
  },
]
const Contact = () => {
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{opacity:1, transition:{delay:2.4,duration:0.4,ease:'easeIn' } }}
    className='py-6'
    > 
    <div className='container mx-auto'>
    <div className='flex flex-col xl:flex-row gap-[30px]'>
      {/* Form */}
      <div className='xl:w-[54%] order-2 xl:order-none'>
        <form className='flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl0'>
          <h3 className='text-4xl text-accent'>Let's Work together</h3>
          <p className='text-white/60'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <Input type='firstname' placeholder='Firstname' />
            <Input type='lastname' placeholder='Lastname' />
            <Input type='email' placeholder='Email' />
            <Input type='Phone' placeholder='Phone Number' />
          </div>
          <Select>
            <SelectTrigger className='w-full'>
              <SelectValue placeholder="Select a service"/>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>
                  Select a Service
                </SelectLabel>
                <SelectItem value='est'>Web Development</SelectItem>
                <SelectItem value='sst'>Wordpress Development</SelectItem>
                <SelectItem value='cst'>Social Media Managment</SelectItem>
                <SelectItem value='mst'>SEO</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          {/* textarea */}
          <Textarea className='h-[200px]' placeholder='Type your message here'/>
        <Button className='max-w-40' size='md'>Send Message</Button>
        </form>
      </div>
      {/* info */}
      <div className='flex-1 flex items-center xl:justify-center order-1 xl:odrder-none mb-8 xl:mb-0'>
      <ul className='flex flex-col gap-10'>
        {info.map((item,index)=>{
          return (<li key={index} className='flex items-center gap-6'>
            <div className='w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center'>
              <div className='text-[28px]'>{item.icon}</div>
            </div>
            <div className='flex-1'>
              <p className='text-white/60'>{item.title}</p>
              <h3 className='text-xl'>{item.description}</h3>
            </div>
          </li>)
        })}
      </ul>
      </div>
      
    </div>
    </div>
    </motion.section>
  )
}

export default Contact;