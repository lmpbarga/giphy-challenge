import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { makeApp } from "./factories/app-factorie";
import { useDynamicRequestType } from "./hooks/useDynamicRequest/useDynamicRequest";

type setupProps = {
    loading?: boolean;
    data?: string;
    retry?: () => void;
};

const setup = ({
    loading = true,
    data = "",
    retry = jest.fn(),
}: setupProps) => {
    const mockUseGetGifRandom: useDynamicRequestType = () => ({
        loading,
        data,
        retry,
    });

    const App = () => makeApp({ useDynamicRequest: mockUseGetGifRandom });

    return <App />;
};

describe("<App />", () => {
    test("should be render loading in inital state", () => {
        render(setup({}));

        const loading = screen.getByTestId("loading");

        expect(loading).toBeInTheDocument();
    });

    test("should be render gif when have  gif url", () => {
        render(setup({ loading: false, data: "gifUrl.com" }));

        const gif = screen.getByTestId("gif");

        expect(gif).toBeInTheDocument();
    });

    test("should be call retry when click in refresh button", () => {
        const mockRetry = jest.fn();

        render(setup({ loading: false, data: "gifUrl.com", retry: mockRetry }));

        const resfreshButton = screen.getByRole("button");

        userEvent.click(resfreshButton);

        expect(mockRetry).toBeCalledTimes(1);
    });
});
