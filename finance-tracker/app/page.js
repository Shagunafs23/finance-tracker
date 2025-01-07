import { Button } from "/components/ui/button";
import Header from "./_components/Header";
import Hero from "./_components/Hero";
import Footer from "./_components/Footer";
import Testimonial from "./_components/Testimonial";
import Stat from "./_components/Stat";
import Announcement from "./_components/Announcement";

export default function Home() {
  return (
    <div>
      <Announcement/>
      <Header/>
      <Hero/>
      <Stat/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}
