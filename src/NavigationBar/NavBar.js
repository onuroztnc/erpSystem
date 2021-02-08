import React, { useState } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import { Link } from 'react-router-dom'
import { SideBarData } from './SidebarData'
import { IconContext } from 'react-icons'
import './NavBar.css'
import SubMenu from './SubMenu';

function NavBar({ handleLogout }) {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <button onClick={handleLogout}>
                        <IoIcons.IoIosLogOut size={18} />
                        Log Out
                    </button>
                </div>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' >
                        <li className='navbar-toggle '>
                            <Link to='#' className="menu-bars">
                                <AiIcons.AiOutlineClose onClick={showSidebar} />
                            </Link>
                        </li>
                        {/* {SideBarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icons}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })} */}
                        {SideBarData.map((item, index) => {
                            return <SubMenu item={item} key={index} />;
                        })}

                    </ul>
                </nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar
