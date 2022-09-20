import Layout from '../components/Layout';
import { createClient } from 'contentful';
import Hero from '../components/Hero';

const client = createClient({
	space: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export default function Home({ images }) {
	return (
		<>
			<Layout>
				<Hero images={images} />
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const res = await client.getEntries({ content_type: 'containers' });
	return {
		props: {
			images: res.items
		}
	};
}
