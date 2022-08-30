export const Linkdin = () => {
  return (
    <div className="outerDiv h-full bg bg-gray-100 relative " >
      <div className="nav">
        <img
          src="https://www.veloceinternational.com/wp-content/uploads/2022/04/Linkedin-Logo.png"
          className="w-40 mx-16"
          alt=""
        />
        <div className="main w-auto">
          <div className="heading font text-4xl mb-4 ">
            Make the most of your professional life
          </div>

          <div className="form px-8 border-2 flex flex-col w-1/3 m-auto items-start rounded-md bg-white ">
            <label className="text-gray-500  mt-5">
              Email or phone Number
            </label>
            <input
              type="text"
              className="border border-black  outline-indigo-900 rounded-md w-full  h-8 mb-5"
            />
            <label className="text-gray-500 ">
              Password(6 or more charachters)
            </label>
            <input
              type="text"
              className="border  border-black  outline-indigo-900  rounded-md w-full h-8 mb-5"
            />
            <span className="mb-6">
              By clicking Agree & Join, you agree to the LinkedIn{" "}
              <span className="text-blue-700 hover:underline">
                User Agreement, Privacy Policy,
              </span>{" "}
              and{" "}
              <span className="text-blue-700 hover:underline">
                Cookie Policy.
              </span>{" "}
            </span>
            <button className="btn bg-blue-700 font-bold text-xl text-white rounded-full w-full h-12 mb-5 hover:bg-indigo-900 ">
              {" "}
              Agree & Join
            </button>

            <div className="orline flex items-center w-full text-center m-auto my-4">
              <div className="border-t-2 border-black w-full mr-10 m-auto"></div>
              or
              <div className="border-t-2 border-black w-full ml-10 m-auto"></div>
            </div>

            <div className="g-btn border-2 flex rounded-full justify-evenly w-full h-12 mb-5  cursor-pointer bg-gray-50">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv_Wz5D2mokusUFzXELJ7nobGMTaUVzQkYspyUgoxEiu0KLjFylKle8UJooBW2euAMAqs&usqp=CAU"
                className="w-10 ml-4"
                alt=""
              />
              <span
                className="font-bold items-center justify-center m-auto"
              >
                Signup with Google
              </span>
            </div>

            <div className="already w-full my-4 ">
              <span className="mb-6">
                Already on LinkedIn?
                <span className="text-blue-700 hover:underline font-bold cursor-pointer">
                  Sign in
                </span>{" "}
              </span>
            </div>

            <div className="already w-full  -mb-12" >
              <span className="mb-6">
                Looking to create a page for a business?
                <span className="text-blue-700 hover:underline font-bold cursor-pointer">
                  Get Help
                </span>{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
      
     
    </div>

    
  );
};
