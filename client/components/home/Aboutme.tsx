import "./Aboutme.scss"
import { useState, useEffect } from "react"
import Modal from "@/components/different/Modal"
import { HOST } from "@/options"
import parse from 'html-react-parser';

export default function Aboutme() {
    const [photo, setPhoto] = useState<boolean>(false)
    const [abouttext, setAbouttext] = useState<string>('')

    async function uploadingData() {
        const data = await fetch(`${HOST}/about`)
        const result = await data.json()
        if (result) {
           setAbouttext(result.text)
        }
    }

    useEffect(() => {
        uploadingData()
    },[])

    const showPhoto = () => {
        setPhoto(!photo)
    }

    return (
        <div className="aboutme">
            <div className="aboutme__content">
                <div className="aboutme__text">
                    <h3 className='aboutme__title'>Здравствуйте! Меня зовут Ольга, я практикующий психолог. </h3>
                    {/* <div className='aboutme__descrip'>Я про самоценность, самооценку, поиск себя. <hr /> Опыт консультирования с 2021 года. <hr /> Использую краткосрочный метод (от 2 до 15 сессий) ОРКТ, КПТ (ориентированная на решение краткосрочная терапия) <hr /> 2 диплома по переподготовке по психологическому консультированию и коучингу. <hr /> Закончила 2 (второй) курс магистратуры психология личности и психодиагностика.</div> */}
                    <div className='aboutme__descrip'>{parse(abouttext)}</div>
                </div>
                <div className="aboutme__photo">
                    <div className="photo" onClick={() => { showPhoto() }}>
                        <img className="photo__img" src={`${HOST}/photo/photo.jpg`} />
                    </div>
                </div>
            </div>
            {photo && <Modal funClose={showPhoto}><img className="photo-show" src={`${HOST}/photo/photo.jpg`}></img></Modal>}
        </div>
    )
}