export default function Hero({ images }) {
	return (
		<section>
			{images.map(img => {
				const { sys, fields } = img;
				const { image, title } = fields;
				const { fields: imgFields } = image;

				return (
					<div key={sys.id}>
						<img src={imgFields.file.url} alt={title} />
					</div>
				);
			})}
		</section>
	);
}
