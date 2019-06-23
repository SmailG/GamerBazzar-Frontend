import { combineReducers } from 'redux';

import auth from './authReducer';
import contextsUIstate from './contextUIreducer';
import contexts from './contextReducer';
import user from './userReducer';
import locale from './localeReducer';
import notifications from './notificationReducer';


export default combineReducers({
	auth,
	contextsUIstate,
	contexts,
	user,
	locale,
	notifications
});





// const mainReducer = (state = {}, action) => {
// 	return {
// 		user: soveliaUser(state.user, action),
// 		contexts: soveliaContexts(state.contexts, action),
// 		conf: soveliaConf(state.conf, action),
// 		popup: soveliaPopupReduce(state.popup, action),
// 		notifications: soveliaNotificationsReducer(state.notifications, action),
// 		error: soveliaErrorReducer(state.error, action),
// 		locale: soveliaLocale(state.locale, action),
// 		// cart: soveliaCart(state.cart, action),
// 		schema: soveliaSchema(state.schema, action),
// 		editedObjects: editedObjectsReducer(state.editedObjects, action),
// 		contextsUIstate: contextsUIstateReducer(state.contextsUIstate, action)
// 	};
// };