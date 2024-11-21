import { Header } from "./components/header";
import { MainSection } from "./components/main-section";
import { AboutSection } from "./components/about-section";
import { SolutionsSection } from "./components/solutions-section";
import { ProjectsSection } from "./components/projects-section";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <MainSection />
        <AboutSection />
        <SolutionsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
