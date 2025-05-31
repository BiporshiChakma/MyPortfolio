import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';

function App() {
    return (
      <>
        <section className="custom-container ">
          <div className=" text-white  custom-container2 bg-black">
          <div className="w-[70rem] items-center pt-[5rem]">
               <div className='flex justify-center'>
                 <div className="w-[90%]  border-b-2 border-white pb-16">
                    <div className='flex justify-between md:flex-row max-md:flex-col-reverse gap-4'>
                        <div className='flex flex-col gap-4'>
                        <h1 className="subtitle">Biporshi Chakma</h1>
                        <p className="aboutxt text-white text-[12px] text-wrap">
                            A Frontend focused Web Developer building the Frontend of Websites and <br></br>
                             Web Applications that leads to the success of the overall product
                        </p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h1 className="subtitle">Social</h1>
                        <div className='flex gap-2'>
                              <a className=''><Linkedin /></a>
                                <a className=''> <Facebook /></a>
                                <a className=''> <Github /></a>
                                <a className=''><Twitter /></a>
                        </div>
                    </div>
                    </div>
                    
                </div>
               </div>
             <p className='text-center py-6'>© Copyright 2025 . Made by Biporshi Chakma</p>
          </div>
          
          </div>
        </section>
      </>
    )
  }
  
  export default App
  