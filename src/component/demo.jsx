import { ExternalLink } from 'lucide-react';
import { Github } from 'lucide-react';
function App() {
  return (
    <>
    <section className="custom-container mt-40 mb-10">
   <div className="text-black custom-container2">
    <div className="flex flex-col justify-center items-center">
    <div className="titleCenter">
    <h1 className="text-[40px] font-semibold max-md:text-[30px]">Feature Projects</h1>
    <div className="tborder"></div>
    <p className="ptext">Here you will find some of the personal and clients projects that I created with<br></br>
        each project containing its own case study</p>
    </div >
    

    <div className="mt-[5rem]  w-full">
        <div className="flex max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-6">
            <div className="w-[50%] flex justify-center">
                    <img src="./img/31343C.svg" className="w-[30rem] h-[15rem]"></img>
            </div>
         
            <div className="w-[50%] flex flex-col gap-4 max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
                <h1 className="subtitle">Project Name</h1>
                <p className="aboutxt w-[28rem]">
                    <span className="leading-7">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.  Praesent sit 
                     amet vestibulum fells. Vivamus facilisis  ligula   fringillla gravia.
                     
                    </span>
                </p>
                <div className="border-[1px] boder-b border-secondary w-[30rem]"></div>
                <p className="aboutxt">HTML &nbsp;  CSS &nbsp;  JS &nbsp;  Figma &nbsp;  React</p>
                <div className='flex gap-2 text-gray-800'>
                <a href=''><Github /></a>
                <a href=''><ExternalLink /></a>
                </div>
            </div>
        </div>
    </div>

    <div className="mt-[5rem]  w-full">
        <div className="flex justify-end items-end max-md:flex max-md:flex-col-reverse max-md:justify-center max-md:items-center max-md:gap-6">
         
            <div className="w-[50%] flex flex-col gap-4 max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
              <div className='flex justify-end'>
              <h1 className="subtitle justify">Project Name</h1>
              </div>
               <div className='flex justify-end'>
               <p className="aboutxt w-[28rem]">
                    <span className="leading-7">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.  Praesent sit 
                     amet vestibulum fells. Vivamus facilisis  ligula   fringillla gravia.
                     
                    </span>
                </p>
               </div>
                <div className='flex justify-end'>
                <div className="border-[1px] boder-b border-secondary w-[30rem]"></div>
                </div>
                <div className='flex justify-end'>
                <p className="aboutxt">HTML &nbsp;  CSS &nbsp;  JS &nbsp;  Figma &nbsp;  React</p>
                </div>
                <div className='flex gap-2 text-gray-800 justify-end'>
                <a href=''><Github /></a>
                <a href=''><ExternalLink /></a>
                </div>
            </div>
            <div className="w-[50%] flex justify-center">
                    <img src="./img/31343C.svg" className="w-[30rem] h-[15rem]"></img>
            </div>
        </div>
    </div>

    <div className='pt-36 pb-24 flex flex-col justify-center items-center'>
        <h1 className='text-[24px]'>Other Projects</h1>
        <div className="tborder"></div>
    </div>


    <div className='w-full'>
    <div className='flex lg:flex-row  lg:justify-between gap-4 max-sm:flex-col sm:flex-col sm:justify-center sm:items-center'>
        {/* Project Card 1 */}
  <div className="max-lg:[35%] lg:[40%] bg-red-300">
   <div className='w-full flex px-4 gap-4 max-lg:justify-center lg:gap-4 lg:px-10'>
     <div className="w-[40%] ">
      <img src="./img/img-1.jpg" className=" h-auto w-full" />
    </div>
    <div className="w-[60%] ">
      <div className="flex flex-col gap-4">
        <h1 className="subtitle text-[16px]">Project Name</h1>
        <p className="aboutxt text-[14px] text-wrap">
         <span>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet vestibulum fells. Vivamus  facilisis ligula fringillla gravia.
         </span>
        </p>
        <div className="border border-secondary w-full max-w-[22rem]"></div>
        <p className="aboutxt text-[14px]">HTML &nbsp; CSS &nbsp; JS &nbsp; Figma &nbsp; React</p>
        <div className="flex gap-2 text-gray-800">
          <a href=""><Github /></a>
          <a href=""><ExternalLink /></a>
        </div>
      </div>
    </div>
   </div>
  </div>

      {/* Project Card 2 */}

        <div className="max-lg:[35%] lg:[40%]">
   <div className='w-full flex px-4 gap-4 lg:gap-4 lg:px-10'>
     <div className="w-[40%] ">
      <img src="./img/img-1.jpg" className=" h-auto w-full" />
    </div>
    <div className="sm:[50%] w-[60%] ">
      <div className="flex flex-col gap-4">
        <h1 className="subtitle text-[16px]">Project Name</h1>
        <p className="aboutxt text-[14px] text-wrap">
         <span>
          lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
          amet vestibulum fells. Vivamus  facilisis ligula fringillla gravia.
         </span>
        </p>
        <div className="border border-secondary w-full max-w-[22rem]"></div>
        <p className="aboutxt text-[14px]">HTML &nbsp; CSS &nbsp; JS &nbsp; Figma &nbsp; React</p>
        <div className="flex gap-2 text-gray-800">
          <a href=""><Github /></a>
          <a href=""><ExternalLink /></a>
        </div>
      </div>
    </div>
   </div>
  </div>
 
    </div>
    </div>

    
    </div>
    </div>
    </section>



     <div className='flex flex-col justify-center items-center'>
      <div className="mt-[5rem]  w-full">
        <div className="flex justify-center items-center">
            <div className="lg:w-[50%] md:w-[40%] flex justify-center">
                    <img src="./img/project.jpg" className="w-[30rem] h-[15rem]"></img>
            </div>
         
            <div className="lg:w-[50%] md:w-[40%] flex flex-col gap-4 max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
                <h1 className="subtitle">Project Name</h1>
                <p className="aboutxt text-wrap ">
                    <span className="leading-7 lg:pr-56">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.  Praesent sit 
                     amet vestibulum fells. Vivamus facilisis  ligula   fringillla gravia.
                     
                    </span>
                </p>
                <div className="border-[1px] boder-b border-secondary w-[28rem]"></div>
                <p className="aboutxt">HTML &nbsp;  CSS &nbsp;  JS &nbsp;  Figma &nbsp;  React</p>
                <div className='flex gap-2 text-gray-800'>
                <a href=''><Github /></a>
                <a href=''><ExternalLink /></a>
                </div>
            </div>
        </div>
    </div>

    <div className="mt-[5rem]  w-full">
        <div className="flex lg:justify-center lg:items-center">
         
            <div className="lg:w-[50%] md:w-[40%] flex flex-col gap-4 max-md:w-full max-md:flex max-md:justify-center max-md:items-center">
              <div className='flex justify-end'>
              <h1 className="subtitle justify">Project Name</h1>
              </div>
               <div className='flex justify-end'>
               <p className="aboutxt lg:pl-56 text-wrap">
                    <span className="leading-7">
                    lorem ipsum dolor sit amet, consectetur adipiscing elit.  Praesent sit 
                     amet vestibulum fells. Vivamus facilisis  ligula   fringillla gravia.
                     
                    </span>
                </p>
               </div>
                <div className='flex justify-end'>
                <div className="border-[1px] boder-b border-secondary w-[28rem]"></div>
                </div>
                <div className='flex justify-end'>
                <p className="aboutxt">HTML &nbsp;  CSS &nbsp;  JS &nbsp;  Figma &nbsp;  React</p>
                </div>
                <div className='flex gap-2 text-gray-800 justify-end'>
                <a href=''><Github /></a>
                <a href=''><ExternalLink /></a>
                </div>
            </div>
            <div className="w-[50%] flex justify-center">
                    <img src="./img/project1.jpg" className="w-[30rem] h-[15rem]"></img>
            </div>
        </div>
    </div>
    </div>
    
    
    </>
      )
}

export default App