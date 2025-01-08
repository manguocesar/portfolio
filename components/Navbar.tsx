import { useState, useEffect, FunctionComponent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { motion } from "framer-motion";

const NavItem: FunctionComponent<{
   active: string
   setActive: Function
   name: string
   route: string
}> = ({ active, setActive, name, route }) => {
   return active !== name ? (
      <Link href={route}>

         <span
            className='mx-2 cursor-pointer hover:border-b-4 hover:text-orange'
            onClick={() => setActive(name)}>
            {name}
         </span>

      </Link>
   ) : null;
}

const Navbar = () => {
   const { pathname } = useRouter()

   const [active, setActive] = useState('')

   //later
   useEffect(() => {
      if (pathname === '/') setActive('About')
      else if (pathname === '/projects') setActive('Projects')
      else if (pathname === '/resume') setActive('Resume')
   }, [])

   return (
      <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }} className='flex items-center justify-between px-5 py-3 my-3'>
         <span className='text-xl font-bold border-b-4 md:text-2xl border-orange'>
            {active}
         </span>

         <div className='text-base font-normal md:text-xl'>
            <NavItem
               active={active}
               setActive={setActive}
               name='About'
               route='/'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Resume'
               route='/resume'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Projects'
               route='/projects'
            />
         </div>
      </motion.div>
   )
}

export default Navbar
