const CACHE_INTERVAL = 60 * 1000; // 1 minute

export const removeCache = () => {
    localStorage.clear();
}

export const setLocalData = (key, val) => {
    localStorage.setItem(key, JSON.stringify(val));
    return;
};

export const getLocalData = (key) => {
    let localData = localStorage.getItem(key);
    let validatedData = validateData(localData);
    // debugger;
    if (validatedData.isValid) {
        return validatedData.data;
    }
    localStorage.removeItem(key);
    return null;
};

export const validateData = (localData) => {
    if (localData === null) return { isValid: false };

    let dataRetrieved = JSON.parse(localData);
    // debugger;
    if (Number.isNaN(dataRetrieved.timestamp)) return { isValid: false };

    let date = new Date(dataRetrieved.timestamp);
    if (date.toString() === "Invalid Date") return { isValid: false };

    if (Date.now() - date.getTime() < CACHE_INTERVAL) {
        return {
            isValid: true,
            data: dataRetrieved,
        };
    }

    return { isValid: false };
};
