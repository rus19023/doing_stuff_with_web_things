// Local storage helpers

// get last item id from localStorage
const getLastId = () => { return localStorage.getItem(lastItemId.value)};

// save new last item id to localStorage
const setLastId = (lastId) => { localStorage.setItem(lastItemId, lastId)};

// get last item id from localStorage
const getListItems = () => { return localStorage.getItem(listItems)};

// save new last item id to localStorage
const setNewItem = (itemId, itemText) => { localStorage.setItem(itemId, itemText)};

const lsHelpers = () => {}