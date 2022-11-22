import PropTypes from "prop-types";

import { client } from "../src/config/contenful";

import Layout from "../src/components/Layout";
import Hero from "../src/components/Hero";

export default function Home({ images }) {
	console.log("🚀 ~ file: index.js ~ line 9 ~ Home ~ images", { images });
	return (
		<>
			<Layout>
				<Hero images={images} />
			</Layout>
		</>
	);
}

export async function getStaticProps() {
	const res = await client.getEntries({ content_type: "containers" });

	const images = res.items.map(img => {
		const { sys, fields } = img;
		const { image } = fields;
		const { fields: imgFields } = image;

		return {
			url: imgFields.file.url,
			id: sys.id,
		};
	});

	return { props: { images } };
}

Home.propTypes = {
	images: PropTypes.array.isRequired,
};
