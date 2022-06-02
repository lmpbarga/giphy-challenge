import RefreshIcon from "@mui/icons-material/Refresh";
import { Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { AppContainer, AppInputContainer } from "./app-styles";
import { STRINGS } from "./constants/strings";
import { useGetGifRandomResponse } from "./hooks/useGetGifRandom/useGetGifRandom";

const { HELLO_GIPHY } = STRINGS;

type AppProps = {
    useGetGifRandom: () => useGetGifRandomResponse;
};

const App = ({ useGetGifRandom }: AppProps) => {
    const { loading, gifUrl, retry } = useGetGifRandom();

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
            {gifUrl && (
                <img
                    src={gifUrl}
                    alt="loading..."
                    data-testid="gif"
                    style={{ height: 400 }}
                />
            )}
        </AppContainer>
    );
};

export default App;
