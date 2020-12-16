import React from 'react'
import AppDetailsStyles from "../styles/appdetails.module.scss"

export default function AppDetails(){
    return <div className = {AppDetailsStyles.div}>
                <h1 className = {AppDetailsStyles.h1}>raco:</h1>
                <div className = {AppDetailsStyles.text}>
                    <h2 className = {AppDetailsStyles.h2}>The faculty's virtual</h2>
                    <h2 className = {AppDetailsStyles.h2}>learning environment to</h2>
                    <h2 className = {AppDetailsStyles.h2}>support face-to-face</h2>
                    <h2 className = {AppDetailsStyles.h2}>teaching, where teachers</h2>
                    <h2 className = {AppDetailsStyles.h2}>can share information</h2>
                    <h2 className = {AppDetailsStyles.h2}>with students about</h2>
                    <h2 className = {AppDetailsStyles.h2}>classes, tasks and exams,</h2>
                    <h2 className = {AppDetailsStyles.h2}>all in one place</h2>
                </div>
                <div className = {AppDetailsStyles.row}>
                    <div className = {AppDetailsStyles.store}>
                        <img className = {AppDetailsStyles.storehover} src ={require('../media/googleplaybuttonhover.png')} alt = " "></img>
                        <img className = {AppDetailsStyles.storenohover} src ={require('../media/googleplaybutton.png')} alt = " "></img>
                    </div>
                    <a href = 'https://github.com/bouhormq/RACO' target='_blank' rel="noreferrer">
                        <div className = {AppDetailsStyles.github}>
                        <img className = {AppDetailsStyles.githubhover} src ={require('../media/githubbuttonhover.png')} alt = " "></img>
                        <img className = {AppDetailsStyles.githubnohover} src ={require('../media/githubbutton.png')} alt = " "></img>
                    </div>
                    </a>
                </div>
            </div>
}
