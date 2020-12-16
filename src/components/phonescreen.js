import React from 'react'
import PhoneScreenStyles from "../styles/phonescreen.module.scss"
import { useEffect, useState} from 'react';
import srcvideo1 from "../media/empty.png"
import srcvideo2 from "../media/letstalk.gif"
import srcvideo3 from "../media/video2.gif"

function MyApp (source) {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset)
    }
  }, []);
  
  if(window.innerWidth > 991) {
      if(offset > 700 && offset < 1421){
          return srcvideo2;
      }
      else if(offset > 1221){
          return srcvideo3;
      }
      else {
          return srcvideo1;
      }
  }
  else {
      if(source === "corsa") {
          return srcvideo2;
      }
      else if(source === "blind") {
          return srcvideo3;
      }
  }


};


export default function PhoneScreen(props){
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
                <h6 className = {PhoneScreenStyles.aboutme}>I am a user-centered, software engineer based in Barcelona with a passion 
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
            <img className = {PhoneScreenStyles.appvideo} src = {MyApp(props.source)}  alt = " "></img>
          </div>
}
