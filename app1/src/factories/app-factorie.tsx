import App from "../app";
import { useGetGifRandomResponse } from "../hooks/useGetGifRandom/useGetGifRandom";

type AppFactorieProps = {
    useGetGifRandom: () => useGetGifRandomResponse;
};

export const makeApp = ({ useGetGifRandom }: AppFactorieProps) => (
    <App useGetGifRandom={useGetGifRandom} />
);
