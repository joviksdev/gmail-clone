import { btn, grayColor, link } from '../../../assets/js/stylesComponents';

const styles = () => ({
	container: {
		padding: '10px',
		backgroundColor: 'rgba(250, 250, 250, 0.6)',
	},
	closeBtn: {
		...btn,
		height: '30px',
		width: '30px',
		borderRadius: '50%',
		'& .MuiSvgIcon-root': {
			fontSize: '20px',
		},
	},
	allSettingBtn: {
		...btn,
		display: 'block',
		width: '100%',
		border: `1px solid ${grayColor[10]}`,
	},
	subHeaderText: {
		fontSize: '12px',
		textTransform: 'uppercase',
		fontWeight: '600',
	},
	link: {
		...link,
		'&:hover': {
			textDecoration: 'underline !important',
		},
	},
	themeImg: {
		cursor: 'pointer',
		'& img': {
			borderRadius: '5px',
			width: '100%',
		},
	},
	height: {
		height: 'calc(100vh - 50px)',
	},
});

export default styles;
