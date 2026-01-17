import "./Clarify.scss"

export default function clarify(){
    return (
        <div className="clarify">
          <div className="clarify-article">
            <h3 className="clarify-article__title"> Как я работаю</h3>
            <img className="clarify-article__pic-one" src="./jpg/pic1.jpg" alt="" />
            <p className="clarify-article__paragraf">Я работаю в мультимодальном подходе: использую транзактный анализ, коучинг, МАК,ОРКТ и другие. За одну консультацию разберем ваш вопрос, используя технику, котораяподходит именно для вас, в результате у вас будет или ответ на вопрос или понимание как с ним работать дальше. Первая сессия-знакомство: определим точку А (где вы сейчас) иточку Б (чего вы хотите достичь), что мешает, наметим первые шаги (план) действий.</p>
            <img className="clarify-article__pic-two" src="./jpg/pic2.jpg" alt="" />
            <ul className="clarify-article__list">
              <li className="clarify-article__item">Стоимость сессии 2500р. (оплата по номеру телефона – сбер, втб, т-банк - присылаю чек)</li>
              <li className="clarify-article__item">Длительность 50 мин. 1 раз в неделю/2недели.</li>
              <li className="clarify-article__item">Консультации провожу онлайн, в любом удобном для вас мессенджере в формате видео-звонка.</li>
            </ul>
          </div>
        </div>
    )
}