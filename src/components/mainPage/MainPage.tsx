import UseMeme from "../../utils/getRandomMeme";

const MainPage = (): JSX.Element => {
  const { image, isLoading, getRandomMeme, postTitle, postURL } = UseMeme();

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col items-center max-w-xl w-11/12">
        <div className="text-center text-l w-full bg-orange-500 text-white rounded-t-md p-2">
          {postTitle ? (
            <a href={postURL}>
              <div className=" flex justify-center items-center hover:underline">
                {postTitle}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          ) : (
            "Random meme"
          )}
        </div>
        <div className="w-full border border-gray flex flex-col justify-center items-center h-96">
          {image && (
            <a href={image}>
              <img src={image} alt="meme" className="h-96 object-contain" />
            </a>
          )}
        </div>
        <div className="mt-4 w-full flex justify-center">
          <button
            className="flex-1 text-sm text-white bg-orange-500 p-[0.5rem] border border-orange-500 rounded transition-all hover:bg-white hover:text-orange-500"
            onClick={getRandomMeme}
          >
            {isLoading ? "Loading..." : "Get Random Meme"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
