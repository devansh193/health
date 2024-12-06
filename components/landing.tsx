import Button from "./ui/button";

export default function Landing() {
  return (
    <div className="w-full overscroll-none">
      <div className="h-[450px] flex items-center justify-center bg-white p-4 m-4 rounded-xl">
        <h1 className="text-black font-bold text-xl">
          <Button variant={"secondary"} size={"sm"}>
            Link
          </Button>
        </h1>
      </div>
      <div className="h-[450px] flex items-center justify-center bg-white p-4 m-4 rounded-xl">
        <h1 className="text-black font-bold text-xl">Box 2</h1>
      </div>
    </div>
  );
}
