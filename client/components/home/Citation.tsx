import "./Citation.scss"
import { useState, useEffect } from "react";
import { HOST } from "@/options";

interface TextType {
    text: string,
    autor: string
}

export default function Citation() {
    const [text, setText] = useState<TextType>();

    async function uploadingData() {
        const data = await fetch(`${HOST}/citation`)
        const result = await data.json()
        if (result) {
            setText(result)
        }
    }

    useEffect(() => {
        uploadingData()
    }, [])


    return (
        <>
            {text && (<div className="citation citation-put">
                <div className="citation__content">
                    <div className="citation__text">
                     {text.text} - <span>{text.autor}</span>
                    </div>
                </div>
            </div>)}
        </>

    )
}