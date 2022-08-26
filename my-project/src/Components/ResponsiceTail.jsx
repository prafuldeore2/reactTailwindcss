export const Responsive = () => {
  return (
    <>
      <h1 className="mb-6 border-2">Responsive</h1>
      <ul
        className="grid grid-cols-1 xsm:bg-green-900 sm:grid-cols-2 gap-3 lg:grid-cols-3 xl:grid-cols-4 bg-black text-white "
      >
        <li className="border-2 border-red-500 h-10">One</li>
        <li className="border-2 border-red-500 h-10">Two</li>
        <li className="border-2 border-red-500 h-10">Theee</li>
        <li className="border-2 border-red-500 h-10">Four</li>
        <li className="border-2 border-red-500 h-10">five</li>
        <li className="border-2 border-red-500 h-10 lg:h-20 w-[100]">Six</li>
        <li className="border-2 border-red-500 h-10 lg:hidden">Seven</li>

        <li className="border-2 border-red-500 h-10">Eight</li>
        <li className="border-2 border-red-500 h-10">Nine</li>
        <li className="border-2 border-red-500 h-10">Ten</li>

      </ul>
    </>
  );
};
