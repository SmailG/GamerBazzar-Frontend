import {

} from '../api';

export const select = (ctx, pathKey, uid, objectClass) => ({
    type: "SELECT", ctx, pathKey, uid, objectClass
});

export const setContext = ctx => ({ type: "SET_CONTEXT", ctx});

export const setContextMode = (ctx, mode) => ({
	type: "SET_CONTEXT_MODE",
	ctx,
	mode
});

export const showObject = (immutableObject,tab,forceSheet,relatedObjects) => ({
    type: 'SHOW_OBJECT',
    immutableObject,
    tab,
    forceSheet,
    relatedObjects
});

export const refreshObject = (ctx, uid, immo, callback, forceRefetch) => ({
	type: "REFRESH_OBJECT",
	ctx,
	uid,
	immo,
	callback,
	forceRefetch
});

export const updatePopupData = (key, data) => ({
	type: 'UPDATE_POPUP_DATA',
	key,
	data
})

export const refreshMultipleObjects = (ctx, immos) => ({
	type: 'REFRESH_MULTIPLE_OBJECTS',
	ctx,
	immos
})

export const setObject = (ctx, uid, o) => ({ type: "SET_OBJECT", ctx, uid, o });
export const setObjectPending = (ctx, uid, pending) => ({ type: "SET_OBJECT_PENDING", ctx, uid, pending});
export const unselect = (ctx, pathKey, uid) => ({ type: "UNSELECT", ctx, pathKey, uid });
export const unselectAll = ctx => ({ type: "UNSELECT_ALL", ctx });
export const selectAll = (ctx, filter) => ({ type: "SELECT_ALL", ctx, filter });
export const unselectAllInAllContexts = () => ({type: 'UNSELECT_ALL_IN_ALL_CONTEXTS'});

export const addFilter = (ctx, name, value) => ({
	type: "ADD_FILTER",
	ctx,
	name,
	value
});

export const removePending = ctx => ({
	type: "REMOVE_PENDING",
	ctx
});

export const removeCtxFromContexts = (ctx) => ({ type: "REMOVE_CTX_FROM_CONTEXTS", ctx});
export const clearProductTabs = (ctx, args) => ({ type: 'CLEAR_PRODUCT_TABS', ctx, args}); 

// search
export const search = (ctx, callback, offset=0, limit=50, clearOld) => ({type: 'SEARCH', ctx, callback, offset, limit, clearOld})
export const setFilterAnalysis = (ctx, filterAnalysis) => ({type: "SET_FILTER_ANALYSIS", ctx, filterAnalysis});
export const setTotalCount = (ctx, totalCount, isComplete, analysisLimitCreatedDate) => ({type: 'SET_TOTAL_COUNT', ctx, totalCount, isComplete, analysisLimitCreatedDate})
// e.g. criteria = {"": "scuba", Type: "Items"}
export const setCriteria = (ctx, criteria) => ({type: 'SET_CRITERIA', ctx, criteria})
export const removeCriteria = (ctx, criteria) => ({type: "REMOVE_CRITERIA", ctx, criteria});
export const replaceCriteria = (ctx, previousCriteria, nextCriteria) => ({type: 'REPLACE_CRITERIA', ctx, previousCriteria, nextCriteria});
// e.g. filter = {"": "scuba", Type: "Items"}
export const setFilter = (ctx, filter) => ({type: 'SET_FILTER', ctx, filter});
export const removeFilter = (ctx, filter) => ({type: "REMOVE_FILTER", ctx, filter});
export const clearFilters = ctx => ({type: "CLEAR_FILTERS", ctx});

export const clearSearchResults = (ctx) => ({type: "CLEAR_SEARCH_RESULTS", ctx});
export const clearCtxSearchResults = (ctx) => ({type: "CLEAR_CTX_SEARCH_RESULTS", ctx});

// user
export const login = (email, password, keepLoggedIn) => ({ 
	type: "LOGIN",
	password,
	keepLoggedIn,

});

export const signup = (email, password, confirmPassword) => ({ 
	type: "SIGN_UP",
	password,
	confirmPassword,

});

export const logout = () => ({ 
	type: "LOGOUT"
});

export const changeUserPassword = (currentPassword, newPassword) => ({
	type: "CHANGE_USER_PASSWORD",
	currentPassword,
	newPassword,
})
export const selectLanguage = (id) => ({
	type: "SELECT_LANGUAGE",
	id
}) 
export const initPreferences = (
	fields,
	selectedAttributes,
	availableAttributes,
	callback
) => ({
	type: "INIT_PREFERENCES",
	fields,
	selectedAttributes,
	availableAttributes,
	callback
});

// GDPR
export const gdprAccept = () => ({
	type: "ACCEPT_GDPR"
});
export const gdprRevoke = () => ({
	type: "REVOKE_GDPR"
});
export const gdprCheckAccepted = (isChecked) => ({
	type: "GDPR_CHECK_CHANGE",
	isChecked
})

export const setUserData = (user) => ({type: "SET_USER_DATA", user})
export const changeToMobileLayout = () => ({
	type: 'CHANGE_TO_MOBILE_LAYOUT'
});

export const changeToDesktopLayout = () => ({
	type: 'CHANGE_TO_DESKTOP_LAYOUT'
});

export const updateUploadProgress = (
	dockey,
	progress,
	alreadyUploaded,
	filesSummedSize
) => ({
	type: "UPDATE_UPLOAD_PROGRESS",
	dockey,
	progress,
	alreadyUploaded,
	filesSummedSize,
});

export const clearTabsFromContexts = (tabs) => ({
	type: 'CLEAR_TABS_FROM_CONTEXTS',
	tabs
})

export const filesUpload = (files, dockey, callback, model) => ({
	type: "FILES_UPLOAD",
	files,
	dockey,
	callback,
	model
});

// tooltip
export const addPopup = (key, popup) => ({
	type: 'ADD_POPUP',
	key,
    popup
});

export const removePopup = (key) => ({
	type: 'REMOVE_POPUP',
	key
});

export const removeAllPopups = () => ({
	type: 'REMOVE_ALL_POPUPS'
});

export const addPopupByName = (key) => ({
	type: 'ADD_POPUP_BY_NAME',
	key
});

export const appLoaded = (selectedAttributes) => ({
	type: 'APP_LOADED',
	selectedAttributes
})

// NotificationSystem
export const addNotification = (notification) => ({type: 'ADD_NOTIFICATION', notification});
export const removeNotification = (uid) => ({type: 'REMOVE_NOTIFICATION', uid});
export const addError = (error) => ({type: 'ADD_ERROR', error});
export const removeError = (errorID) => ({type: 'REMOVE_ERROR', errorID});

export const launchStructureAgent = (ctx, name, props) => ({
	type: 'LAUNCH_STRUCTURE_AGENT',
	ctx,
	name,
	props,
})

// conf
export const initConf = (conf) => ({
	type: 'INIT_CONF',
	conf
});
