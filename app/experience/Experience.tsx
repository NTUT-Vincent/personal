const Experience = () => {
    return (
        <>
            <h1 className="text-5xl text-center" id="exp">Experience</h1>
            <div className="flex flex-col gap-5">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="md:shrink-0 flex flex-row items-center">
                        <a href="https://corp.pchome.tw/en/">                           
                            <img className="h-48 w-full object-cover md:w-48" src="/pchome.png" alt="Modern building architecture"/>
                        </a>
                    </div>
                    <div className="p-8">
                    <a href='https://corp.pchome.tw/en/' className="hover:underline"><div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">PChome Online Inc.</div></a>
                    <div className="block mt-1 leading-tight font-medium text-black flex flex-col md:flex-row justify-between">
                        <div className="text-base basis-full md:basis-1/2">
                            Software Engineer Intern
                        </div>
                        <div className="basis-full md:basis-1/3 text-sm">
                            JUL 2023 - AUG 2023
                        </div>
                    </div>
                    <div className="mt-2 text-slate-500">
                        <ul className="list-disc">
                        <li>
                            Develop a web application for an e-commerce company that has an annual turnover of USD 1.4 billion.
                        </li>
                        <li>
                            Join the front-end development team and work on a project about migrating the old project to a new Next.js project
                        </li>
                        <li>
                            Increase web application performance by 35 %.
                            <ul className="list-none">
                            <li>
                                - Decrease 0.5 s FCP.
                            </li>
                            <li>
                                - Decrease 6.4 s LCP.
                            </li>
                            <li>
                                - Decrease 640 ms total blocking time.
                            </li>
                            </ul>
                        </li>
                        <li>
                            Improve the website&apos;s SEO using server-side rendering.
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl w-full">
                <div className="md:flex">
                    <div className="md:shrink-0 flex flex-row items-center">
                        <a href="https://www.sunbirddcim.com/about-us">
                            <img className="h-48 w-full object-cover md:w-48" src="/sunbird.jpeg" alt="Modern building architecture"/>
                        </a>
                    </div>
                    <div className="p-8">
                    <a href="https://www.sunbirddcim.com/about-us">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold hover:underline">Sunbird Software</div>
                    </a>
                    
                    <div className="block mt-1 leading-tight font-medium text-black flex flex-col sm:flex-row justify-between">
                        <div className="text-base basis-full md:basis-1/2">
                            Software Engineer Intern
                        </div>
                        <div className="basis-full md:basis-1/3 text-sm">
                            JUL 2021 - AUG 2021
                        </div>
                    </div>
                    <div className="mt-2 text-slate-500"> 
                        <ul className="list-disc">                          
                        <li>
                            Back-end programming and development 
                        </li>
                        <li>
                            Improved code quality by reducing duplication and enhancing readability with Spring AOP. 
                        </li>
                        <li>
                            Conducted unit tests and integration tests for programs
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

export default Experience;