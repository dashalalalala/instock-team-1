import { extendTheme } from "@chakra-ui/react";
import "./partials/_variables.scss";

const theme = extendTheme({
	fonts: {
		body: "Titillium Web Regular",
		heading: "Titillium Web Semi Bold",
	},
	colors: {
		instock: {
			black: "#13182C",
			indigo: "#2E66E5",
		},
		white: "#FFFFFF",
		slate: "#5C667E",
		cloud: "#BDC5D5",
		graphite: "#232940",
		lightGrey: "#F7F8F9",
		green: "#158463",
		red: "#C94515",
	},
	breakpoints: {
		base: "0px",
		md: "767px",
		lg: "1280px",
	},
});

export default theme;
