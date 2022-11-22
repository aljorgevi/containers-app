import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import styles from "../../styles/Hero.module.css";
// import Image from "next/image";

export default function Hero({ images }) {
	const [slide, setSlide] = useState(0);

	// eslint-disable-next-line no-unused-vars
	const goToNext = index => {
		setSlide(index);
	};

	useEffect(() => {
		images.forEach(obj => {
			const img = new Image();
			img.src = obj.url;
		});

		const timer = setTimeout(() => {
			if (slide === images.length - 1) return setSlide(0);

			setSlide(slide + 1);
		}, 5000);

		return () => clearTimeout(timer);
	}, [slide, images.length]);

	return (
		<section className={styles.Hero}>
			<div className={styles.HeroContainer}>
				{/* <Image
					src={`https:${images[slide].url}`}
					alt={images[slide].alt}
					layout="fill"
					objectFit="cover"
				/> */}
				<div
					style={{
						backgroundImage: `url(${images[slide].url}) `,
						backgroundPosition: "center",
						backgroundSize: "cover",
						height: "100%",
						objectFit: "cover",
					}}
				></div>
				<div>
					{/* <div className={styles.HeroDescripion}>
						<span className={styles.HeroDescripionTitle}>{images[slide].title}</span>
					</div>
					<div className={styles.HeroCarousel}>
						{images.map((img, index) => {
							return <span key={img.id} onClick={() => goToNext(index)}></span>;
						})}
					</div> */}
				</div>
			</div>
		</section>
	);
}

Hero.propTypes = {
	images: PropTypes.array.isRequired,
};
