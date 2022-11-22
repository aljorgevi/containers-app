import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../src/config/materialTheme";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
