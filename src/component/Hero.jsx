import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Github } from 'lucide-react';
import { Twitter } from 'lucide-react';
function App() {
  return (
    <>
    <section className="custom-container h-[35rem]">
    <div className=" text-black custom-container2 ">
      <div className="w-full flex ">
          <div className="w-[5%] ">
               <div className='w-20 flex flex-col bg-white justify-center items-center gap-6 shadow-2xl rounded-xl h-fit py-5 max-md:invisible'>
               <a className='abtn'><Linkedin /></a>
                <a className='abtn'> <Facebook /></a>
                <a className='abtn'> <Github /></a>
                <a className='abtn'><Twitter /></a>
               </div>
                
          </div>
          <div className="w-[95%] flex justify-center items-center text-center">
            <div className="flex flex-col gap-10">
                <h1 className="text-[60px] font-Rubik font-semibold">Hey, I'm Biporshi</h1>
                <p className="text-[23px] font-Rubik">A Result-Oriented Web Developer building and managing Websites and Web <br></br> Applications that leads to the success of the overall product</p>
                <div>
                <div className="flex gap-4 max-md:invisible justify-center">
              <button className="btn2 px-2">Resume</button>
              <button className="btn">Hire Me</button>
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
