"use client"
import Clarify from "@/components/services/Clarify";
import RequestsCl from "@/components/services/RequestsCl";
import "../page.scss"

export default function Services() {

  return (
    <main className='main' style={{marginBottom: "40px"}}>
      <div className="main__wrapper">
        <Clarify />
        <RequestsCl />
      </div>
    </main>
  );
}
