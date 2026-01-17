import classNames from "classnames/dedupe"
import "./Popup.scss"

interface PoputOpt {
    color: string,
    text: string,
    id: string,
    opas: string
  }

export default function Poput({popupArr} : {popupArr:PoputOpt[]}) {
  
    return (
        <>
            {popupArr.length > 0 && <div className="popup-contain">
                {popupArr.map(elem => <div key={elem.id} className={classNames("popup")} style={{ background: elem.color, opacity: elem.opas }}>
                    <span className="popup__text">{elem.text}</span>
                </div>)}
            </div>}
        </>
    )
}