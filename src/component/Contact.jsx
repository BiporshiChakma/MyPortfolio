
function App() {
  return (
    <>
   
  <section className="custom-container mt-40 mb-10">
        <div className="text-black custom-container2">
          <div className="flex flex-col md:mb-20">
              <div className="titleCenter">
                    <h1 className="text-[40px] font-semibold max-md:text-[30px]">Contact Us</h1>
                    <div className="tborder"></div>
                    <p className="ptext text-wrap text-center">Here you will find some of the personal and clients
                        projects that I created with<br></br>
                        each project containing its own case study</p>
                </div>
        <form className="space-y-5">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Enter Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button className="btn2 text-[1rem]">
                CONTACT
            </button>
          </div>
        </form>
          </div>
      </div>
</section>
    
   
    </>
  )
}

export default App
