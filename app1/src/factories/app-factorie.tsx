import App from "../app";
import { useDynamicRequestType } from "../hooks/useDynamicRequest/useDynamicRequest";

type AppFactorieProps = {
    useDynamicRequest: useDynamicRequestType;
};

export const makeApp = ({ useDynamicRequest }: AppFactorieProps) => (
    <App useDynamicRequest={useDynamicRequest} />
);
