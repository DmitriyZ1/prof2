import "./Exceptions.scss"

export default function Exceptions() {
  return (
    <div className="exceptions">
      <div className="exceptions-article">
        <h3 className="exceptions-article__title"> С кем я не работаю</h3>
        <ol className="exceptions-article__list">
          <li className="exceptions-article__item">Дети до 18 лет. Работаю с их родителями.</li>
          <li className="exceptions-article__item">Если есть психиатрические диагнозы.</li>
          <li className="exceptions-article__item">Алкогольные, наркотические и другие зависимости.</li>
          <li className="exceptions-article__item">С людьми, проявляющими физическую агрессию.</li>
          <li className="exceptions-article__item">РПП и суицидальные случаи в крайних степенях. </li>
          <li className="exceptions-article__item">С людьми, уверенными, что психолог сделает всё за них.</li>
          <li className="exceptions-article__item">Не работаю с парами.</li>
        </ol>
      </div>
    </div>
  )
}