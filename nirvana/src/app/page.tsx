import HeroPage from "@/components/homepage/HeroPage";
import MarqueeText from "@/components/homepage/MarqueeText";
import FeatureOfTheMonth from "@/components/homepage/FeatureOfTheMonth";
import Events from "@/components/homepage/Events";
import Game from "@/components/homepage/Game";

export default function Home() {
  return (
    <>

      <HeroPage />
      <MarqueeText/>
      <Events/>
      <FeatureOfTheMonth/>
      <Game/>
      

      
    </>
  );
}