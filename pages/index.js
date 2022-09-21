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

	const images = res.items.map(img => {
		const { sys, fields } = img;
		const { image, title } = fields;
		const { fields: imgFields } = image;

		return {
			url: imgFields.file.url,
			id: sys.id,
			title,
			description: 'asdasdasda'
		};
	});

	return { props: { images } };
}
