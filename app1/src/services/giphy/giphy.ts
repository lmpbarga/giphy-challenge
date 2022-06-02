import axios, { AxiosResponse } from "axios";
import { constants } from "../../constants/constants";
import { GifModel } from "../../models/gif";

const { GIPHY_API, GIPHY_KEY } = constants;

const getGifRandom = (): Promise<AxiosResponse<GifModel, any>> => {
    return axios.get(`${GIPHY_API}/gifs/random`, {
        params: {
            api_key: GIPHY_KEY,
            tag: "ball",
        },
    });
};

export const giphyService = { getGifRandom };
