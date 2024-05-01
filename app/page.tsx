import AboutSection from "./components/AboutSection";
import FavoriteProject from "./components/FavoriteProject";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Sectiontwo from "./components/Sectiontwo";

export default function Home() {
  return (
  <div className="max-w-7xl w-full px-4 md:px-8 mx-auto">
<Hero />
<Sectiontwo />
<AboutSection />
<FavoriteProject />
<Footer />
  </div>
  );
}
