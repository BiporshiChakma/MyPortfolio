

function App() {
  return (
    <>
   <section className="custom-container mt-40 mb-10">
   <div className="text-black custom-container2 ">
    <div className="w-full flex flex-col justify-center items-center px-4 lg:px-6">
    <div className="titleCenter">
    <h1 className="text-[40px] font-semibold max-md:text-[30px]">ABOUT ME</h1>
    <div className="tborder"></div>
    <p className="ptext text-center">Here you will find more information about me, what I do, and my current skills mostly in terms <br></br> of programming and technology</p>
    </div >

    <div className="flex justify-center flex-wrap pt-20 gap-14 max-md:flex max-md:flex-col max-md:p-10">
        <div className="w-[50%] flex flex-col gap-6 max-md:w-[100%]">
            <h1 className="subtitle text-start">Get to know me!</h1>
          <div className="">
          <p className="aboutxt">
          <span  className="pr-14 leading-7">
          I'm a <span className="font-semibold">Frontend Focused Web Developer</span> building and managing  the  Front-end of Websites and 
          Web Applications that leads to the success of the overall product. Check out some of my work 
          in the <span className="font-semibold">Projects</span>  section.
        <br></br><br></br> <span className="">
         I also like sharing content related to the stuff that I have learned over the years in <span className="font-semibold"> Web 
          Development </span> so it can help other people of the Dev Community. Feel free to Connect or Follow 
          me on my <span className="text-secondary underline font-semibold">Linkedin</span>  and <span className="text-secondary underline font-semibold">Instagram</span>  where I post useful content related to Web Development and 
          Programming.
         </span><br></br><br></br>

          I'm open to <span className="font-semibold">Job</span> opportunities where I can contribute, learn and grow. If you have a good
           opportunity that matches my skills and experience then don't hesitate to <span className="font-semibold">contact me</span>.
          </span>
            </p>
          </div>

        

          
            <button className="btn2 text-[1rem]">
                CONTACT
            </button>
        </div>
        <div className="w-[40%] max-md:w-[100%]">
            <h1 className="subtitle">My Skills</h1>
            <div className="flex flex-wrap gap-6 pt-7">
                <div className="bg-gray-400 bg-opacity-50 text-gray-800 px-3 py-2 rounded-lg">HTML</div>
                <div className="bg-gray-400 bg-opacity-50 text-gray-800 px-3 py-2 rounded-lg">CSS</div>
                <div className="bg-gray-400 bg-opacity-50 text-gray-800 px-3 py-2 rounded-lg">JavaScrtipt</div>
                <div className="bg-gray-400 bg-opacity-50 text-gray-800 px-3 py-2 rounded-lg">React</div>
                <div className="bg-gray-400 bg-opacity-50 text-gray-800 px-3 py-2 rounded-lg">Git</div>
                <div className="bg-gray-400 bg-opacity-50 text-gray-800 px-3 py-2 rounded-lg">Github</div>
                <div className="bg-gray-400 bg-opacity-50 text-gray-800 px-3 py-2 rounded-lg">Reponsive Design</div>
                <div className="bg-gray-400 bg-opacity-50 text-gray-800 px-3 py-2 rounded-lg">SEO</div>
                <div className="bg-gray-400 bg-opacity-50 text-gray-800 px-3 py-2 rounded-lg">Tailwindcss</div>
                <div className="bg-gray-400 bg-opacity-50 text-gray-800 px-3 py-2 rounded-lg">Bootstrap</div>
                <div className="bg-gray-400 bg-opacity-50 text-gray-800 px-3 py-2 rounded-lg">PHP</div>
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
