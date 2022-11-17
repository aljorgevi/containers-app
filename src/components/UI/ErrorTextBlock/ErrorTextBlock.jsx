import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export function ErrorTextBlock() {
	return (
		<>
			<div className='mb-3'>
				<Alert severity='error'>
					<AlertTitle>Error</AlertTitle>
					Hubo un error con el formulario —
					<strong>prueba otra vez o escribenos por whatsapp!</strong>
				</Alert>
			</div>
		</>
	);
}
