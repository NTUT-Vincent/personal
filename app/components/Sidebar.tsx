import { faAddressCard, faBriefcase, faSchool, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBar = () => {
    return (
        <>
            <div className="flex flex-col h-1/2">
                <a href="#about" className="flex items-center rounded-t-lg bg-orange-100 hover:bg-orange-200 opacity-20 hover:opacity-100 basis-1/4 w-15">
                    <div className="text-center w-full">
                    <FontAwesomeIcon icon={faAddressCard} size="2xs"/>
                        about
                    </div>
                </a>
                <a href="#edu" className="flex items-center rounded-b-lg bg-orange-100 hover:bg-orange-200 hover:opacity-100 opacity-20 basis-1/4 w-15">
                    <div className="text-center w-full">
                        <FontAwesomeIcon icon={faSchool} size="2xs" />
                        education
                    </div>
                </a>
                <a href="#exp" className="flex items-center bg-orange-100 hover:bg-orange-200 hover:opacity-100 opacity-20 basis-1/4 w-15">
                    
                    <div className="text-center w-full">
                        <FontAwesomeIcon icon={faBriefcase} size="2xs" />
                        experience
                    </div>
                </a>
                <a href="#project" className="flex items-center bg-orange-100 hover:bg-orange-200 hover:opacity-100 opacity-20 basis-1/4 w-15">
                    <div className="text-center w-full">
                        <FontAwesomeIcon icon={faScrewdriverWrench} size="2xs" />
                        project
                    </div>
                </a>
            </div>
        </>
    );
}

export default SideBar;