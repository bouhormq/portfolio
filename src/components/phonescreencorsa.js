import React from 'react'
import PhoneScreenStyles from "../styles/phonescreencorsa.module.scss"
import VideoPlayer from "./videoplayer"


export default function PhoneScreenCorsa(props){
    return <div className = {PhoneScreenStyles.phone}>
                <img className = {PhoneScreenStyles.mockphone} src ={require('../media/phone.png')} alt = " "></img>
                <VideoPlayer/>         
            </div>
}


