const MainPage = (): JSX.Element => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center max-w-xl w-11/12">
        <div className="aspect-video w-full border border-gray"></div>
        <div className="mt-2 w-full flex justify-center">
          <input
            type="text"
            placeholder="type keywords here"
            className="mr-2 placeholder:text-sm pl-2 p-[0.325rem] border border-gray rounded flex-1"
          />
          <button className="text-sm text-white bg-red-700 p-[0.5rem] border border-red-700 rounded transition-all hover:bg-white hover:text-red-700">
            Find Random Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
