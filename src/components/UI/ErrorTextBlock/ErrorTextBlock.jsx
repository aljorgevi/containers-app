import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export function ErrorTextBlock() {
	return (
		<div className='my-5'>
			<Alert severity='error'>
				<AlertTitle>Error</AlertTitle>
				Ups... error al enviar —
				<strong>Intenta otra vez o escribenos por whatsapp!</strong>
			</Alert>
		</div>
	);
}
