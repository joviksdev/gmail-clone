import React, { useReducer } from 'react';
import AppContext from './appContext';
import appReducer from './appReducer';

import { DISPLAY_SETTINGS, COLLAPSE_RIGHT_ASIDE } from '../types';

const AppState = (props) => {
	const initialState = {
		isDisplaySettings: false,
		isCollapseRightAside: false,
	};

	const [state, dispatch] = useReducer(appReducer, initialState);

	const displaySettings = () => {
		dispatch({
			type: DISPLAY_SETTINGS,
		});
	};
	const collapseRightAside = () => {
		dispatch({
			type: COLLAPSE_RIGHT_ASIDE,
		});
	};

	return (
		<AppContext.Provider
			value={{
				isDisplaySettings: state.isDisplaySettings,
				isCollapseRightAside: state.isCollapseRightAside,
				displaySettings,
				collapseRightAside,
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppState;
