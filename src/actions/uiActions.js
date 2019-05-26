export const initContextUIstate = (ctx, object) => ({
	type: 'INIT_CONTEXT_UI', ctx, object
});

export const initMultipleContextUIstate = (ctxs) => ({
    type: 'INIT_MULTIPLE_CONTEXT_UI', ctxs
});

export const clearUIContext = (ctx) => ({
    type: "CLEAR_UI_CONTEXT",
    ctx
})

export const setWindowWidth = (width) => ({
    type: 'SET_WINDOW_WIDTH',
    width
});

export const selectTab = (ctx, tabCtx, selectedTab) => ({
    type: "SELECT_TAB",
    ctx,
    tabCtx,
    selectedTab
});

export const removeTab = (ctx, tabCtx) => ({
    type: "REMOVE_TAB",
    ctx,
    tabCtx
});

export const setTabs = (ctx, tabCtx, list) => ({
    type: "SET_TABS",
    ctx,
    tabCtx,
    list
});

export const setPending = (ctx, value) => ({
    type: 'SET_PENDING',
    ctx,
    value
});

export const setContextPendingArea = (ctx, area, value) => ({
    type: 'SET_CONTEXT_PENDING_AREA',
    ctx,
    area,
    value
});

export const setAttribute = (ctx, attribute, value) => ({
    type: 'SET_ATTRIBUTE',
	ctx,
	attribute,
    value
});

export const setMultipleAttributes = (ctx, attributes) => ({
    type: 'SET_MULTIPLE_ATTRIBUTES',
    ctx,
    attributes
});

export const removeAttribute = (ctx, attribute) => ({
    type: 'REMOVE_ATTRIBUTE',
    ctx,
    attribute,
});

// Error Handling
export const setCtxError = (ctx, value, uid='static', shortId=null, triggerToaster=false) => ({
	type: 'SET_CTX_ERROR',
	ctx,
	value,
	uid,
	shortId,
	triggerToaster
});

export const removeSpecificError = (ctx, shortId, uid='static') => ({
	type: 'REMOVE_SPECIFIC_ERROR',
	ctx,
	shortId,
	uid
});


export const removeSpecificErrorByValue = (ctx, value, uid='static') => ({
	type: 'REMOVE_SPECIFIC_ERROR_BY_VALUE',
	ctx,
	value,
	uid
});

export const removeUidErrors = (ctx, uid='static') => ({
	type: 'REMOVE_UID_ERRORS',
	ctx,
	uid
});

export const removeUidErrorsFromAllCtx = (uid) => ({
	type: 'REMOVE_UID_ERRORS_FROM_ALL_CTX',
	uid
})

export const removeCtxErrors = (ctx) => ({
	type: 'REMOVE_CTX_ERRORS',
	ctx
});

export const setServerCommStatus = (status) => {
    type: 'SET_SERVER_COMM_STATUS',
    status
}