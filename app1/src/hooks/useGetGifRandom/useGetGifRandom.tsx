import { useEffect, useState } from "react";
import { giphyService } from "../../services/giphy";

export type useGetGifRandomResponse = {
    loading: boolean;
    gifUrl: string;
    retry: () => void;
};

export const useGetGifRandom = (): useGetGifRandomResponse => {
    const [loading, setLoading] = useState(true);
    const [gifUrl, setGifUrl] = useState("");
    const [tryAgain, setTryAgain] = useState(false);

    const fetch = async () => {
        setGifUrl("");
        setLoading(true);
        const response = await giphyService.getGifRandom();
        setGifUrl(response.data.data.images.original.url);
        setLoading(false);
    };

    const handleRefresh = () => {
        setTryAgain((prev) => !prev);
    };

    useEffect(() => {
        fetch();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tryAgain]);

    return {
        loading,
        gifUrl,
        retry: handleRefresh,
    };
};
