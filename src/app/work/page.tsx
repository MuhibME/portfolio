'use client'
import React from 'react';
import {motion} from 'framer-motion';
import { useState } from 'react'; 
import {Swiper ,SwiperClass,SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import WorkSliderBtns from '@/components/WorkSliderBtns';


const projects= [
  {
    num: '01',
    category: 'Wordpress',
    title: 'Project 1',
    decription: 'A wordpress website showcasing their products',
    stack: [{name: 'Wordpress'},],
    image: '/assets/work/work1.png',
    live:'https://mehboobebrahimagency.com'
  },
  {
    num: '02',
    category: 'Frontend',
    title: 'Project 2',
    decription: 'Portfolio build with page transitions',
    stack: [{name: 'Next.js'}, {name:'Tailwind.css'}],
    image: '/assets/work/work2.png',
    live:'/'
  },
  {
    num: '03',
    category: 'Full Stack',
    title: 'Project 3',
    decription: 'Ecommerce web application using stipe and sanity as backend',
    stack: [{name: 'Next.js'}, {name:'Tailwind.css'},{name: 'Node.js'},{name:'Sanity'}],
    image: '/assets/work/work4.png',
    live:'https://bikezz-one.vercel.app'
  },
  {
    num: '04',
    category: 'Frontend',
    title: 'Project 4',
    decription: 'A coffee shop Landing page.',
    stack: [{name: 'Next.js'}, {name:'Tailwind.css'}],
    image: '/assets/work/work3.png',
    live:'https://zenbrew-opal.vercel.app'
  },

]

const Work = () => {
  const [project, setProject]=useState(projects[0]);

  const handleSlideChange = (swiper:SwiperClass)=>{
    //get current slide
    const currentIndex= swiper.activeIndex;
    // update project state 
    setProject(projects[currentIndex]);
  }

  return (
    <motion.section
      initial={{opacity:0}}
      animate={{opacity:1, transition:{delay:2.4,duration:0.4,ease:'easeIn' } }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              {/* outline num */}
              <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>{project.category} project</h2>
              {/* Project Description */}
              <p className='text-white/60'>{project.decription}</p>
              {/* stack */}
              <ul className='flex gap-4'>
                {project.stack.map((item,index)=>{
                  return(
                    <li key={index} className='text-xl text-accent'>
                      {item.name}
                      {index !== project.stack.length -1 && ','}
                    </li> 
                  )
                })}
              </ul>
              <div className='border border-white/20'></div>
              {/* button */}
              <div>
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent'/>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
                <Swiper 
                spaceBetween={30}
                slidesPerView={1}
                className='xl:h-[520px] mb-12'
                onSlideChange={handleSlideChange} 
                >
                  {projects.map((project,index)=>{
                    return <SwiperSlide key={index} className='w-full'>
                      <div className='h-[460px] relative group flex justify-center items-center bg-pink-50'>
                        {/* overlay */}
                        <div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
                        {/* image */}
                        <div className='relative w-full h-full'>
                          <Image src={project.image} fill className='object-cover' alt={''}/>
                        </div>
                      </div>
                    </SwiperSlide>
                  })}
                  {/* slider Button */}
                  <WorkSliderBtns containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none' btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all' />
                </Swiper>
          </div>  
        </div>
      </div>
    </motion.section>
  )
}

export default Work;