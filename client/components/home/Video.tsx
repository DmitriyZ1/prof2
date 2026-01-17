import "./Video.scss"

export default function Video() {
    
    return (
        <div className="video">
            <div className="video__content">
                <div className="video__unavailable">
                    <span className="unavailable-text">Извинете</span> 
                    <img src="./png/sad-icon.png" alt="sad" className="unavailable-pic" />
                    <span className="unavailable-text">видео пока не доступно </span> 
                </div>
                {/* <iframe
                    width="720"
                    height="405"
                    src="https://rutube.ru/play/embed/965a80366b53b7fc1f10855cd3b5f0f9"
                    allow="clipboard-write;"
                    allowFullScreen
                ></iframe> */}
            </div>
        </div>
    )
}