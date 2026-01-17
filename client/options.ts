interface ContaktsType {
    title1?: string,
    title2?: string,
    link:string
}

interface LinksType{
    tel: ContaktsType,
    vk: ContaktsType,
    telega: ContaktsType,
    whatsapp: ContaktsType,
    mail: ContaktsType,
    rubitime: ContaktsType
}


const HOST: string = "http://localhost:7676"
//const HOST: string = "http://87.236.23.166:4210"
//const HOST: string = ""


const contacts: LinksType = {
    tel : {
        title1: '+7(963)632-35-23',
        title2: '+7 963 632-35-23',
        link: '+79636323523',
    },
    vk : {
        link: 'https://vk.com/coach_olga_zhavoronkowa'
    },
    telega : {
        link: 'https://t.me/atmocfera_psy'
    },
    whatsapp : {
        link: 'https://wa.me/+79636323523'
    }, 
    mail: {
        title1: 'atmocfera@mail.ru',
        link: 'mailto:atmocfera@mail.ru'
    },
    rubitime: {
        link: 'https://atmocfera.rubitime.ru/'
    }
}

export {HOST, contacts}