import { useState, useEffect, useRef } from "react";
import Modal from "@/components/different/Modal";
import { HOST } from "@/options";
import './Degree.scss'

interface DiplomasType {
    id:string,
    pic: string
}


export default function Degree() {

    const [diplomas, setDiplomas] = useState<DiplomasType[]>([])
    const [showPicModal, setShowPicModal] = useState<boolean>(false)
    const [activePic, setActivePic] = useState<string>('')

    useEffect(() => {
       uploadData()
    }, [])

    async function uploadData() {
        const data = await fetch(`${HOST}/diplomas`)
        const result = await data.json()
        setDiplomas(result)
      }

    const picZoom = () => {
        if(showPicModal){
            setShowPicModal(false)
            setActivePic('')
        } else {
            setShowPicModal(true)
        }
    }

    return (
        <div className="degree">
            {showPicModal && <Modal funClose={picZoom}><img src={`${HOST}/pic-diplom/${activePic}`} className="pic-show" alt="diplomas" /> </Modal>}
            <div className="degree__content">
                <h3 className="degree__title">Мои дипломы</h3>
                <ul className="degree__cards">
                    {diplomas.map((item, index) => (
                        <li className="degree__item" key={item.id}>
                            <img src={`${HOST}/pic-diplom/${item.pic}`} alt="" className="degree__pic" onClick={() => { setActivePic(item.pic); picZoom() }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}