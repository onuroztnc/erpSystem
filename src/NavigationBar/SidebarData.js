import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as BiIcons from "react-icons/bi"
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as GiIcons from "react-icons/gi"
import * as BsIcons from "react-icons/bs"
import * as RiIcons from "react-icons/ri"
import * as IoIcons5 from "react-icons/io5"

export const SideBarData = [
    {
        title: 'Ana Sayfa',
        path: '/',
        icons: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Şantiye',
        path: '/building-site',
        icons: <GiIcons.GiMineTruck />,
        cName: 'nav-text'
    },
    {
        title: 'Satış',
        path: '/sales',
        icons: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Projeler',
        path: '/project',
        icons: <AiIcons.AiFillFolderOpen />,
        cName: 'nav-text',
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Mostar Life',
                path: '/project/mostar_life',
                icon: <BsIcons.BsBuilding />
            },
            {
                title: 'Vadi Istanbul',
                path: '/project/vadi_istanbul',
                icon: <BsIcons.BsBuilding />
            }
        ]
    },
    {
        title: 'Arşiv',
        path: '/archive',
        icons: <RiIcons.RiArchiveDrawerFill />,
        cName: 'nav-text'
    },
    {
        title: 'Teslim',
        path: '/delivery',
        icons: <GiIcons.GiCarKey />,
        cName: 'nav-text'
    },
    {
        title: 'Personel',
        path: '/employee',
        icons: <RiIcons.RiTeamFill />,
        cName: 'nav-text'
    },
    {
        title: 'Takvim',
        path: '/calendar',
        icons: <IoIcons5.IoCalendarOutline />,
        cName: 'nav-text'
    }
];