import Hero from "@/components/teampage/Hero";
import Faculty from "@/components/teampage/Faculty";
import JoinCommunity from "@/components/teampage/JoinCommunity";
import TeamGrid from "@/components/teampage/TeamGrid";


export default function TeamPage() {
  return (
    <main className="min-h-screen bg-[var(--color-black)] text-primary">
      <Hero />
      <Faculty/>

      <TeamGrid />
      <JoinCommunity/>


      

    </main>
  );
}