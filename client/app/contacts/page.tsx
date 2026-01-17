"use client"
import "../page.scss"

import Appointment from "@/components/home/Appointment";
import Contacts from "@/components/contacts/Contacts";


export default function Contact() {

  return (
    <main className='main' style={{marginBottom: "90px"}}>
      <div className="main__wrapper">
        <Contacts />
        <Appointment />
      </div>
    </main>
  );
}
