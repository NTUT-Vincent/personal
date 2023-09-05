import Image from 'next/image'
import Project from './project/page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import Experience from './experience/Experience'
import SideBar from './components/Sidebar'
import Education from './education/Education'

export default function Home() {
  return (
    <main>
      <aside>
        <div className="fixed left-0 sm:left-5 top-0 sm:top-1/4 h-screen">
          <SideBar/>
      </div>
    </aside>
    <div className="flex min-h-screen flex-col items-center justify-start p-0 sm:p-24 gap-10">
      
      <div className='flex flex-col items-center gap-10 sm:flex-row'>
        <img className='object-cover h-48 w-48 rounded-full' src='/myEmo.png'></img>
        <div className="text-center sm:w-full font-mono">
          <strong className="text-lg">Ssu Hsien, Chung</strong>
          <p>Software Engineer</p>
          <p className="text-slate-400 font-light">Seeking for a full-time job.</p>
        </div>
      </div>
      <div>
        <h1 id="about" className="text-2xl sm:text-4xl text-center">About</h1>
        <p className='text-start w-4/5 mx-auto my-5 font-mono h-fit sm:h-0 visible sm:invisible'>
          Hello, my name is Ssu Hsien Chung, and I am currently pursuing a Master&apos;s degree in Computer Science at the University of Southern California (USC)
          <br/>
          I am currently seeking internships or full-time opportunities in software engineering, and I would love to connect with professionals in this field. Please feel free to contact me if you want to learn more about my experiences or discuss potential opportunities.
        </p>
        <p className='text-start w-4/5 mx-auto my-5 font-mono h-0 sm:h-fit invisible sm:visible'>
          Hello, my name is Ssu Hsien Chung, and I am currently pursuing a Master&apos;s degree in Computer Science at the University of Southern California (USC). My passion lies in software engineering, and I have two internship experiences. 
          <br/><br/>
          As a software engineer intern at PChome Online Inc., one of the largest e-commerce companies in Asia, I joined the front-end development team. I developed the front-end application for the company. I was assigned a task that asked me to improve the website&apos;s performance. I rebuilt the old project using Next.js and eventually improved website performance by 35% and decreased 0.5 s FCP, 6.4 s LCP, and 640 ms total blocking time. 
          <br/><br/>
          My other internship experience is as a software engineer intern at Sunbird Software. In this internship program, I worked on a project about refactoring the backend program using aspect-oriented programming (AOP). I refactored the program and improved code quality by reducing duplication and enhancing readability. I also wrote test cases for all the refactored code and checked all the test cases passed to ensure my implementation&apos;s correctness.
          <br/><br/>
          I have worked on several software projects throughout my academic career, including Yelp Business Search, the Sunbird Software Collaboration Project with NTUT, and other side projects. These experiences have provided valuable insights into the software development process and the importance of collaboration and communication in achieving project success.
          <br/><br/>
          I am currently seeking internships or full-time opportunities in software engineering, and I would love to connect with professionals in this field. Please feel free to contact me if you want to learn more about my experiences or discuss potential opportunities. Thank you for taking the time to read my introduction.
        </p>
      </div>
      <Education/> 
      <Experience/>
      <Project></Project> 
    </div>
    </main>
  )
}
