import React from 'react';
import {MenuLeft} from './MenuLeft/MenuLeft'
import {MenuRight} from './MenuRight/MenuRight'
import {Player} from "../Player/Player"

import Logo from "../../Assets/img/logo_new.png"

export const Menu = ({page}) => {
    return (
        <>
            <MenuLeft/>
            <div className="player-main">
                <Player page={page}/>
                {/*<Chat />*/}
            </div>
            <MenuRight/>
        </>
    )
}

