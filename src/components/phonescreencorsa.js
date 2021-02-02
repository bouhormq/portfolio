import React from 'react'
import PhoneScreenStyles from "../styles/phonescreencorsa.module.scss"
import srcvideo from "../media/screen.png"


export default function PhoneScreenCorsa(props){
    return <div className = {PhoneScreenStyles.phone}>
            <img className = {PhoneScreenStyles.appvideo} src = {srcvideo}  alt = " "></img>
          </div>
}


