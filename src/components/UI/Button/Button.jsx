import Button from '@mui/material/Button';
import styles from './Button.module.css';

export default function CustomButton({ children, className }) {
	return (
		<Button
			color='primary'
			className={`${styles.Button} ${className}`}
			variant='outlined'
		>
			{children}
		</Button>
	);
}
