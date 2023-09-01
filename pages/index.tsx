import Head from "next/head";
import Hero from "@/components/homepage/hero";
import HomeButton from "@/components/homepage/home-button"
 
export default function Home() {
  return (
    <main>
      <div className="py-4">
      <Hero />
      </div>
      <HomeButton text="Sign In" linkPath="/tbd" />
      <HomeButton text="Sign Up" linkPath="/tbd" />
    </main>
  )
}
