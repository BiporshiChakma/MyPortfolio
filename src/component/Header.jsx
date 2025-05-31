

function App() {
    return (
      <>
        <section className="custom-container ">
          <div className=" text-black custom-container2">
          
         <div className="w-full md:flex md:justify-between bg-white shadow-2xl md:py-4 md:px-4 flex justify-between items-center px-6">
         <div className="flex justify-center items-center gap-4">
              <img src=".\img\mf-avatar.svg" className="w-10"></img>
              <h1 className="font-semibold md:text-[1.2rem] sm:text-[15px]">Biporshi Chakma</h1>
            </div>
            <div className="max-md:hidden">
              <ul className="flex gap-6 font-Rubik text-[1.2rem] ">
                <li className="border-b-2 border-secondary ">Home</li>
                <li>About</li>
                <li>Expariance</li>
                <li>Project</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="hidden max-md:block">
                <img src="./img/ham-menu.svg"></img>
            </div>
         </div>
           
          </div>
        </section>
      </>
    )
  }
  
  export default App
  