import React from 'react'import './SystemReqsGameplay.scss'import { FC } from 'react'import player_icon from '../../../components/img/player-icon.svg';import users_icon from '../../../components/img/users-icon.svg';import controlleer_icon from '../../../components/img/controlleer-icon.svg';import PEGI from '../../../components/img/PEGI.png';export const SystemReqsGameplay:FC = ({}) => {    return (        <div className="systemReqsGameplay">            <p className="systemReqsGameplay-heading">Gameplay:</p>            <div className="systemReqsGameplay-container">                <div className="systemReqsGameplay-block">                    <div className="systemReqsGameplay-box">                        <img className="systemReqsGameplay-img" src={player_icon} alt=""/>                        <p className="systemReqsGameplay-text">Singleplayer</p>                    </div>                    <div className="systemReqsGameplay-box">                        <img className="systemReqsGameplay-img" src={controlleer_icon} alt=""/>                        <p className="systemReqsGameplay-text">Full Controller Support</p>                    </div>                </div>                <div className="systemReqsGameplay-block">                    <div className="systemReqsGameplay-box">                        <img className="systemReqsGameplay-img" src={users_icon} alt=""/>                        <p className="systemReqsGameplay-text systemReqsGameplay-text2">Multiplayer (coming soon after the release, as a free update)</p>                    </div>                    <div className="systemReqsGameplay-box">                        <p className="systemReqsGameplay-textRating">RATING:</p>                        <img className="systemReqsGameplay-imgGameplay" src={PEGI} alt=""/>                    </div>                </div>            </div>        </div>    )};