import Head from "next/head";
import Hero from "@/components/homepage/hero";
import HomeButton from "@/components/homepage/home-button";

export default function Home() {
  return (
    <main>
      <div className="py-4">
        <Hero />
      </div>
      <div className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-4">
        <HomeButton text="Login" linkPath="/login" />
        <HomeButton text="Register" linkPath="/register" />
        <HomeButton text="About" linkPath="/about" />
        <HomeButton text="Test Sheet" linkPath="/character" />
      </div>
    </main>
  );
}
