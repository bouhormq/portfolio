import React from 'react'
import PhoneScreenStyles from "../styles/phonescreencorsa.module.scss"
import srcvideo from "../media/video2.gif"


export default function PhoneScreenCorsa(props){
    return <div className = {PhoneScreenStyles.phone}>
            <img className = {PhoneScreenStyles.bumblebizz} src ={require('../media/bumblebizz.png')} alt = " "></img>
            <img className = {PhoneScreenStyles.mockphone} src ={require('../media/phone.png')} alt = " "></img>
            <div className = {PhoneScreenStyles.profile}>
              <img className = {PhoneScreenStyles.pictureprofile} src ={require('../media/profile.jpg')} alt = " "></img>
            </div>        
            <div className = {PhoneScreenStyles.cvbg}>
              <div className = {PhoneScreenStyles.cv}>
                <h1 className = {PhoneScreenStyles.name}>Salim Bouhorma</h1>
                <img className = {PhoneScreenStyles.arrow} src ={require('../media/arrow.gif')} alt = " "></img>
                <h2 className = {PhoneScreenStyles.title}>Computer Science Student</h2>
                <h3 className = {PhoneScreenStyles.company}>Polytechnic University of Catalonia</h3>
                <h6 className = {PhoneScreenStyles.aboutme}>I am a user-centered, software engineer with a passion 
                for building digital experiences that enhance one's life. Critical thinking is essential to my design process. 
                My lifetime goal is to keep learning new things and to use that knowledge to help people through software.</h6>
                <h5 className = {PhoneScreenStyles.type}>Experience</h5>
                <h2 className = {PhoneScreenStyles.title}>Software Engineer</h2>
                <h3 className = {PhoneScreenStyles.company}>Polytechnic University of Catalonia</h3>
                <h4 className = {PhoneScreenStyles.duration}>Feb 2020 – Present · 10 mos</h4>
                <h4 className = {PhoneScreenStyles.location}>Barcelona, Spain · Internship</h4>
                <h5 className = {PhoneScreenStyles.type}>Education</h5>
                <h2 className = {PhoneScreenStyles.title}>Bachelor's degree in Computer Science, Software Engineering</h2>
                <h3 className = {PhoneScreenStyles.company}>Polytechnic University of Catalonia</h3>
                <h4 className = {PhoneScreenStyles.duration}>2023 (expected)</h4>
              </div>
            </div>
            <img className = {PhoneScreenStyles.appvideo} src = {srcvideo}  alt = " "></img>
          </div>
}


