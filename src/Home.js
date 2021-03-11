import React, { useEffect, useState } from 'react'
import socketIOClient from 'socket.io-client'

const API = "http://localhost:3020"



const Home = () => {

    const stateInitial = { current: [], before: [] }
    const [state, setstate] = useState(stateInitial)

    useEffect(() => {
        const conSocket = socketIOClient(API)

        conSocket.on("fileChange", data => {
            setstate(data)
        })

    }, [])

    return (
        <div className="container" >
            <h1>Actual</h1>
            <table width="50%">
                {
                    state.current.map((fila) => {
                        return (
                            <tr>
                                {
                                    fila.map((column) => {
                                        return <td>{column}</td>
                                    })
                                }
                            </tr>

                        )
                    })

                }
            </table>

            <h1>Anterior</h1>
            <table width="50%">
                {
                    state.before.map((fila,index) => {
                        return (
                            <tr key={index}>
                                {
                                    fila.map((column,index) => {
                                        return <td key={index} >{column}</td>
                                    })
                                }
                            </tr>

                        )
                    })
                }
            </table>
        </div>
    )
}


export default Home