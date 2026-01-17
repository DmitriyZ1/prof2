interface FormType{
    name: string,
    mail: string,
    text: string,
}

export default function formhtml(obj:FormType){
    return (
        `<h2>Письмо с моего сайта</h2> 
        <p><strong>Имя пользователя: </strong> ${obj.name} </p>
        <p><strong>Телефон(почта): </strong> ${obj.mail} <hr/></p>
        <p><strong>Сообщение : </strong> ${obj.text} </p>` 
    )
}