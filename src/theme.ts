import { createMuiTheme } from '@material-ui/core/styles';
import 'fontsource-roboto';

const theme = createMuiTheme({
	typography: {
		fontFamily: [
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(','),
	},
	palette: { primary: { main: '#007cff' }, type: 'dark' },
});

export default theme;
