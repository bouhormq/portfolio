import React from 'react'
import PhoneScreenStyles from "../styles/phonescreencorsa.module.scss"
import srcvideo from "../media/corsa.gif"


export default function PhoneScreenCorsa(props){
    return <div className = {PhoneScreenStyles.phone}>
                <img className = {PhoneScreenStyles.mockphone} src ={require('../media/phone.png')} alt = " "></img>
                <img className = {PhoneScreenStyles.appvideo} src = {srcvideo}  alt = " "></img>         
            </div>
}


