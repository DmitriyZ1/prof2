import { useState, useEffect } from "react"
import { HOST } from "@/options"
import Modal from "@/components/different/Modal"
import Descript from "../different/Descript";

import "./Requests.scss"

interface CardsDec {
    id: string,
    title: string,
    pic: string,
    descripLite: string
    descrip: string[]
}

export default function Requests() {

    const [cards, setCards] = useState<CardsDec[]>([])
    const [modal, setModal] = useState<boolean>(false)
    const [list, setList] = useState<string[]>([])

    useEffect(() => {
        uploadData()
    }, [])

    useEffect(() => {
        if (!modal) {
            setList([])
        }
    }, [modal])

    async function uploadData() {
        const data = await fetch(`${HOST}/decide`)
        const result = await data.json()
        setCards(result)
    }

    const getRandomInt =(min:number, max:number):number => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min)
    }

    const ListRandom = (n: number, listArr: string[]) => {
        const exception:number[] = []
        const newArr: string[] = []
        while (newArr.length < n) {
            const n = getRandomInt(0, listArr.length)
            if(!exception.includes(n)){
                exception.push(n)
                newArr.push(listArr[n])
            }
        }
        return newArr
    }

    const showModal = () => {
        setModal(!modal)
    }

    return (
        <div className="requests">
            <div className="requests__content">
                <h2 className="requests__title">Люди часто приходят ко мне с такими вопросами:</h2>
                <ul className="requests__list">
                    {cards.map(item => (
                        <li className="requests__item" key={item.id}>
                            <div className="card">
                                <div className="card__pic">
                                    <img src={`${HOST}/pic-req/${item.pic}`} alt="pic" className="card__img" />
                                </div>
                                <div className="card__text">
                                    <h3 className="card__tittle">{item.title}
                                        <span className="card__detailed" onClick={() => { showModal(), setList(ListRandom(7, item.descrip)) }}> Подробнее...</span>
                                    </h3>
                                    {/* <div className="card__other">{item.descripLite}</div> */}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {modal && <Modal funClose={showModal}> <Descript list={list} /></Modal>}
        </div>
    )
}
