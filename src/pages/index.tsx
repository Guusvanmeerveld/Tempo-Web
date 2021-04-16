import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Page from '@componenents/Page';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		logo: {
			width: '50%',
			minWidth: '20rem',
			maxWidth: '45rem',
		},

		root: {
			height: '75vh',
		},
	})
);

export default function Home() {
	const classes = useStyles();

	return (
		<Page title="Home" description="Tempo is a simple and efficient Discord music bot">
			<Grid container justify="center" alignItems="center" className={classes.root}>
				<img src="/img/logo-banner.png" alt="" className={classes.logo} />
			</Grid>
		</Page>
	);
}
