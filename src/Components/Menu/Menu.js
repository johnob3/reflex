import React from 'react';
import {MenuLeft} from './MenuLeft/MenuLeft'
import {MenuRight} from './MenuRight/MenuRight'
import {Player} from "../Player/Player"

import Logo from "../../assets/img/logo_new.png"

export const Menu = ({page}) => {
    return (
        <>
            <MenuLeft/>
            <div className="player-main">
                <div className="logo-holder">
                    <img className={"logo"} src={Logo} alt="logo"/>
                </div>
                <Player page={page}/>
                {/*<Chat />*/}
            </div>
            <MenuRight/>
        </>
    )
}

