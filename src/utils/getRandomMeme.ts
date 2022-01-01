import axios from "axios";
import { useState } from "react";

const UseMeme = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const [image, setImage] = useState<string>("");
  const [postURL, setPostURL] = useState<string>("");
  const [postTitle, setPostTitle] = useState<string | null>(null);

  const reset = () => {
    setIsLoading(() => false);
    setImage(() => "");
    setPostURL(() => "");
    setPostTitle(() => null);
  };

  const fetchMeme = async () => {
    const uriList: string[] = [
      "https://meme-api.herokuapp.com/gimme/196/1",
      "https://meme-api.herokuapp.com/gimme/691/1",
    ];

    var uri = uriList[Math.floor(Math.random() * uriList.length)];

    let response;
    try {
      response = (await axios.get(uri)).data;
    } catch (err) {
      response = null;
    }
    return response;
  };

  const getRandomMeme = async () => {
    setIsLoading(() => true);
    let memeResponse = await fetchMeme();
    if (!memeResponse) {
      reset();
      return;
    }
    let imageURL = memeResponse.memes[0].preview.pop();
    let postURL = memeResponse.memes[0].postLink;
    let imageTitle = memeResponse.memes[0].title;

    if (!(imageURL && postURL && imageTitle)) {
      reset();
      return;
    }

    setImage(imageURL);
    setPostURL(postURL);
    setPostTitle(imageTitle);

    setIsLoading(false);
  };

  return { image, isLoading, getRandomMeme, postURL, postTitle };
};

export default UseMeme;
