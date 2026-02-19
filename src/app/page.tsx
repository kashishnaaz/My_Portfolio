import ContactSection from "@/components/ContactSection";
import HereSection from "@/components/HereSection";
import ProjectsSection from "@/components/ProjectsSection";
import { AchievementSection } from "@/components/Achievement";

import Education from "@/components/Education";

const Home = () => {
  return (
    <>
     <main className="max-w-7xl mx-auto px-6 lg:px-8">
     <HereSection/>
    <Education/>
    
     <ProjectsSection/>
     <AchievementSection/>
     <ContactSection/>
     </main>
    </>
  );
};

export default Home;
