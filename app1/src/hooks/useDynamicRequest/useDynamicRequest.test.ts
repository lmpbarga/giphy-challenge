import { act, renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import { useDynamicRequest } from "./useDynamicRequest";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("useLoginPresenter", () => {
    it("should call request set data and set loader false", async () => {
        const mockGifUrl = "gif.com";

        mockedAxios.get.mockResolvedValue({
            data: {
                data: {
                    images: {
                        original: {
                            url: "gif.com",
                        },
                    },
                },
            },
        });

        const mockRequest = jest.fn(() => axios.get("first"));

        const { result, waitForNextUpdate } = renderHook(() =>
            useDynamicRequest({ request: mockRequest })
        );

        await waitForNextUpdate();

        expect(mockRequest).toBeCalledTimes(1);
        expect(result.current.data).toBe(mockGifUrl);
        expect(result.current.loading).toBeFalsy();
    });

    it("should call request again when execute retry fuction", async () => {
        mockedAxios.get.mockResolvedValue({
            data: {
                data: {
                    images: {
                        original: {
                            url: "gif.com",
                        },
                    },
                },
            },
        });

        const mockRequest = jest.fn(() => axios.get("retry"));

        const { result, waitForNextUpdate } = renderHook(() =>
            useDynamicRequest({ request: mockRequest })
        );

        await waitForNextUpdate();

        act(() => {
            result.current.retry();
        });

        expect(mockRequest).toBeCalledTimes(2);
    });
});
