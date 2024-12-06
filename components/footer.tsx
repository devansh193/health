export const Footer = () => {
  return (
    <div className="h-[250px] flex items-center justify-between bg-yellow-200 mx-4 mb-4 rounded-xl gap-x-4 py-4 px-2">
      <div className="flex flex-col items-center justify-center h-full rounded-xl bg-red-200 w-full">
        <h1>About</h1>
        <h2>This</h2>
        <h2>That </h2>
      </div>
      <div className="bg-green-200 w-full flex flex-col items-center justify-center h-full rounded-xl">
        box2
      </div>
      <div className="bg-blue-200 w-full flex flex-col items-center justify-center h-full rounded-xl">
        box3
      </div>
    </div>
  );
};
