import { DISPLAY_SETTINGS } from '../types';

const appReducer = (state, action) => {
	switch (action.type) {
		case DISPLAY_SETTINGS:
			return {
				...state,
				isDisplaySettings: !state.isDisplaySettings,
			};

		default:
			return state;
	}
};
export default appReducer;
