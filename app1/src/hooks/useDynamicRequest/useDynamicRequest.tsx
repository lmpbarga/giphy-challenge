import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { GifModel } from "../../models/gif";

export type useDynamicRequestType = ({
    request,
}: useDynamicRequestProps) => useDynamicRequestResponse;

type useDynamicRequestProps = {
    request: () => Promise<AxiosResponse<GifModel, any>>;
};

type useDynamicRequestResponse = {
    loading: boolean;
    data: string;
    retry: () => void;
};

export const useDynamicRequest = ({
    request,
}: useDynamicRequestProps): useDynamicRequestResponse => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState("");
    const [tryAgain, setTryAgain] = useState(false);

    const fetch = async () => {
        setData("");
        setLoading(true);
        const response = await request();
        setData(response.data.data.images.original.url);
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
        data,
        retry: handleRefresh,
    };
};
