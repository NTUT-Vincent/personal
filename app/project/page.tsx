const Project = () => {
    return (
        <>
            <h1 className="text-2xl sm:text-4xl text-center" id="project">Project</h1>
            <div className="flex flex-col gap-5">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="p-8">
                            <div className="block mt-1 leading-tight font-medium text-black flex flex-col md:flex-row justify-between">
                                <div className="text-base basis-full md:basis-1/2">
                                    Yelp Business Search
                                </div>
                                <div className="basis-full md:basis-1/3 text-sm text-right">
                                    JUL 2023 - AUG 2023
                                </div>
                            </div>
                            <div className="mt-2 text-slate-500">
                                <ul className="list-disc">
                                    <li>
                                        Built a responsive web application with Angular and Bootstrap that allows users to search for Yelp business results based on users’ inputs and locations
                                    </li>
                                    <li>
                                        Made an Android version of the same application using Android Studio and Java
                                    </li>
                                    <li>
                                        Hosted a RESTful web service on Google Cloud Platform with Node.js and Express as back-end.
                                    </li>
                                    <li>
                                        Implemented geocoding, autocomplete, IP address lookup, and embedded maps functionalities for better user experience
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl w-full">
                    <div className="md:flex">
                        <div className="p-8">
                            <div className="block mt-1 leading-tight font-medium text-black flex flex-col md:flex-row justify-between">
                                <div className="text-base basis-full md:basis-1/2">
                                    Sunbird Software Collaboration Project with NTUT
                                </div>
                                <div className="basis-full md:basis-1/3 text-sm text-left sm:text-right">
                                    JUL 2020 - FEB 2022
                                </div>
                            </div>
                            <div className="mt-2 text-slate-500">
                                <ul className="list-disc">
                                    <li>
                                        Built user-friendly interfaces and efficient systems, allowing easier management of data centers through data visualization
                                    </li>
                                    <li>
                                        Developed programs for companies including IBM, AT&T Mobility LLC, Intel, and Hewlett-Packard Company
                                    </li>
                                    <li>
                                        Developed backend program with Spring Framework and PostgreSQL
                                    </li>
                                    <li>
                                        Developed frontend program with Angular
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                    <div className="md:flex">
                        <div className="p-8">
                            <div className="block mt-1 leading-tight font-medium text-black flex flex-col md:flex-row justify-between">
                                <div className="text-base basis-full md:basis-1/2">
                                    E-commerce web application: PC Store
                                </div>
                                <div className="basis-full md:basis-1/3 text-sm text-left sm:text-right">
                                    SEP 2020 - DEC 2020
                                </div>
                            </div>
                            <div className="mt-2 text-slate-500">
                                <ul className="list-disc">
                                    <li>
                                        Built a full-stack web application that uses Django, React, and MySQL so that users can shop for computers, CPU, RAM, SSD, and graphic cards
                                    </li>
                                    <li>
                                        Implemented product management, account management, login, sales tracking, promotion, coupon, and more functionality
                                    </li>
                                    <li>
                                        Wrote software design documents for the program and database before implementation
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      
        </>
    );
}

export default Project;