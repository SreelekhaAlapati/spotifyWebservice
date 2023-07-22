import * as Icon from '../component/icons'
import React from 'react'

export default {
  MOBILE_SIZE: 640,
}

export const MENU = [
  {
    title: 'Home',
    path: '/',
    icon: <Icon.Home />,
    iconSelected: <Icon.HomeActive />
  },
  {
    title: 'Search',
    path: '/search',
    icon: <Icon.Search />,
    iconSelected: <Icon.SearchActive />
  },
  {
    title: 'Playlist',
    path: '/library',
    icon: <Icon.Library />,
    iconSelected: <Icon.LibraryActive />
  }
]

export const PLAYLISTBTN = [
    {
      title: 'Add a Playlist',
      path: '/',
      ImgName: 'createPlaylist',
    },
    {
      title: 'BTS',
      path: '/',
      ImgName: 'popularSong',
    }
]

export const LIBRARYTABS = [
  {
    title: 'Playlist',
    path: '/library'
  },
  {
    title: 'Podcast',
    path: '/library/podcasts'
  },
  {
    title: 'Artists',
    path: '/library/artists'
  },
  {
    title: 'Albums',
    path: '/library/albums'
  }
]