import React, { Component } from "react"
import PhoneScreen from "../components/phonescreen"
import AboutMe from "../components/aboutme"
import AppDetailsCorsa from "../components/appdetailscorsa"
import AppDetailsRaco from "../components/appdetailsraco"
import Cursor from "../components/cursor"
import Header from "../components/header"
import IndexStyles from "../styles/index.module.scss"
import { Blob } from "react-blob"
import {RotateScale} from 'styled-loaders-react'
import {Helmet} from "react-helmet";

class App extends Component{
  
  state = {
    loading: true
  }

  componentDidMount = () => {
    setTimeout(() => {
      this.setState({
        loading:false
      })
    }, 1500)
  }
  
  
  
  render(){
    return <div className ={IndexStyles.div}>
            <Helmet>
              {/*<!-- HTML Meta Tags -->*/}
              <title>Salim Bouhorma Mouffak</title>
              <meta name="description" content="Hi there! Checkout some of my cool projects!"/>

              {/*<!-- Google / Search Engine Tags -->*/}
              <meta itemprop="name" content="Salim Bouhorma Mouffak"/>
              <meta itemprop="description" content="Hi there! Checkout some of my cool projects!"/>
              <meta itemprop="image" content="https://github.com/bouhormq/PORTFOLIO/blob/master/src/media/linkpreview.PNG"/>

              {/*<!-- Facebook Meta Tags -->*/}
              <meta property="og:url" content="https://www.bouhormq.com"/>
              <meta property="og:type" content="website"/>
              <meta property="og:title" content="Salim Bouhorma Mouffak"/>
              <meta property="og:description" content="Hi there! Check out some of my cool projects!"/>
              <meta property="og:image" content="https://github.com/bouhormq/PORTFOLIO/blob/master/src/media/linkpreview.PNG"/>

              {/*<!-- Twitter Meta Tags -->*/}
              <meta name="twitter:card" content="summary_large_image"/>
              <meta name="twitter:title" content="Salim Bouhorma Mouffak"/>
              <meta name="twitter:description" content="Hi there! Checkout some of my cool projects!"/>
              <meta name="twitter:image" content="https://github.com/bouhormq/PORTFOLIO/blob/master/src/media/linkpreview.PNG"/>
            </Helmet>
            {
              this.state.loading ? <RotateScale size = "400px" color="#20356B"/> :
                  <>
                <Cursor />
                <section className ={IndexStyles.section}>
                <Header/>
                <Blob size="1900px"
                      style={{
                        position: 'absolute',
                        top: '0%',
                        left: '30%',
                        zIndex: -1,
                        backgroundColor: 'white',
                        color: 'white',
                        opacity: 0.5,
                        fontSize: '50vh',
                      }}
                      animationDuration="60s"
                />
                <AboutMe/>
                <PhoneScreen/>
                <AppDetailsCorsa/>
                <PhoneScreen source="corsa"/>
                <AppDetailsRaco/>
                <PhoneScreen source="blind"/>
                </section>
              </>
            }

      </div>
    
  };

}

export default App


