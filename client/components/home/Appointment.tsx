import Poput from "@/components/different/Popup";
import classNames from "classnames";
import { useState, useEffect, useRef } from "react";
import './Appointment.scss'
import { HOST } from "@/options";
import Link from "next/link";

interface FormType {
    name: string,
    mail: string,
    text: string,
}

interface PoputOpt {
    color: string,
    text: string,
    id: string,
    opas: string
}

export default function Appointment() {
    const colorPoput = { err: "rgb(255 78 78)", good: "rgb(42 235 90)" }
    const [popupShow, setPopupShow] = useState<PoputOpt[]>([])
    const [butDis, setButDis] = useState<boolean>(true)
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const inputNameRef = useRef<HTMLInputElement>(null)
    const inputMailRef = useRef<HTMLInputElement>(null)

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

    const send = () => {
        const nameUser = inputNameRef.current?.value
        const mailUser = inputMailRef.current?.value
        const textUser = textareaRef.current?.value
        
        if (nameUser === '') {
            popup("Вы не заполнили поле Имя", colorPoput.err)
        } else if (mailUser === '') {
            popup("Вы не заполнили поле Почта или номер телефрна", colorPoput.err)
        } else if (textUser === '') {
            popup("Поле с вопросом пусто", colorPoput.err)
        } else if (nameUser && mailUser && textUser) {
            postForm({ name: nameUser, mail: mailUser, text: textUser })
        }
    }

    async function postForm(body: FormType){
        const data = await fetch(`${HOST}/send`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        const result = await data.json()
        if (result.resultSend === "error") {
            popup("Ошибка сервера письмо не отправленно", colorPoput.err)
        } else if (result.resultSend === "ok") {
            if (inputNameRef.current && inputMailRef.current && textareaRef.current) {
                inputNameRef.current.value = ''
                inputMailRef.current.value = ''
                textareaRef.current.value = ''
            }
            popup("Письмо отправленно", colorPoput.good)
        }
    }


    return (
        <div className="appointment">
            <Poput popupArr={popupShow} />
            <div className="appointment__content">
                <h4 className="appointment__title">Остались вопросы?</h4>
                <div className="appointment__text">Просто оставте мне свой номер телефона или адрес электронной почты я обязательно вам отвечу</div>
                <div className="appointment__form">
                    <label htmlFor="form-name" className="appointment__label">Как к вам обращаться</label>
                    <input type="text" className="appointment__input" id="form-name" ref={inputNameRef} />
                    <label htmlFor="form-mail" className="appointment__label">Адрес электронной почты или номер телефона</label>
                    <input type="text" className="appointment__input" id="form-mail" ref={inputMailRef} />
                    <textarea className="appointment__textarea" id="form-textarea" placeholder="Что вас интересует?" ref={textareaRef} />
                    <div className="appointment__check"><input type="checkbox" checked={!butDis} onChange={() => setButDis(!butDis)} />Я согласен на обработку <Link href="">персональных данных</Link>  </div>
                    <div className="appointment__politic"><Link target="_blank" href="/policy">Политика конфиденциальности</Link></div>
                    <button className="appointment__button button-placement" disabled={butDis} onClick={() => { send() }}>отправить</button>
                </div>
            </div>
        </div>
    )
}