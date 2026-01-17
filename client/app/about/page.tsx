"use client"
import "../page.scss"
import Degree from "@/components/about/Degree";
import About from "@/components/about/About";

export default function Services() {

    return (
        <main className='main' style={{marginBottom: "60px"}}>
            <div className="main__wrapper">
                <About />
                <Degree />
            </div>
        </main>
    );
}
