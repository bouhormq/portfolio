import React from 'react'
import AboutMeStyles from '../styles/aboutme.module.scss'

export default function AboutMe(){
    return <div className={AboutMeStyles.div}>
                <img className = {AboutMeStyles.hand} src ={require('../media/hand.png')} alt = " "></img>
                <img className = {AboutMeStyles.fingers2} src ={require('../media/fingers2.png')} alt = " "></img>

            </div>
}
