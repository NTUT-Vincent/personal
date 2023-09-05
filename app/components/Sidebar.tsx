"use client"

import { faAddressCard, faBriefcase, faSchool, faScrewdriverWrench, faSquareCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import useRWD from "@/app/utils/useRWD"

const SideBar = () => {
    const [showMenu, setShowMenu] = useState(true)
    const [navTextShow, setNavTextShow] = useState(false);
    const handleButtonClick = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640){
                setShowMenu(!showMenu);
            }    
        }
    }
    useEffect(()=>{
        if (window.innerWidth < 640) {
            setShowMenu(true);
        } 
    },[])
    
    useEffect(() => {
        window.addEventListener(
          "resize",
          () => {
            if (window.innerWidth < 640) {
                setShowMenu(false);
            }else {
                setShowMenu(true)
            }
          },
        );
      }, []);

    return (
        <div onMouseLeave={handleButtonClick} onMouseEnter={handleButtonClick} className="h-1/2">
            <div className="visible sm:invisible">
                <FontAwesomeIcon icon={faSquareCaretDown} size="2xl"/>
            </div>
            
            { showMenu ? ( 
                <div className="flex flex-col h-1/2">
                    <a href="#about" className="flex flex-col justify-center items-center rounded-t-lg bg-orange-100 hover:bg-orange-200 opacity-90 hover:opacity-100 basis-1/4 w-15">
                        <div className="text-center w-full">
                        <FontAwesomeIcon icon={faAddressCard} size="lg"/>
                        <p>
                            about
                        </p>
                        </div>
                    </a>
                    <a href="#edu" className="flex flex-col justify-center items-center bg-orange-100 hover:bg-orange-200 hover:opacity-100 opacity-90 basis-1/4 w-15">
                        <div className="text-center w-full">
                            <FontAwesomeIcon icon={faSchool} size="lg" />
                            <p>
                                education
                            </p>
                        </div>
                    </a>
                    <a href="#exp" className="flex flex-col justify-center items-center bg-orange-100 hover:bg-orange-200 hover:opacity-100 opacity-90 basis-1/4 w-15">
                        
                        <div className="text-center w-full">
                            <FontAwesomeIcon icon={faBriefcase} size="lg" />
                            <p>
                                experience    
                            </p>                        
                        </div>
                    </a>
                    <a href="#project" className="flex flex-col justify-center rounded-b-lg items-center bg-orange-100 hover:bg-orange-200 hover:opacity-100 opacity-90 basis-1/4 w-15">
                        <div className="text-center w-full">
                            <FontAwesomeIcon icon={faScrewdriverWrench} size="lg" />
                            <p>
                                project
                            </p>
                        </div>
                    </a>
                </div> ) :
                (<></>)
            }
            
        </div>
    );
}

export default SideBar;