"use client"

import "./Header.scss"
import Modal from "../different/Modal"
import Record from "../home/Record"
import Link from 'next/link'
import { useState } from "react"
import { HOST } from "@/options"
import { contacts } from "@/options"

export default function Header() {
    const {rubitime, tel} = contacts
    const [showModal, setShowModal] = useState<boolean>(false)

    const closeModal = () => {
        setShowModal(!showModal)
    }

    const linkResource = (): void => {
        window.open(rubitime.link, "_blank")
    }

    async function downloadVizitka() {
        const result =  await fetch(`${HOST}/download/card.jpg`, {
            method: 'GET',
            headers: {
                'Content-Type': 'image/jpeg',
            },
        })
        const blob = await result.blob()
        const url = window.URL.createObjectURL(new Blob([blob]))
        const link = document.createElement('a');
        link.href = url;
        link.download = 'card_olga_coach.jpg';
        document.body.appendChild(link);
        link.click();
        if(link.parentNode) link.parentNode.removeChild(link);
    }

    return (
        <header className='header'>
            <div className="header__wrapper contain">
                <div className="header__logo">
                    <Link href="/"><div className="logo">
                        <img src="./jpg/logo.jpg" className="logo__img" alt="" />
                    </div></Link>
                </div>
                <div className="header__nav">
                    <ul className='nav'>
                        {/* <li className='nav__item'>
                            <Link href="/services" className='nav__link'>
                                <div className="nav__icon"><img src="./svg/services.svg" width="25" height="25" /></div>
                                <span className='nav__name'>Услуги</span>
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link href="/about" className='nav__link'>
                                <div className="nav__icon"><img src="./svg/about.svg" width="25" height="25" /></div>
                                <span className='nav__name'>Обо мне</span>
                            </Link>
                        </li>
                        <li className='nav__item'>
                            <Link href="/contacts" className='nav__link'>
                                <div className="nav__icon"><img src="./svg/contacts.svg" width="25" height="25" /></div>
                                <span className='nav__name'>Контакты</span>
                            </Link>
                        </li> */}
                        <li className='nav__item'>
                            <div className='nav__link' onClick={() => {downloadVizitka()}}>
                                <div className="nav__icon"><img src="./svg/download.svg" /></div>
                                <span className='nav__name'>Моя визитка</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="header__contacts">
                    <div className="tel">
                        {"Я готова вам помочь"}<span className='insert'>с 10:00 до 20:00</span>
                    </div>
                    <button className='singup' onClick={() => { linkResource() }}>
                        <div className="singup__text">записаться</div>
                        <div className="singup__resource">Rubitime.ru</div>
                    </button>
                </div>
            </div>
            {showModal && <Modal funClose={closeModal}><Record funClose={closeModal} /></Modal>}
        </header>
    )
}



