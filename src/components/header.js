import React from 'react'
import HeaderStyles from '../styles/header.module.scss'


export default function Header(){
return  <div className = {HeaderStyles.menu}>
            <a href = 'https://www.bouhormq.com/' target='_blank' rel="noreferrer">
                        <img className = {HeaderStyles.logo} src ={require('../media/logo.png')} alt = " "></img>
            </a>
            <div className = {HeaderStyles.socials}>
                <div className = {HeaderStyles.linkedin}>
                    <a href = 'https://www.linkedin.com/in/bouhormq/' target='_blank' rel="noreferrer">
                        <img className = {HeaderStyles.linkedinhover} src ={require('../media/LinkedIn_logo_initialshover.png')} alt = " "></img>
                        <img className = {HeaderStyles.linkedinnohover} src ={require('../media/LinkedIn_logo_initials.png')} alt = " "></img>
                    </a>
                </div>
                <div className = {HeaderStyles.github}>
                    <a href = 'https://github.com/bouhormq' target='_blank' rel="noreferrer">
                        <img className = {HeaderStyles.githubhover} src ={require('../media/githubbuttonheaderhover.png')} alt = " "></img>
                        <img className = {HeaderStyles.githubnohover} src ={require('../media/githubbuttonheader.png')} alt = " "></img>
                    </a>
                </div>
            </div>
        </div>
}
