import axios from "axios";
import { giphyService } from "./giphy";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("useLoginPresenter", () => {
    it("should call request set data and set loader false", async () => {
        mockedAxios.get.mockImplementation((url, config) => {
            return Promise.resolve({ url, config });
        });

        const response = await giphyService.getGifRandom();

        const defaultConfig = {
            url: "https://api.giphy.com/v1/gifs/random",
            config: {
                params: {
                    api_key: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
                    tag: "ball",
                },
            },
        };

        expect(response).toStrictEqual(defaultConfig);
    });
});
