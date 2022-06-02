import RefreshIcon from "@mui/icons-material/Refresh";
import { Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { AppContainer, AppInputContainer } from "./app-styles";
import { STRINGS } from "./constants/strings";
import { useDynamicRequestType } from "./hooks/useDynamicRequest/useDynamicRequest";
import { giphyService } from "./services/giphy/giphy";

const { HELLO_GIPHY } = STRINGS;

type AppProps = {
    useDynamicRequest: useDynamicRequestType;
};

const App = ({ useDynamicRequest }: AppProps) => {
    const { loading, data, retry } = useDynamicRequest({
        request: giphyService.getGifRandom,
    });

    const handleRefreshClick = async () => {
        retry();
    };

    return (
        <AppContainer>
            <Typography variant="h1" fontSize={50}>
                {HELLO_GIPHY}
            </Typography>
            <AppInputContainer>
                <Button variant="contained" onClick={handleRefreshClick}>
                    <RefreshIcon />
                </Button>
            </AppInputContainer>
            {loading && <CircularProgress data-testid="loading" />}
            {data && (
                <img
                    src={data}
                    alt="loading..."
                    data-testid="gif"
                    style={{ height: 400 }}
                />
            )}
        </AppContainer>
    );
};

export default App;
