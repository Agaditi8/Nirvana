import Hero from "@/components/teampage/Hero";
import Event from "@/components/teampage/Event";
import Content from "@/components/teampage/Content";
import Sponsi from "@/components/teampage/Sponsi";
import Media from "@/components/teampage/Media";
import CoreTeam from "@/components/teampage/CoreTeam";
import Faculty from "@/components/teampage/Faculty";
import JoinCommunity from "@/components/teampage/JoinCommunity";


export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[var(--color-black)] text-primary">
      <Hero />
      <Faculty/>
      <CoreTeam/>
      <Event/>
      <Content/>
      <Sponsi/>
      <Media/>
      <JoinCommunity/>


      

    </main>
  );
}