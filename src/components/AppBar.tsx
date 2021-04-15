import { AppBar, Toolbar, IconButton, Typography, Button } from '@material-ui/core';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			flexGrow: 1,
		},
		menuButton: {
			marginRight: theme.spacing(2),
		},
		title: {
			flexGrow: 1,
		},
	})
);

const Nav = () => {
	const classes = useStyles();

	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" className={classes.title}>
					Tempo
				</Typography>
				<Button color="inherit">Report issues</Button>
				<Button color="inherit">Commands</Button>
				<Button color="inherit">Login with Discord</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Nav;
