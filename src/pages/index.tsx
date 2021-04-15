import { Button, Container } from '@material-ui/core';
import Page from '@componenents/Page';

export default function Home() {
	return (
		<Page title="Home" description="Tempo is a simple and efficient Discord music bot">
			<Container>
				<Button color="primary">Hello World</Button>
			</Container>
		</Page>
	);
}
