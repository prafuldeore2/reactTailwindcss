export const Scaler = () => {
  return (
    <>
      <div className="container w-full h-full m-auto">
        <nav className=" border-red-500 flex justify-between">
          <div className="left  border-blue-500 items-center p-3">
            <img
              src="https://assets.scaler.com/assets/scaler/svg/logo-by-ib-056ab22f1a6547d6d9a6896f0048a4cb5d4c6cc7bfa6f2a0f27bb8e265c95bd3.svg.gz"
              alt=""
              className="w-24   border-red-500  "
            />
          </div>
          <div className="right  border-red-500 items-center justify-center">
            <div className=" hanmburger inline-block p-4 cursor-pointer ">
              <div className="line h-1 rounded-sm w-6 my-1 bg-blue-800"></div>
              <div className="line h-1 rounded-sm w-6 my-1 bg-blue-800"></div>
              <div className="line h-1 rounded-sm w-6 my-1 bg-blue-800"></div>
            </div>


          </div>
        </nav>

        <main>
          <div className="one image">
            <img
              src="https://i.imgur.com/8cL2qVi.jpg"
              alt=""
              className="xl:w-full "
            />
          </div>

          <div
            className="two warning  border-red-500 flex items-start mx-8 my-7
          p-5 bg-red-50 rounded-md
          "
          >
            <img
              src="https://assets.scaler.com/assets/scaler/svg/warning_info_icon-41ed526dc214647c5ccfadd9dc34cf68af080900bdfcd84244f360292e92d858.svg.gz"
              alt=""
            />
            <div className="warn text-red-700  font-normal text-left mx-2">
              This event is not applicable in your region.To view events of your
              region please{" "}
              <span className="text-blue-500 underline">click here</span>
            </div>
          </div>

          <div className="three  border-red-500 mx-8 my-7">
            <div className="how text-3xl font-extrabold  text-gray-500 text-left p-1 leading-10">
              How to build an E-Commerce Website with React?
            </div>

            <div className="lower text-left text-sm p-1 order  border-blue-500 text-gray-400 ">
              <div className="line-1 my-2">
                {" "}
                <span className="font-bold">STARTS ON: </span>September 1,2022
                10:30 AM(EDT)
              </div>
              <div className="line-2 my-2">
                {" "}
                <span className="font-bold">ENDS ON:</span> September 1,2022
                1:30 PM(EDT)
              </div>
              <div className="line-3 flex  my-2">
                <div className="left">
                  <span className="font-bold">VENUE:</span> Online
                </div>
                <div className="right ml-24">
                  <span className="font-bold ">Duaration:</span> 3 hours
                </div>
              </div>
              <hr className="my-8" />
            </div>
          </div>

          <div className="four mx-8 -my-7">
            <div className="one  border-red-800">
              <div
                className="heading   border-red-600 text-2xl font-extrabold text-left p-1 leading-10
              bg-blue-50 text-blue-400 rounded-md
              "
              >
                About this Masterclass
              </div>
              <p className="passage  border-red-600 text-left text-gray-400 text-sm mt-3">
                In the past few years, E-commerce platforms like Amazon and
                Flipkart have become synonymous with online shopping. Everything
                from a nail to an aeroplane ticket can be bought on these
                platforms. But how do these websites work seamlessly without
                crashing all the time? What makes the user experience on these
                platforms smooth like butter? Join{" "}
                <span className="font-bold">
                  Siddharth Taneja Free Masterclass
                </span>{" "}
                on <span className="font-bold">1st September, Thursday</span> at{" "}
                <span className="font-bold">8pm</span> and learn{" "}
                <span>how to build an E-Commerce Website with React.</span>
              </p>
            </div>

            <div className="two  border-red-800 mt-4">
              <div
                className="heading   border-red-600 text-2xl font-extrabold text-left p-1 leading-10
              bg-blue-50 text-blue-400 rounded-md
              "
              >
                What you will gain from this Masterclass
              </div>
              <p className="passage pl-2 border-red-600 text-left text-gray-400 text-sm mt-3">
                <h3>
                  &#x2022; Learn how to build cross-platform apps using React
                  from scratch
                </h3>
                <h3>&#x2022; Learn the basic working of React library</h3>
                <h3>
                  &#x2022; Learn how to break down complex problem statements
                </h3>
              </p>
            </div>
            <div className="three  border-red-800 mt-4">
              <div
                className="heading   border-red-600 text-2xl font-extrabold text-left p-1 leading-10
              bg-blue-50 text-blue-400 rounded-md
              "
              >
                Meet Siddharth Taneja (LinkedIn)
              </div>
              <p className="passage pl-2 border-red-600 text-left text-gray-400 text-sm mt-3">
                <h3>&#x2022; Previously worked at http://Media.net</h3>
                <h3>&#x2022; Frontend Team Lead at Scaler Academy</h3>
                <h3>&#x2022; Top-rated Full Stack instructor</h3>
              </p>
            </div>

            <div className="four  border-red-800 mt-4">
              <div
                className="heading   border-red-600 text-2xl font-extrabold text-left p-1 leading-10
              bg-blue-50 text-blue-400 rounded-md
              "
              >
                Learn the Pre-requisites of this Masterclass for FREE
              </div>
              <div className="mainBox  flex flex-col m-auto items-center text-gray-400 my-4 
              sm:flex-row sm:m-auto sm:justify-center sm:mt-2
              ">
                <div className="js  w-56 my-1 shadow-xl p-1">JavaScript</div>
                <div className="css  w-56 my-1 shadow-xl p-1">CSS</div>
              </div>
              <p className="passage  border-red-600 text-left text-gray-400 text-sm mt-3">
                <span className="font-bold">Certificates -</span>{" "}  All attendees get certificates from Anshuman
                Singh and Scaler Academy! Please be careful while entering your
                details while registering since they will go on your
                Certificates
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
