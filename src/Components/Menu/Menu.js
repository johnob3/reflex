import React from 'react';
import {MenuLeft} from './MenuLeft/MenuLeft'
import {MenuRight} from './MenuRight/MenuRight'
import {Player} from "../Player/Player"

export const Menu = () => {

    return (
        <div>
            <MenuLeft>
            </MenuLeft>
            <Player></Player>
            <MenuRight>
            </MenuRight>
        </div>
    )
}

