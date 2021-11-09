import { useEffect, useState } from 'react'
import io from 'socket.io-client'



const URL = 'http://localhost:4554'



function useSocket() {
    const [socket, setSocket] = useState(null)
    useEffect(() => {
        const socketIo = io(URL)

        setSocket(socketIo)

        function cleanup() {
            socketIo.disconnect()
        }
        return cleanup

        // should only run once and not on every re-render,
        // so pass an empty array
    }, [])
    return socket
}



export default useSocket;