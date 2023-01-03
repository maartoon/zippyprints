import React, { Component } from 'react';
import { useRef } from 'react';
import styles from '../Home/home.module.css'
import ZippyPrints from './images/ZippyPrints.png'
import Button from '../../components/actions/Button';
import {useNavigate} from "react-router-dom"

export default function Home(){
  const navigate = useNavigate();
  const ref = useRef(null);
  const handleScrollDown = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  const handleUserSubmit = () => {
    navigate("/Register");
  }
  const handlePrinterSubmit = () => {
    navigate("/Register");
  }

  return(
          <div className={styles.StartScreen}>
            <div className={styles.intro}>
              <h1 className={styles.title}>ZippyPrints</h1>
                <div className={styles.subtitleContainer}>
                  <div className={styles.line}></div>
                  <p className={styles.subtitle}>ZippyPrints is a fast, easy to use, and reliable way 
                  for underfunded robotics teams to receive 3D printed custom designs. 
                  Make an account now.</p>
                  </div>
                <div className={styles.buttonContainer}>
                  <Button
                  className={styles.userButton}
                  variant = "contained"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    backgroundColor: '#F0F5FF',
                    borderRadius: '7px',
                    padding: '0px 32px',
                    width: 'fit-content',
                    "&.MuiButton-contained": {
                      color: '#0B63E5',
                      fontFamily: "Lexend Regular",
                      fontSize: '0.9vw',
                      fontWeight: '500',
                      letterSpacing: '0',
                      lineHeight: '56px',
                      marginTop: '-2px',
                      whiteSpace: 'nowrap',
                      width: 'fit-content'
                    },
                    "&:hover": {
                      background: "#F0F5FF",
                      boxShadow: '3px 3px 1.5px #02142E'
                    },
                  }}
                    text = "Request a Print"
                    onClick = {handleUserSubmit}
                  >
                  </Button>   

                  <Button
                  className={styles.userButton}
                  variant = "contained"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    backgroundColor: '#0B63E5',
                    borderRadius: '7px',
                    padding: '0px 32px',
                    width: 'fit-content',
                    "&.MuiButton-contained": {
                      color: '#F0F5FF',
                      fontFamily: "Lexend Regular",
                      fontSize: '0.9vw',
                      fontWeight: '500',
                      letterSpacing: '0',
                      lineHeight: '56px',
                      marginTop: '-2px',
                      whiteSpace: 'nowrap',
                      width: 'fit-content'
                    },
                    "&:hover": {
                      background: "#0B63E5",
                      boxShadow: '3px 3px 1.5px #02142E'
                    },
                  }}
                    text = "Become a Vendor"
                    onClick = {handlePrinterSubmit}
                  >
                  </Button>   
                </div>   
              </div>

              <div ref={ref} className={styles.tutorialBackground}>
              <h1 className={styles.tutorialTitle}>How It Works</h1>
                <p className={styles.tutorialSubtitle}>For Printers:
                <p className={styles.tutorialDescription}>- Register your account</p>
                <p className={styles.tutorialDescription}>- Fill out the necessary information on your profile!</p>
                <p className={styles.tutorialDescription}>- Make an estimation on how much you want to charge ($/cm<sup>3</sup>)!</p>
                <p className={styles.tutorialDescription}>- When a team reuqests a print, you will recieve an email with their</p>
                <p className={styles.tutorialDescription}>‏‏‎ ‎‏‏‎ ‎contact information and any additional information!</p>
                <p className={styles.tutorialDescription}>- Now, simply wait for requests to flow in</p>
                <div className={styles.redVertical} />
              </p>

                <p className={styles.teamTutorialSubtitle}>For Teams:
                  <p className={styles.teamTutorialDescription}>Register your account -</p>
                  <p className={styles.teamTutorialDescription}>Fill out the necessary information on your profile! -</p>
                  <p className={styles.teamTutorialDescription}>Navigate to the 'Maps' menu on the navigation bar! -</p>
                  <p className={styles.teamTutorialDescription}>Find a printer near you if available and submit a -</p>
                  <p className={styles.teamTutorialDescription}>‏‏valid request with any additional information! -</p>
                  <p className={styles.teamTutorialDescription}>Hit submit and wait for an email response from your printer! -</p>
                  <div className={styles.teamVertical} />
                  </p>
                  <h1 className={styles.missionTitle}>Mission Statement</h1>
              <p className={styles.missionStatement}>ZippyPrints was created by 6165 MSET Cuttlefish, a FIRST Tech Challenge robotics team, to connect FTC teams with 3D printers with underresourced teams needing custom manufacturing services. 
              </p>
              </div>
          </div>

      );

}

