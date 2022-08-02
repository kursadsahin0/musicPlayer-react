import React from 'react';
import '../styles/LeftMenu.css';
import { Menu } from "./Menu";
import { TrackList } from './TrackList';
import {MenuList} from './MenuList';
import {FaSpotify, FaEllipsisH} from 'react-icons/fa';
import {BiSearchAlt} from 'react-icons/bi'
import { MenuPlayList } from './MenuPlayList';
function LeftMenu() {
  return (
    <div className='leftMenu'>
      <div className='logoContainer'>
        <i><FaSpotify/></i>
        <h2>Music</h2>
        <i><FaEllipsisH/></i>
      </div>
      <div className='searchBox'>
        <input type="text" placeholder='Search...' />
        <i className='searchIcon'><BiSearchAlt/></i>
      </div>
    <Menu title={'Menu'} menuObject={MenuList}/>
    <MenuPlayList/>
    <TrackList/>
    </div>
  )
}

export default LeftMenu
