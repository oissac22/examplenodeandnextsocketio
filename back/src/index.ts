import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'

const app = express()
const server = http.createServer(app)
const io = new Server(server, { cors: { origin: '*' } })

app.use(cors({
    origin: (origin, callback) => {
        console.log('origin :>> ', origin);
        callback(null, true)
    }
}))


io.on('connection', socket => {
    console.log('a new user connected')
    socket.emit('typed message', 'Wellcome at the my socket')
    socket.on('client message', msg => {
        console.log('msg client :>> ', msg);
        switch (msg) {
            case 'Qual seu nome': return socket.emit('typed message', 'Meu nome é Cássio S C');
            case 'Qual sua idade': return socket.emit('typed message', 'Tenho 37 anos de idade');
            case 'De onde vc e': return socket.emit('typed message', 'Recife, Pernambuco');
            default: return socket.emit('typed message', 'Eu só sei responder 3 perguntas de forma precisa');
        }
    })
})



app.get('/', (req, res) => res.send('Olá mundo'))
app.get('/test', (req, res) => res.json({ ok: true, msg: 'test ok' }))



server.listen(4554, () => console.log('RUN IN PORT', 4554))