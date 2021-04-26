import { DISPLAY_SETTINGS, COLLAPSE_RIGHT_ASIDE } from '../types';

const appReducer = (state, action) => {
	switch (action.type) {
		case DISPLAY_SETTINGS:
			return {
				...state,
				isDisplaySettings: !state.isDisplaySettings,
			};
		case COLLAPSE_RIGHT_ASIDE:
			return {
				...state,
				isCollapseRightAside: !state.isCollapseRightAside,
			};

		default:
			return state;
	}
};
export default appReducer;
