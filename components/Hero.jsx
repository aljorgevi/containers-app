import { useEffect, useState } from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero({ images }) {
	console.log('*', { images });
	const [slide, setSlide] = useState(0);

	const goToNext = index => {
		setSlide(index);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			if (slide === images.length - 1) return setSlide(0);

			setSlide(slide + 1);
		}, 5000);

		return () => clearTimeout(timer);
	}, [slide, images.length]);

	return (
		<section className={styles.Hero}>
			<div className={styles.HeroContainer}>
				<div
					style={{
						backgroundImage: `url(${images[slide].url})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						height: '100%'
					}}
				></div>
				<div>
					{/* <div className={styles.HeroDescripion}>
						<span className={styles.HeroDescripionTitle}>
							{images[slide].title}
						</span>
					</div> */}
					{/* <div className={styles.HeroCarousel}>
					{images.map((img, index) => {
							return <span key={img.id} onClick={() => goToNext(index)}></span>;
						})}
					</div> */}
				</div>
			</div>
		</section>
	);
}
