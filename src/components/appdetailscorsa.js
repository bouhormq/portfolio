import React from 'react'
import AppDetailsStyles from "../styles/appdetails.module.scss"

export default function AppDetails(){
    return <div className = {AppDetailsStyles.div}>
                <h1 className = {AppDetailsStyles.h1c}>corsa:</h1>
                <div className = {AppDetailsStyles.text}>
                    <h2 className = {AppDetailsStyles.h2}>Due to the lack of support</h2>
                    <h2 className = {AppDetailsStyles.h2}>of the public transit</h2>
                    <h2 className = {AppDetailsStyles.h2}>feature on Google Maps</h2>
                    <h2 className = {AppDetailsStyles.h2}>in my hometown,</h2>
                    <h2 className = {AppDetailsStyles.h2}>I developed an app that</h2>
                    <h2 className = {AppDetailsStyles.h2}>aimed to solve that</h2>
                    <h2 className = {AppDetailsStyles.h2}>problem</h2>
                </div>
                <div className = {AppDetailsStyles.row}>
                    <a href = 'https://play.google.com/store/apps/details?id=trufi.bouhormq.corsa' target='_blank' rel="noreferrer">
                    <div className = {AppDetailsStyles.store}>
                        <img className = {AppDetailsStyles.storehover} src ={require('../media/googleplaybuttonhover.png')} alt = " "></img>
                        <img className = {AppDetailsStyles.storenohover} src ={require('../media/googleplaybutton.png')} alt = " "></img>
                    </div>
                    </a>
                    <a href = 'https://apps.apple.com/us/app/corsa-tetouan/id1549351977' target='_blank' rel="noreferrer">
                    <div className = {AppDetailsStyles.store}>
                        <img className = {AppDetailsStyles.storehover} src ={require('../media/appstorebuttonhover.png')} alt = " "></img>
                        <img className = {AppDetailsStyles.storenohover} src ={require('../media/appstorebutton.png')} alt = " "></img>
                    </div>
                    </a>
                    <a href = 'https://github.com/bouhormq/CORSA' target='_blank' rel="noreferrer">
                    <div className = {AppDetailsStyles.github}>
                        <img className = {AppDetailsStyles.githubhover} src ={require('../media/githubbuttonhover.png')} alt = " "></img>
                        <img className = {AppDetailsStyles.githubnohover} src ={require('../media/githubbutton.png')} alt = " "></img>
                    </div>
                    </a>
                </div>
            </div>
}

