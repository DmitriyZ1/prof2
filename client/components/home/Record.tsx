import "./Record.scss"
import { useState, useEffect, useRef } from 'react'
import Poput from "../different/Popup"

interface PoputOpt {
    color: string,
    text: string,
    id: string,
    opas: string
}

export default function Record({ funClose }: { funClose: () => void }) {

    const inputNameRef = useRef<HTMLInputElement>(null)
    const inputMailRef = useRef<HTMLInputElement>(null)
    const [popupShow, setPopupShow] = useState<PoputOpt[]>([])
    const [showWindow, setShowWinow] = useState<boolean>(true)

    const popup = (text: string, color: string) => {
        const id = "id" + Math.random().toString(16).slice(2)
        setPopupShow(arr => [...arr, { text, color, id, opas: '0' }])
        const t1 = setTimeout(() => {
            setPopupShow(arr => arr.map(elem => {
                if (elem.id === id) {
                    return { text, color, id, opas: '1' }
                } else {
                    return elem
                }
            }))
            const t2 = setTimeout(() => {
                setPopupShow(arr => arr.map(elem => {
                    if (elem.id === id) {
                        return { text, color, id, opas: '0' }
                    } else {
                        return elem
                    }
                }))
                const t3 = setTimeout(() => {
                    setPopupShow(arr => arr.filter(item => item.id !== id))
                    clearTimeout(t1)
                    clearTimeout(t2)
                    clearTimeout(t3)
                }, 500)
            }, 3000)
        }, 100)
    }

    const sendForm = (): void => {
        const nameUser = inputNameRef.current?.value
        const mailUser = inputMailRef.current?.value
        const colorPoput = { err: "rgb(255 78 78)", good: "rgb(42 235 90)" }

        if (nameUser === '') {
            popup("Вы не заполнили поле Имя", colorPoput.err)
        } else if (mailUser === '') {
            popup("Вы не заполнили поле Почта или номер телефрна", colorPoput.err)
        } else {
            console.log({ name: nameUser, mail: mailUser })
            if (inputNameRef.current && inputMailRef.current) {
                inputNameRef.current.value = ''
                inputMailRef.current.value = ''
            }
            popup("Отправленно", colorPoput.good)
            setShowWinow(false)
            const time = setTimeout(() => { funClose() }, 2000)
        }
    }

    return (
        <>
            <Poput popupArr={popupShow} />
            <div className="record" onClick={(e) => { e.stopPropagation() }} style={showWindow ? { display: "block" } : { display: "none" }}>
                <div className="record__content" >
                    <div className="record__explanation"> Мнения экспертов могут не совпадать с позицией редакции. «РБК-Крипто» не дает инвестиционных советов, материал опубликован исключительно в ознакомительных целях. Криптовалюта — это волатильный актив, который может привести к финансовым убыткам.</div>
                    <div className="form-record">
                        <label htmlFor="rec-name" className="form-record__label">Ваше имя</label>
                        <input type="text" className="form-record__input" id="rec-name" ref={inputNameRef} />
                        <label htmlFor="rec-mail" className="form-record__label">Адрес электронной почты или номер телефона</label>
                        <input type="text" className="form-record__input" id="rec-mail" ref={inputMailRef} />
                        <button className="form-record__button button-how" onClick={() => { sendForm() }}>Отправить</button>
                    </div>
                    <div className="record__exit" onClick={() => { funClose() }}> <img src="./svg/cross.svg" alt="" width={25} height={25} /> </div>
                </div>
            </div>
        </>
    )
}