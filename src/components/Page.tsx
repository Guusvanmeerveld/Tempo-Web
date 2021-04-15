import AppBar from '@componenents/AppBar';
import Head from 'next/head';

const Page = ({
	title,
	description,
	children,
}: {
	title: string;
	description: string;
	children: JSX.Element[] | JSX.Element;
}) => (
	<>
		<Head>
			<meta charSet="UTF-8" />
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Tempo | {title}</title>
			<meta name="description" content={description} />
			<meta
				name="keywords"
				content="opensource github discord discord.js typescript discord-bot tempo"
			/>
			<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			<link rel="apple-touch-icon" sizes="192x192" href="/img/profile-192.png" />
		</Head>
		<AppBar />
		{children}
	</>
);

export default Page;
