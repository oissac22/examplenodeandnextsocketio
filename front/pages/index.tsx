import { useEffect, useState } from "react"
import useSocket from "../components/socket"
// import socket, { socketStart } from "../components/socket"


export default function Home() {

  const socket = useSocket()

  const [listMsg, setListMsg] = useState<string[]>([]);

  function socketMessage(msg: string) {
    socket.emit('client message', msg)
  }

  useEffect(() => {
    if (socket)
      socket.on('typed message', msg => {
        setListMsg([...listMsg, msg])
      })
  })

  return (
    <div>
      <div>
        <button onClick={e => socketMessage('Qual seu nome')}>Qual seu nome?</button>
        <button onClick={e => socketMessage('Qual sua idade')}>Qual sua idade?</button>
        <button onClick={e => socketMessage('De onde vc e')}>De onde você é?</button>
      </div>
      <div><b>Mensagens:</b></div>
      {
        listMsg.map((msg, index) =>
          <div key={index}>{msg}</div>
        )
      }
    </div>
  )
}
