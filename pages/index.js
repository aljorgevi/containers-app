import Layout from '../components/Layout';

// import { createClient } from 'contentful';

// const client = createClient({
// 	space: process.env.CONTENTFUL_SPACE_ID,
// 	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
// });

export default function Home({ images }) {
	console.log({ images });
	return (
		<>
			<Layout>hello world</Layout>
		</>
	);
}

export async function getStaticProps() {
	// const res = await client.getEntries({ content_type: 'portfolio' });
	return {
		props: {
			images: [1, 2, 3]
		}
	};
}
