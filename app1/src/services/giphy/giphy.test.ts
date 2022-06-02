import { mockedAxios } from "../../jest/axios-mock";
import { giphyService } from "./giphy";

describe("gipht service", () => {
    it("should call gifs random service correctly", async () => {
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
