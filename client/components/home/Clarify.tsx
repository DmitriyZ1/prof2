import "./Clarify.scss"
import { HOST } from "@/options"
import { useEffect, useState } from "react"


export default function Clarify() {
  const [text, setText] = useState<string>('')
  const [list, setList] = useState<string[]>([])

  async function uploadData() {
    const data1 = await fetch(`${HOST}/text-clarify`)
    const result1 = await data1.json()
    const data2 = await fetch(`${HOST}/list-clarify`)
    const result2 = await data2.json()
    if (result1 && result2) {
      setText(result1.text)
      setList(result2.list)
    }
  }

  useEffect(() => {
    uploadData()
  }, [])


  return (
    <div className="clarify">
      <div className="clarify-article">
        <h3 className="clarify-article__title"> Как я работаю</h3>
        {/* <img className="clarify-article__pic-one" src="./jpg/pic1.jpg" alt="" /> */}
        {/* <p className="clarify-article__paragraf">Я работаю в мультимодальном подходе: использую КПТ, транзактный анализ, коучинг, МАК, ОРКТ и другие. За одну консультацию разберем ваш вопрос, используя технику, которая подходит именно для вас, в результате у вас будет или ответ на вопрос или понимание как с ним работать дальше. Первая сессия-знакомство: определим точку А (где вы сейчас) и точку Б (чего вы хотите достичь), что мешает, наметим первые шаги (план) действий.</p> */}
        <p className="clarify-article__paragraf">{text}</p>
        <div className="clarify-article__wrapper">
          <img className="clarify-article__pic-two" src="./jpg/pic2.jpg" alt="" />
          <ul className="clarify-article__list">
            {list.map((item, index) => (<li className="clarify-article__item" key={index}>{item}</li>))}
            {/* <li className="clarify-article__item">Стоимость сессии 2500р. (оплата по номеру телефона – сбер, втб, т-банк - присылаю чек)</li>
            <li className="clarify-article__item">Длительность 50 мин. 1 раз в неделю/2недели.</li>
            <li className="clarify-article__item">Консультации провожу онлайн, в любом удобном для вас мессенджере в формате видео-звонка.</li> */}
          </ul>
        </div>
      </div>
    </div>
  )
}