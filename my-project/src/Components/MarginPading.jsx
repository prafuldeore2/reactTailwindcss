import { Link } from "react-router-dom"
export const MarginPading=()=>{


    return(
        <>
        <main>
            <ul className="flex space-x-4 border-2 border-red-700 
            mx-2 my-3 mt-2 mb-2 
            px-2 py-2 pt-3 pb-4 " >
                <Link to="https://www.geeksforgeeks.org/how-to-redirect-to-another-page-in-reactjs/" >
                <li  >Home</li>
                </Link>
                <li className="text-[20px]">About</li> 
                <li>Services</li>
                <li>Contact</li>
            </ul>

            <h1>Buttons</h1>
            <button class="rounded-lg bg-teal-500 p-3">Save Changes</button>

             <div className="DivideWidth border border-2 border-red-700 grid grid-rows-3" >
              <div>One</div>
              <div>Two</div>
              <div>Three</div>
             </div>
        </main>
        </>
         )
}