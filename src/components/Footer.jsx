import styles from '../../styles/Footer.module.css';

export default function Footer() {
	return (
		<section className='section-center'>
			<div className={styles.Footer}>
				<article className='contact'>
					<h3>Contact</h3>
					<div>
						<p>email</p>
						<p>week days</p>
						<p>horario</p>
						<button>Contactanos!</button>
					</div>
				</article>
				<article className={styles.Social}>
					<h3>Social</h3>
					<div>iconos</div>
				</article>
				<article className={styles.Subscription}>
					<h3>Subscribe</h3>
					<p>descripcion</p>
					<input type='text' name='' id='' />
					<button>Subscribirme!</button>
				</article>
				<article className={styles.Location}>
					<h3>Ubicacion</h3>
					<p>direccion</p>
				</article>
			</div>
		</section>
	);
}
