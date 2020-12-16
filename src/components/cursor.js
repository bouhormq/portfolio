import React, { useEffect, useState} from "react"
import { Cursor } from "../styles/cursor"

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({
        x: 530,
        y: 100
    })

    const onMouseMove = event => {
        const {clientX:x, clientY: y} = event
        setMousePosition({x,y})
    }

    useEffect(() => {
            document.addEventListener("mousemove", onMouseMove)
            return () => {
                document.removeEventListener("mousemove",onMouseMove)
            }
        },[])

    return(
        <>
            <Cursor 
                style = {{left: `${mousePosition.x}px`, top: `${mousePosition.y}px`}}
            
            />
        </>
    )
}


export default CustomCursor

