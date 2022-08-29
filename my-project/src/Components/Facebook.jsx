import {Link} from "react-router-dom"
export const Facebook = () => {
  return (
    <div className="outerContainer h-full border-2 border-red-600 bg-slate-100">
        
    
      <div className="container   mt-48 flex mx-auto gap-1  
      items-center justify-center 
       " >
        <div className="left w-1/3  mx-14" >
          <img
            className="w-80 h-30"
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="FB"
          />
          <p className="text-3xl mx-8 text-left">
            Facebook helps you connect and share with the people in your life.
          </p>
        </div>

        
        <div className="right flex flex-col border-2 bg-white p-8 rounded-lg text-lg relative" >
          <input className="outline-blue-600  px-8 h-12 my-2 border-2 border-gray-400  rounded-lg" type="text" placeholder="Email adress or the phone number "  />
          <input className="outline-blue-600 px-8 h-12 my-2 border-2 border-gray-400 rounded-lg"  type="password" placeholder="Password" />
          <button className= "h-12 mt-2 bg-blue-500 rounded-md font-bold text-white hover:bg-blue-700">Log In</button>
          <span className="mt-3 text-blue-500 cursor-pointer hover:underline my-4">Forgotten Password</span>
          <hr />
          <button className="btn h-12 w-fit border-2 rounded-lg item mx-auto bg-green-500  hover:bg-green-700
          font-bold text-white px-5 my-5
          ">Create New Account</button>
        <span className="-bottom-14 absolute text-sm"> <span className="font-bold hover:underline cursor-pointer">Create a Page</span>  for a celebrity, brand or business.</span>

        </div>
      </div>
      <Link to="/microsoft"><div className="micro underline absolute -bottom-1">Goto Microsoft</div></Link>
      <Link to="/linkdin"><div className="micro underline absolute -bottom-1.1">Goto LinkdIn</div></Link>

      </div>
  );
};
