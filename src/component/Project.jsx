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
                    <p className="ptext text-wrap text-center">Here you will find some of the personal and clients
                        projects that I created with<br></br>
                        each project containing its own case study</p>
                </div>


                <div className='w-full mt-[5rem]'>
                    <div className='flex flex-col lg:gap-16 gap-10'>

                        {/* card 1*/}
                        <div className="flex lg:flex-row max-lg:flex-col justify-center items-center lg:gap-10 gap-4">
                            <div className="lg:w-[40%]">
                                <img src="./img/project.jpg"
                                    className="md:w-[30rem] max-md:w-[20rem] shadow-2xl rounded-lg"></img>
                            </div>

                            <div className="lg:w-[35%] flex flex-col  gap-5">
                                <h1 className="subtitle max-lg:text-center">Project One</h1>
                                <p className="aboutxt text-wrap max-lg:text-center md:px-32 lg:px-0 max-md:px-4">
                                    <span className="leading-7">
                                        lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
                                        amet vestibulum fells. Vivamus facilisis ligula fringillla gravia.

                                    </span>
                                </p>
                                <div className="border-[1px] boder-b border-secondary w-full"></div>
                                <div className='flex max-lg:justify-center'>
                                    <p className="aboutxt">HTML &nbsp; CSS &nbsp; JS &nbsp; Figma &nbsp; React</p>
                                </div>
                                <div className='flex gap-2 text-gray-800 items-center max-lg:justify-center'>
                                    <a href=''>
                                        <Github />
                                    </a>
                                    <a href=''>
                                        <ExternalLink />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* card 2*/}
                        <div className="flex lg:flex-row max-lg:flex-col-reverse justify-center lg:gap-10 gap-4">
                            <div className="lg:w-[35%] ">
                                <div className="w-full flex flex-col gap-5 lg:text-end max-lg:text-center">
                                    <h1 className="subtitle">Project Two</h1>
                                    <p className="aboutxt text-wrap max-lg:text-center md:px-32 lg:px-0 max-md:px-4">
                                        <span className="leading-7">
                                            lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit
                                            amet vestibulum fells. Vivamus facilisis ligula fringillla gravia.

                                        </span>
                                    </p>
                                    <div className="border-[1px] boder-b border-secondary w-full"></div>
                                    <div className='flex lg:justify-end max-lg:justify-center'>
                                        <p className="aboutxt">HTML &nbsp; CSS &nbsp; JS &nbsp; Figma &nbsp; React</p>
                                    </div>
                                    <div className='flex lg:justify-end max-lg:justify-center gap-2 text-gray-800'>
                                        <a href=''>
                                            <Github />
                                        </a>
                                        <a href=''>
                                            <ExternalLink />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-[40%] flex max-lg:justify-center max-lg:items-center lg:pl-12">
                                <img src="./img/project1.jpg"
                                    className="md:w-[30rem] max-md:w-[20rem] shadow-2xl rounded-lg"></img>
                            </div>
                        </div>
                    </div>
                </div>

                {/*others card */}
                <div className='w-full mt-[7rem]'>
                    <div className=''>
                        <div className='flex flex-col justify-center items-center'>
                            <h1 className='text-[24px]'>Other Projects</h1>
                            <div className="tborder"></div>
                        </div>

                        {/* section one*/}
                        <div className='w-full pt-10'>
                            <div className='flex justify-center items-center lg:flex-row max-md:flex-col gap-4'>
                                <div className='md:w-[50%]'>
                                    <div className='w-full flex px-4 gap-4 max-lg:justify-center lg:gap-4 lg:px-10 md:px-4 max-md:flex-col'>
                                        <div className="md:w-[40%]  max-md:justify-center max-md:items-center ">
                                            <img src="./img/img-1.jpg" className="shadow-2xl h-auto w-full max-md:w-[250px]" />
                                        </div>
                                        <div className="md:w-[60%]">
                                            <div className="flex flex-col lg:gap-4 gap-2 ">
                                                <h1 className="subtitle text-[16px]">Project One</h1>
                                                <p className="aboutxt lg:text-[14px] md:text-[12px] text-wrap lg:pl-0">
                                                    <span>
                                                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Praesent sit
                                                        amet vestibulum fells. Vivamus facilisis ligula fringillla
                                                        gravia.
                                                    </span>
                                                </p>
                                                <div className="border border-secondary w-full max-w-[22rem]"></div>
                                                <p className="aboutxt lg:text-[14px] md:text-[12px]">HTML &nbsp; CSS &nbsp; JS &nbsp;
                                                    Figma &nbsp; React</p>
                                                <div className="flex gap-2 text-gray-800">
                                                    <a href="">
                                                        <Github />
                                                    </a>
                                                    <a href="">
                                                        <ExternalLink />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <div className='md:w-[50%]'>
                                    <div className='w-full flex px-4 gap-4 max-lg:justify-center lg:gap-4 lg:px-10 md:px-4 max-md:flex-col'>
                                        <div className="md:w-[40%]">
                                            <img src="./img/img-2.jpg" className="shadow-2xl h-auto w-full max-md:w-[250px]" />
                                        </div>
                                        <div className="md:w-[60%]">
                                            <div className="flex flex-col lg:gap-4 gap-2">
                                                <h1 className="subtitle text-[16px]">Project Two</h1>
                                                <p className="aboutxt lg:text-[14px] md:text-[12px] text-wrap lg:pl-0">
                                                    <span>
                                                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Praesent sit
                                                        amet vestibulum fells. Vivamus facilisis ligula fringillla
                                                        gravia.
                                                    </span>
                                                </p>
                                                <div className="border border-secondary w-full max-w-[22rem]"></div>
                                                <p className="aboutxt lg:text-[14px] md:text-[12px]">HTML &nbsp; CSS &nbsp; JS &nbsp;
                                                    Figma &nbsp; React</p>
                                                <div className="flex gap-2 text-gray-800">
                                                    <a href="">
                                                        <Github />
                                                    </a>
                                                    <a href="">
                                                        <ExternalLink />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>

                         {/* section two*/}
                        <div className='w-full pt-10'>
                            <div className='flex justify-center items-center lg:flex-row max-md:flex-col gap-4'>
                                <div className='md:w-[50%]'>
                                    <div className='w-full flex px-4 gap-4 max-lg:justify-center lg:gap-4 lg:px-10 md:px-4 max-md:flex-col'>
                                        <div className="md:w-[40%]  max-md:justify-center max-md:items-center ">
                                            <img src="./img/img-3.jpg" className="shadow-2xl h-auto w-full max-md:w-[250px]" />
                                        </div>
                                        <div className="md:w-[60%]">
                                            <div className="flex flex-col lg:gap-4 gap-2 ">
                                                <h1 className="subtitle text-[16px]">Project Three</h1>
                                                <p className="aboutxt lg:text-[14px] md:text-[12px] text-wrap lg:pl-0">
                                                    <span>
                                                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Praesent sit
                                                        amet vestibulum fells. Vivamus facilisis ligula fringillla
                                                        gravia.
                                                    </span>
                                                </p>
                                                <div className="border border-secondary w-full max-w-[22rem]"></div>
                                                <p className="aboutxt lg:text-[14px] md:text-[12px]">HTML &nbsp; CSS &nbsp; JS &nbsp;
                                                    Figma &nbsp; React</p>
                                                <div className="flex gap-2 text-gray-800">
                                                    <a href="">
                                                        <Github />
                                                    </a>
                                                    <a href="">
                                                        <ExternalLink />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <div className='md:w-[50%]'>
                                    <div className='w-full flex px-4 gap-4 max-lg:justify-center lg:gap-4 lg:px-10 md:px-4 max-md:flex-col'>
                                        <div className="md:w-[40%]">
                                            <img src="./img/img-1.jpg" className="shadow-2xl h-auto w-full max-md:w-[250px]" />
                                        </div>
                                        <div className="md:w-[60%]">
                                            <div className="flex flex-col lg:gap-4 gap-2">
                                                <h1 className="subtitle text-[16px]">Project Four</h1>
                                                <p className="aboutxt lg:text-[14px] md:text-[12px] text-wrap lg:pl-0">
                                                    <span>
                                                        lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                        Praesent sit
                                                        amet vestibulum fells. Vivamus facilisis ligula fringillla
                                                        gravia.
                                                    </span>
                                                </p>
                                                <div className="border border-secondary w-full max-w-[22rem]"></div>
                                                <p className="aboutxt lg:text-[14px] md:text-[12px]">HTML &nbsp; CSS &nbsp; JS &nbsp;
                                                    Figma &nbsp; React</p>
                                                <div className="flex gap-2 text-gray-800">
                                                    <a href="">
                                                        <Github />
                                                    </a>
                                                    <a href="">
                                                        <ExternalLink />
                                                    </a>
                                                </div>
                                            </div>
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


</>
)
}

export default App
