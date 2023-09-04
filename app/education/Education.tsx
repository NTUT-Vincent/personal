const Education = () => {
    return (
    <>
        <h1 className="text-5xl text-center" id="edu">Education</h1>
            <div className="flex flex-col gap-5">
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl w-full">
                <div className="md:flex">
                    <div className="md:shrink-0 flex flex-row items-center">
                        <a href="https://corp.pchome.tw/en/">
                            <img className="h-48 w-full object-contain md:w-48" src="/usc.jpeg" alt="Modern building architecture"/>
                        </a>
                    </div>
                    <div className="p-8">
                    <a href='https://corp.pchome.tw/en/' className="hover:underline"><div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">University of Southern California</div></a>
                    <div className="block mt-1 leading-tight font-medium text-black flex flex-col sm:flex-row justify-between">
                        <div className="text-base basis-full md:basis-1/2">
                            Master of Science, Computer Science
                        </div>
                        <div className="basis-full md:basis-1/3 text-sm">
                            AUG 2022 - MAY 2024
                        </div>
                    </div>
                    <div className="mt-2 text-slate-500">
                        
                    </div>
                    </div>
                </div>
                </div>
                <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl w-full">
                <div className="md:flex">
                    <div className="md:shrink-0 flex flex-row items-center">
                        <a href="https://www.sunbirddcim.com/about-us">
                            <img className="h-48 w-full object-contain md:w-48" src="/NTUT.jpeg" alt="Modern building architecture"/>
                        </a>
                    </div>
                    <div className="p-8">
                    <a href="https://www.sunbirddcim.com/about-us">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold hover:underline">National Taipei University of Technologye</div>
                    </a>
                    
                    <div className="block mt-1 leading-tight font-medium text-black flex flex-col sm:flex-row justify-between">
                        <div className="text-base basis-full md:basis-1/2">
                            BS Electrical Engineering and Computer Science
                        </div>
                        <div className="basis-full md:basis-1/3 text-sm">
                            SEP 2018 - FEB 2022
                        </div>
                    </div>
                    <div className="mt-2 text-slate-500"> 
                        
                    </div>
                    </div>
                </div>
                </div>
            </div>
      
     
    </>);
}
export default Education;