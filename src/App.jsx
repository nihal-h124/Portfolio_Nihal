
import AboutMeMain from './components/aboutme/AboutMeMain';
import ContactMain from './components/contact/ContactMain';
import ExperienceMain from './components/experience/ExperienceMain';
import Footer from './components/footer/Footer';
import NavbarMain from './components/navbar/NavbarMain'
import ProfileGradient from './components/profile/ProfileGradient';
import ProfileMain from './components/profile/ProfileMain'
import SubProfile from './components/profile/SubProfile';
import ProjectsMain from './components/projects/ProjectsMain';
import SkillsImgBottom from './components/skills/SkillsImgBottom';
import SkillsMain from './components/skills/SkillsMain';
import Spacer from './components/Spacer';

function App() {
  return (
    <main className="font-body">
      <NavbarMain/>
      <ProfileMain/>
      <ProfileGradient/>
      <SubProfile/>
      <AboutMeMain/>
      <SkillsMain/>
      <SkillsImgBottom/>
      <ExperienceMain/>
      <ProjectsMain/>
      <ContactMain/>
      <Footer/>
    </main>
  );
}

export default App
