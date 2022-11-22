import PropTypes from "prop-types";

import { client } from "../src/config/contenful";

import Layout from "../src/components/Layout";
import Hero from "../src/components/Hero";

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
	const res = await client.getEntries({ content_type: "containers" });

	const images = res.items.map(img => {
		/*
		 image: [Object],
      title: 'cocina modelo 2',
      subTitle: 'cocina',
      isVertical: true
		*/
		const { sys, fields } = img;
		const { image, isVertical } = fields;
		const { fields: imgFields } = image;

		return {
			url: imgFields.file.url,
			id: sys.id,
			isVertical,
		};
	});

	return { props: { images } };
}

Home.propTypes = {
	images: PropTypes.array.isRequired,
};
