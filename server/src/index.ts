import cors from 'cors'
import fs from 'fs'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { v4 as uuidv4 } from 'uuid'
import stream from 'stream';
import express, { Request, Response } from 'express'
import jsonfile from 'jsonfile'
import sendmail from './sendmail.js'
import formhtml from './form.js'
import { text } from 'stream/consumers'

type ResultType = "ok" | 'error'

interface SendMailResultType {
    result: ResultType,
    data: object
}

const PORT = 7676;
//const PORT = 4210;

const app = express()

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(cors())
app.use(express.json());


app.get('/photo', function (req, res) { })

requestPic('/pic-diplom/', path.dirname(__dirname) + '/part/diplomas/pics/')
requestPic('/photo/', path.dirname(__dirname) + '/part/portret/')
requestPic('/pic-rev/', path.dirname(__dirname) + '/part/reviews/')
requestPic('/pic-req/', path.dirname(__dirname) + '/part/decide/pics/')
requestDir('/diplomas/', path.dirname(__dirname) + '/part/diplomas/pics/')
requestDir('/reviews', path.dirname(__dirname) + '/part/reviews')
requestJSON('/decide', path.dirname(__dirname) + '/part/decide/decide.json')
requestJSON('/diplomas-text', path.dirname(__dirname) + '/part/diplomas/diplomas.json')
requestJSON('/citation', path.dirname(__dirname) + '/part/citation/citation.json')
requestPic('/download/', path.dirname(__dirname) + '/part/vizitka/')

requestText('/text-clarify', path.dirname(__dirname) + '/part/clarify/text.txt')
requestJSON('/list-clarify', path.dirname(__dirname) + '/part/clarify/clarify.json')
requestText('/about', path.dirname(__dirname) + '/part/about/text.txt')



function requestJSON(url: string, pathDir: string) {
    app.get(url, function (req, res) {
        jsonfile.readFile(pathDir, function (err, obj) {
            if (err) {
                console.error(err)
                res
                    .status(500)
            } else {
                res
                    .status(200)
                    .json(obj)
            }
        })
    })
}

function requestDir(url: string, pathDir: string) {
    app.get(url, function (req, res) {
        fs.readdir(pathDir, (err, files) => {
            if (err) {
                console.error('Ошибка при чтении каталога:', err);
                res
                    .status(500)
            } else {
                const newArray = files.map(elem => {
                    const id = uuidv4()
                    return { pic: elem, id }
                })
                res
                    .status(200)
                    .json(newArray)
            }
        })
    })
}

function requestPic(url: string, pathPic: string) {
    app.get(`${url}:img`, (req: Request, res: Response) => {
        const img = req.params.img;
        const r = fs.createReadStream(pathPic + img)
        const ps = new stream.PassThrough()
        stream.pipeline(
            r,
            ps,
            (err) => {
                if (err) {
                    return res
                        .sendStatus(400);
                }
            })
        ps.pipe(res)
    })
}

//проверить
function requestText(url: string, pathPic: string) {
    app.get(url, function (req, res) {
        fs.readFile(pathPic, 'utf8', (err, data) => {
            if (err) {
                console.error('Ошибка при чтении файла', err);
                res
                    .status(500)
            } else {
                const text = {
                    text: data
                }
                res
                    .status(200)
                    .json(text)
            }
        });
    })
}

app.post('/send', function (req, res) {
    const body = req.body
    if (body) {
        const messege = {
            from: '"Наш сайт" <zavoronk@mail.ru>',
            to: 'zavoronk@mail.ru',
            subject: 'Новое сообщение!',
            html: formhtml(body),
        }
        sendmail(messege, (upshot: SendMailResultType) => {
            res.send({ resultSend: upshot.result })
        })
    } else {
        res.send({ resultSend: "error" })
    }
})


app.listen(PORT)