import { useState, useEffect } from "react"
import Modal from "@/components/different/Modal"
import "./Education.scss"
import { HOST } from "@/options"

type Where = "left" | "right"
interface DiplomType {
  id: string,
  pic: string
}
interface DiplomTextType {
  id: string,
  text: string
}

export default function Education() {
  const [diplomas, setDiplomas] = useState<DiplomType[]>([])
  const [diplomasText, setDiplomasText] = useState<DiplomTextType[]>([])
  const [activePic, setActivePic] = useState<number>(0)
  const [showPicModal, setShowPicModal] = useState<boolean>(false)

  useEffect(() => {
    uploadDataOne()
    uploadDataTwo()
  }, [])

  async function uploadDataOne() {
    const data = await fetch(`${HOST}/diplomas`)
    const result = await data.json()
    setDiplomas(result)
  }
  
  async function uploadDataTwo() {
    const data = await fetch(`${HOST}/diplomas-text`)
    const result = await data.json()
    setDiplomasText(result)
  }

  const switchingPic = (where: Where) => {
    if (where === "right") {
      if (activePic + 1 > diplomas.length - 1) {
        setActivePic(0)
      } else {
        setActivePic(i => i + 1)
      }
    } else if (where === "left") {
      if (activePic - 1 < 0) {
        setActivePic(diplomas.length)
      }
      setActivePic(i => i - 1)
    }
  }

  const callingModal = () => {
    setShowPicModal(!showPicModal)
    console.log('close')
  }
  
  const flipping = () => {
    switchingPic("right")
  }

  return (
    <div className="education">
      <div className="education__content">
        <div className="education__diplomas">
          <div className="slider" onClick={() => { (!showPicModal) ? callingModal() : false}}>
            <div className="pic" >
              {showPicModal && <Modal funClose={callingModal} fun={flipping}><img src={`${HOST}/pic-diplom/${diplomas[activePic].pic}`} className="pic__show" alt="diplomas" /> </Modal>}
              {diplomas.length > 0 && <><h4 className="pic__tittle"></h4>
                <img src={`${HOST}/pic-diplom/${diplomas[activePic].pic}`} className="pic__jpg" alt="diplomas" /></>}
            </div>
            <div className="slider__control">
              <div className="slider__left slider__scroll-slider" onClick={(e) => { e.stopPropagation(); switchingPic("left") }}>
                <img width="25" height="25" src="./svg/left-arrow.svg" alt="" />
              </div>
              <div className="slider__right slider__scroll-slider" onClick={(e) => { e.stopPropagation(); switchingPic("right") }}>
                <img width="25" height="25" src="./svg/right-arrow.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="education__text">
          <h4 className="education__tittle">Про образование</h4>
          <div className="education__other">
            <ul className="other-list">
              {diplomasText.map(item => (
                <li className="other-list__item" key={item.id}>{item.text}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}