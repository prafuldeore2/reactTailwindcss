export const Microsoft = () => {
  return (
    <div className="navbar flex justify-between items-center p-4">
      <div className="flex justify-center items-center  md:hidden">
        <div className="hanmburger inline-block p-4 cursor-pointer">
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
          <div className="line h-0.5 w-6 my-1 bg-black"></div>
        </div>
        <div className="search">Search Box</div>
      </div>
      <div className="logo w-52"> <img src="https://www.fargomoorhead.org/wp-content/uploads/2020/05/Microsoft-1.png" alt="sd" /> </div>
      <div className="cart">Cart Account</div>

    </div>
  );
};
