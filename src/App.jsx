import "./App.css";
import FirstSection from "./components/FirstSection";
import Header from "./components/Header";
import SectionDigital from "./components/SectionDigital";
import SectionSmart from "./components/SectionSmart";
import SectionInspiration from "./components/SectionInspiration";
import ContributorSection from "./components/ContributorSection";
// import ActiveSlider from "./components/ActiveSlider";
import InstallSection from "./components/InstallSection";
import InspirationSection from "./components/InspirationSection";
import NewContributors from "./components/NewContributors";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <FirstSection />
      <SectionDigital />
      <SectionSmart />
      <SectionInspiration />
      <ContributorSection />
      {/* <ActiveSlider /> */}
      <InstallSection />
      <InspirationSection />
      <NewContributors />
      <Footer />
    </>
  );
}

export default App;
