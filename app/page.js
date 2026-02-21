
import Footer from "@/components/footer/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/NavBar/NavBar";
import Projects from "@/components/project";

import SkillCards from "@/components/skillcard";
import TechOrbit from "@/components/techorbit";
import Testimonial from "@/components/testimonial";


export default function Home() {
  return (
    <>
    <Navbar/>
<Hero/>
<Projects/>



<TechOrbit/>
<SkillCards/>
<Testimonial/>

<Footer/>
    </>
  )
}