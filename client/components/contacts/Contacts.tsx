import "./Contacts.scss"


export default function Contacts() {

    return (
        <div className="contacts">
            <div className="contacts__content">
                <div className="contacts__wrapper">
                    <div className="contacts__left">
                        <h3 className="contacts__title">Контакты</h3>
                        <div className="contacts__list">
                            <div className="contacts__item">
                                <div className="contacts__item-title">
                                    <img className="contacts__svg" src="./svg/phone-svgrepo-com.svg" width={42} height={42} alt="phone" />
                                    <div className="contacts__descript">Мобильный телефон</div>
                                </div>
                                <div className="contacts__basic">
                                    <div className="phone-base">+7 (967) 232-54-33</div>
                                </div>
                            </div>
                            <div className="contacts__item">
                                <div className="contacts__item-title">
                                    <img className="contacts__svg" src="./svg/mail-svgrepo-com.svg" width={42} height={42} alt="mail" />
                                    <div className="contacts__descript">Электронная почта</div>
                                </div>
                                <div className="contacts__basic">
                                    <div className="mail-base"><a className="mail-base__link" href="zavoronk@mail.ru"> cdzsdsadsa@mail.ru</a></div>
                                </div>
                            </div>
                            <div className="contacts__item">
                                <div className="icon-base">
                                    <div className="icon-base__item">
                                        <a className="icon-base__link" href="/"><img className="base-svg" src="./svg/whatsapp-svgrepo-com.svg" width={42} height={42} alt="mail" /></a>
                                    </div>
                                    <div className="icon-base__item">
                                        <a href="/" className="icon-base__link"><img className="base-svg" src="./svg/telegram-svgrepo-com.svg" width={42} height={42} alt="mail" /></a>
                                    </div>
                                    <div className="icon-base__item">
                                        <a href="/" className="icon-base__link"><img className="base-svg" src="./svg/vk-svgrepo-com.svg" width={42} height={42} alt="mail" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="contacts__right">
                        <img src="./jpg/kat.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}