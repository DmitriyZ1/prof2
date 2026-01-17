"use client"

import "./page.scss"
import Aboutme from "@/components/home/Aboutme";
import Requests from "@/components/home/Requests";
import Video from "@/components/home/Video";
import Education from "@/components/home/Education";
import Reviews from "@/components/home/Reviews";
import Appointment from "@/components/home/Appointment";
import Clarify from "@/components/home/Clarify";
import Citation from "@/components/home/Citation";
import Exceptions from "@/components/home/Exceptions";

export default function Home() {
  
  return (
    <main className='main'>
      <div className="main__wrapper">
        <Aboutme />
        <Citation />
        <Requests />
        <Clarify />
        <Exceptions />
        <Video />
        <Education />
        <Reviews />
        <Appointment />
      </div>
    </main>
  );
}
