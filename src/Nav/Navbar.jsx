import React, { useEffect, useRef, useState } from "react";
import './../Styles/Navbar.css';
import Item1 from './MenuTab1';
import Item2 from './MenuTab2';
import TranslationButton from './TranslationButton';
import { Link } from 'react-router-dom';
import LogoAnimation from "../Images/LogoAnimation";
import Item3 from "./MenuTab3";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Search from '../Components/Search/Search';

function Navbar(){
    const navRef = useRef();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [hoveredTab, setHoveredTab] = useState(null);
    const [activeTab, setActiveTab] = useState(null);
    const [activeNav, setActiveNav] = useState(false);
    const [isSearch, setIsSearch ] = useState('');

    sessionStorage.setItem('search','')
    

    const handleHover = (tab) => {
        if(windowWidth > 1429){
            setHoveredTab(tab);
        }
    }

    const handleLeave = () => {
        if(windowWidth > 1429){
            setHoveredTab(null);
        }
    }

    const handleToggleAccordion = (tab) => {
        if (windowWidth <= 1429) {
          setActiveTab(activeTab === tab ? null : tab);
        }
      };


    useEffect(()=>{
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize); 
        }
    },[])

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setActiveNav(!activeNav);
        // sendDataToParent(activeNav);
    }

    const searchAppear = () => {
        
        setIsSearch('active')
        
            

    }

    

    return (
        <header className="relative">
            <Link reloadDocument to="/"><LogoAnimation className='uitLogo'/></Link>
            <nav
             ref={navRef}>
                <div className="Menu" onMouseEnter={()=>handleHover("menu1")} onMouseLeave={handleLeave} onClick={()=>handleToggleAccordion("menu1")}>
                    <a className={windowWidth>1429?"hoverActive menu1":"menu1"} style={{opacity:hoveredTab==='menu1'&&0.7}}>
                        <span>About</span>
                        <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow w-[14px] w-[14px]">
                            <path d={activeTab==="menu1"?"M17 8L8.57895 2L1 8":"M1 1.64285L9.42105 7.64285L17 1.64285"} stroke={windowWidth <= 1429 ? "white" : "black"} strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                        {(windowWidth <= 1429) && (
                            <div className={activeTab==="menu1"?"stick active":"stick"}></div>
                        )}
                    </a>
                    {(hoveredTab === "menu1" && windowWidth > 1429) && (
                        <Item1/>
                    )}
                    {(windowWidth <= 1429 && activeTab === "menu1") && (
                        <Item1/>
                    )}
                </div>

                <div className="Menu" onMouseEnter={()=>handleHover("menu2")} onMouseLeave={handleLeave} onClick={()=>handleToggleAccordion("menu2")}>
                    <a className={windowWidth>1429?"hoverActive menu2":"menu2"} style={{opacity:hoveredTab==='menu2'&&0.7}}>
                        <span>Academic</span>
                        <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow w-[14px]">
                            <path d={activeTab==="menu2"?"M17 8L8.57895 2L1 8":"M1 1.64285L9.42105 7.64285L17 1.64285"} stroke={windowWidth <= 1429 ? "white" : "black"} strokeWidth="2" strokeLinecap="round"/>
                        </svg>

                        {(windowWidth <= 1429) && (
                            <div className={activeTab==="menu2"?"stick active":"stick"}></div>
                        )}
                    </a>
                    {(hoveredTab === "menu2" && windowWidth > 1429) && (
                        <Item2/>
                    ) }
                    {(windowWidth <= 1429 && activeTab === "menu2") && (
                        <Item2/>
                    )}
                </div>

                <div className="Menu" onMouseEnter={()=>handleHover("menu3")} onMouseLeave={handleLeave} onClick={()=>handleToggleAccordion("menu3")}>
                    <a className={windowWidth>1429?"hoverActive menu3":"menu3"} style={{opacity:hoveredTab==='menu3'&&0.7}}>
                        <span>Conference</span>
                        <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow w-[14px]">
                            <path d={activeTab==="menu3"?"M17 8L8.57895 2L1 8":"M1 1.64285L9.42105 7.64285L17 1.64285"} stroke={windowWidth <= 1429 ? "white" : "black"} strokeWidth="2" strokeLinecap="round"/>
                        </svg>

                        {(windowWidth <= 1429) && (
                            <div className={activeTab==="menu3"?"stick active":"stick"}></div>
                        )}
                    </a>
                    {(hoveredTab === "menu3" && windowWidth > 1429) && (
                        <Item3/>
                    ) }
                    {(windowWidth <= 1429 && activeTab === "menu3") && (
                        <Item3/>
                    )}
                    
                </div>

                <div className="Menu" onMouseEnter={()=>handleHover("menu4")} onMouseLeave={handleLeave} onClick={()=>handleToggleAccordion("menu4")}>
                <Link reloadDocument to='/about/news' className={windowWidth>1429?"hoverActive menu4":"menu4"} style={{opacity:hoveredTab==='menu4'&&0.7}}>
                        <span>News</span>
                        <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow w-[14px]">
                            <path d={activeTab==="menu4"?"M17 8L8.57895 2L1 8":"M1 1.64285L9.42105 7.64285L17 1.64285"} stroke={windowWidth <= 1429 ? "white" : "black"} strokeWidth="2" strokeLinecap="round"/>
                        </svg>

                        {(windowWidth <= 1429) && (
                            <div className={activeTab==="menu4"?"stick active":"stick"}></div>
                        )}
                    </Link>
                    
                </div>  

                <div className="Menu" onMouseEnter={()=>handleHover("menu5")} onMouseLeave={handleLeave} onClick={()=>handleToggleAccordion("menu5")}>
                    <Link reloadDocument to="/research" className={windowWidth>1429?"hoverActive menu5":"menu5"} style={{opacity:hoveredTab==='menu5'&&0.7}}>
                        <span>Research</span>
                        <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow w-[14px]">
                            <path d={activeTab==="menu5"?"M17 8L8.57895 2L1 8":"M1 1.64285L9.42105 7.64285L17 1.64285"} stroke={windowWidth <= 1429 ? "white" : "black"} strokeWidth="2" strokeLinecap="round"/>
                        </svg>

                        {(windowWidth <= 1429) && (
                            <div className={activeTab==="menu5"?"stick active":"stick"}></div>
                        )}
                    </Link>
                    
                </div>

                <TranslationButton/>
                
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <svg width="34" height="2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H33" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
            </nav>
            <div className="bg-[#3798a6] flex justify-center items-center rounded-full p-[12px] cursor-pointer" onClick={searchAppear}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="text-[18px] text-[#fff]" />
            </div>
            <button className="nav-btn" onClick={showNavbar}>
                <svg width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16H48" stroke="#1C1D20" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M16 24H32" stroke="#1C1D20" strokeWidth="2" strokeLinecap="round"/>
                </svg>
            </button>
            { (isSearch === 'active') && <Search /> }
        </header>
    )
}


export default Navbar;