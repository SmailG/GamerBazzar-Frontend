import { sortQustions } from "../helpers/questionHelpers";
import {
	logOut,
	setUser,
	switchSidebarMode,
	openModal, 
	getOneQuestion,
	getQuestions,
	getAnswers} from "../actions";
import { validateAuthData } from "../helpers/authHelpers";
import { setCtxError } from "../actions/uiActions";
import { auth } from "../api";



const gamerBazzarMiddleWare = store => next => (action) => {
	if (action.type === 'login') {
		const { email, password } = action;
		let res = auth.login({ email, password });
	}
	else if (action.type === 'signup') {
		const { email, password, confirmPassword } = action;
		let res = auth.register({ email, password, confirmPassword })
	}
	

	next(action);
};

export default gamerBazzarMiddleWare;

