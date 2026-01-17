import { useState, useEffect} from "react"
import "./RequestsCl.scss"
import { HOST } from "@/options"

interface CardsType {
    id: string,
    title: string,
    descrip: string,
    pic: string
}

export default function RequestsCl() {

    const [cards, setCards] = useState<CardsType[]>([])

    useEffect(() => {
        uploadData()
    }, [])

    async function uploadData(){
        const data = await fetch(`${HOST}/decide`)
        const result = await data.json()
        setCards(result)
    }
    
    return (
        <div className="clarify-requests">
            <div className="clarify-requests__content">
                <h3 className="clarify-requests__title">Запросы</h3>
                <ul className="clarify-requests__cards">
                    {cards.map((item) => (
                        <li className="clarify-requests__item" key={item.id} >
                            <h4 className="clarify-requests__item-title">{item.title}</h4>
                            <img src={`${HOST}/pic-req/${item.pic}`} className="clarify-requests__pic" alt="" />
                            <p className="clarify-requests__text">{item.descrip}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}