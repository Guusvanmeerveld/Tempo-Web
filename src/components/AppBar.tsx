import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import Link from 'next/link';

import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { BrightnessHigh, GitHub } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},

		title: {
			flexGrow: 1,
		},
	})
);

export default function Nav() {
	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>
				<Box className={classes.title}>
					<Link href="/">
						<img src="/img/logo.png" alt="" height={48} width={48} />
					</Link>
				</Box>

				<IconButton color="inherit" href="https://github.com/Guusvanmeerveld/Tempo-Web">
					<GitHub />
				</IconButton>

				<IconButton color="inherit">
					<BrightnessHigh />
				</IconButton>
				<Button color="inherit" href="/issues">
					Issues
				</Button>
				<Button color="inherit" href="/commands">
					Commands
				</Button>
				<Button color="inherit" href="/login">
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
}
