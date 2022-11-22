// import { NextSeo } from 'next-seo';
import Link from "next/link";
import Layout from "../src/components/Layout";
// import Seo from "../components/Seo"

const Success = () => {
	return (
		<Layout>
			{/* <NextSeo title='Rent a car Puerto Montt | arriendo de autos Puerto Montt, Puerto Varas' /> */}
			<div className="success-page">
				<h1>Enviado!</h1>
				<h3>Nos comunicaremos con usted a la brevedad.</h3>
				<Link href="/">
					<a className="btn">Volver a inicio</a>
				</Link>
			</div>
		</Layout>
	);
};

export default Success;
