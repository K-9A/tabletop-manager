import Head from "next/head";
import Hero from "@/components/homepage/hero";
import HomeButton from "@/components/homepage/home-button"

import { Button } from "@material-tailwind/react";
 
export default function Home() {
  return (
    <main>
      <h1>Welcome to Tabletop Manager</h1>
      <Hero />
      <HomeButton text="Test Button" linkPath="/tbd" />
      <Button>Button</Button>
    </main>
  )
}
