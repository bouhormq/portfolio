import React from 'react'
import PhoneScreenStyles from "../styles/phonescreencorsa.module.scss"
import srcvideo from "../media/corsa.mp4"


export default function PhoneScreenCorsa(props){
    return <div className = {PhoneScreenStyles.phone}>
                <img className = {PhoneScreenStyles.mockphone} src ={require('../media/phone.png')} alt = " "></img>
                <video className = {PhoneScreenStyles.appvideo} playsinline loop autoPlay muted>
                    <source src={srcvideo} type="video/mp4" />
                </video>            
            </div>
}


