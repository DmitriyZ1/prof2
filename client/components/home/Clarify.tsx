import "./Clarify.scss"
import { HOST } from "@/options"
import { useEffect, useState } from "react"


export default function Clarify() {
  // const [text, setText] = useState<string>('')
  const [list, setList] = useState<string[]>([])

  async function uploadData() {
    const data1 = await fetch(`${HOST}/text-clarify`)
    const result1 = await data1.json()
    const data2 = await fetch(`${HOST}/list-clarify`)
    const result2 = await data2.json()
    if (result1 && result2) {
      // setText(result1.text)
      setList(result2.list)
    }
  }

  useEffect(() => {
    uploadData()
  }, [])


  return (
    <div className="clarify">
      <div className="clarify-article">

        <h3 className="clarify-article__title">Что вы получите в результате нашей работы?</h3>
        <p className="clarify-article__paragraf">Основная цель моих консультаций — не просто временное облегчение, а формирование у вас устойчивых навыков самопомощи. В процессе терапии вы научитесь:</p>
        <div className="clarify-article__wrapper">
          <ul className="clarify-article__list-p" >
            <li className="clarify-article__item-p">Понимать истинные причины своих реакций и эмоций;</li>
            <li className="clarify-article__item-p">Выстраивать личные границы и говорить «нет» без чувства вины;</li>
            <li className="clarify-article__item-p">Бережно относиться к себе даже в периоды неудач;</li>
            <li className="clarify-article__item-p">Находить силы для принятия решений в сложных ситуациях.</li>
          </ul>
          <img className="clarify-article__pic-two" src="./jpg/pic2.jpg" alt="" />
        </div>

        <h3 className="clarify-article__title">Методы, которые я использую в работе:</h3>
        <p className="clarify-article__paragraf">Мой подход в работе строится на индивидуальности. Я не использую шаблонные советы, а подбираю методы под ваш конкретный запрос. Использую такие методы как когнитивно-поведенческая терапия (КПТ), ориентированная на решение краткосрочная терапия (ОРКТ), транзактный анализ, коучинг, метафорические ассоциативные карты (МАК).</p>

        <h3 className="clarify-article__title">Формат взаимодействия:</h3>
        <p className="clarify-article__paragraf">Для вашего удобства я предлагаю несколько форматов взаимодействия. Индивидуальная сессия длится 50 минут. Возможен формат краткосрочного консультирования для решения точечной проблемы или долгосрочная терапия для глубокой проработки личности. </p>

        <h3 className="clarify-article__title">Стоимость услуг:</h3>
        <div className="clarify-article__wrapper">
          <img className="clarify-article__pic-two" src="./png/int.png" alt="" />
          <ul className="clarify-article__list">
            {list.map((item, index) => (<li className="clarify-article__item" key={index}>{item}</li>))}
          </ul>
        </div>

        <h3 className="clarify-article__title">Специальное предложение:</h3>
        <p className="clarify-article__paragraf">Первый шаг всегда самый трудный, поэтому я предлагаю ознакомительную 20-минутную консультацию бесплатно. Это позволит нам познакомиться, обсудить ваш запрос и понять, подходим ли мы друг другу для дальнейшей работы.</p>

        <h3 className="clarify-article__title">Как подготовиться к первой встрече?</h3>
        <p className="clarify-article__paragraf">Специальная подготовка не требуется. Вам не нужно формулировать проблему сложными терминами — достаточно вашего желания что-то изменить. Мы начнем с того, что беспокоит вас именно сейчас, и постепенно распутаем клубок переживаний.</p>

        <h3 className="clarify-article__title">Условия записи:</h3>
        <p className="clarify-article__paragraf">Работаю ОНЛАЙН по предоплате в формате видео-звонка (присылаю ссылку на яндекс-телемост за 5 минут до встречи). Время для записи подбираем индивидуально, чтобы вам было максимально комфортно вписать консультацию в свой график.</p>

        <h3 className="clarify-article__title">Гарантии и этика:</h3>
        <p className="clarify-article__paragraf">В своей практике я строго придерживаюсь Этического кодекса психолога. Это означает:</p>
        <div className="clarify-article__wrapper">
          <img className="clarify-article__pic-two" src="./png/etic.png" alt="" />
          <ol className="clarify-article__list-p" >
            <li className="clarify-article__item-p clarify-article__marg"><span className="clarify-article__span"> Анонимность:</span> Всё сказанное в кабинете остается только между нами.</li>
            <li className="clarify-article__item-p clarify-article__marg"><span className="clarify-article__span">Безопасность:</span> Я не даю непрошенных советов и не навязываю свое мнение.</li>
            <li className="clarify-article__item-p clarify-article__marg"><span className="clarify-article__span">Честность:</span> Если я пойму, что ваш запрос находится вне моей компетенции, я обязательно сообщу об этом и порекомендую проверенного коллегу.</li>
          </ol>
          
        </div>
        
        <h3 className="clarify-article__title">Чего точно не будет на консультациях:</h3>
        <ul className="clarify-article__list-p">
          <li className="clarify-article__item-p">Осуждения или критики ваших поступков и образа жизни;</li>
          <li className="clarify-article__item-p">Оценочных суждений «правильно» или «неправильно»;</li>
          <li className="clarify-article__item-p">Рассказов о моем личном опыте, если это не помогает в решении вашего запроса;</li>
          <li className="clarify-article__item-p">Принуждения к обсуждению тем, к которым вы еще не готовы.</li>
        </ul>

        <h3 className="clarify-article__title">Результаты, которые отмечают мои клиенты после курса сессий:</h3>
        <ul className="clarify-article__list-p" >
          <li className="clarify-article__item-p"> Появление внутренней опоры и уверенности в своих силах;</li>
          <li className="clarify-article__item-p">Снижение уровня тревоги в повседневной жизни;;</li>
          <li className="clarify-article__item-p">Улучшение качества общения с близкими и коллегами;</li>
          <li className="clarify-article__item-p">Умение слышать свои истинные потребности и следовать им.</li>
        </ul>
        <p className="clarify-article__paragraf clarify-article__paragraf-b"> Не откладывайте свою жизнь на «потом». Напишите мне прямо сейчас: «Хочу на консультацию», и мы подберем удобное время. Ваше психологическое благополучие — это лучшая инвестиция в себя!</p>


      </div>
    </div>
  )
}