import { sortQustions } from "../helpers/questionHelpers";
import {
	logOut,
	setUser,
	switchSidebarMode,
	openModal, 
	getOneQuestion,
	getQuestions,
	getAnswers} from "../actions";



const gamerBazzarMiddleWare = store => next => (action) => {
	

	next(action);
};

export default gamerBazzarMiddleWare;

