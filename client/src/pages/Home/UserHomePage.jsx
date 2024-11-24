import { useState, useEffect } from "react";
import { Navigation } from "../../components/Main/UserHome/navigation";
import { Header } from "../../components/Main/UserHome/header";
import { Features } from "../../components/Main/UserHome/features";
import { About } from "../../components/Main/UserHome/about";
import { Services } from "../../components/Main/UserHome/services";
import { Gallery } from "../../components/Main/UserHome/gallery";
import { Testimonials } from "../../components/Main/UserHome/testimonials";
import { Team } from "../../components/Main/UserHome/team";
import { Contact } from "../../components/Main/UserHome/contact";
import JsonData from "../../components/Main/UserHome/data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  const ShimmerUI = () => (
    <div className="flex flex-col items-center p-5">
      <div className="w-full h-5 bg-gray-200 animate-pulse mb-2"></div>
      <div className="w-full h-5 bg-gray-200 animate-pulse mb-2"></div>
      <div className="w-full h-5 bg-gray-200 animate-pulse"></div>
    </div>
  );

  const RenderContent = () => (
    <div className="px-5 sm:px-10 lg:px-20">
      <Navigation data={landingPageData.Navigation} />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );

  return (
    <div>
      {Object.keys(landingPageData).length > 0 ? (
        <RenderContent />
      ) : (
        <ShimmerUI />
      )}
    </div>
  );
};

export default Home;
