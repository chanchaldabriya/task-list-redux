export function getMillisFromDate(dateObj) {
    if(dateObj)
        return dateObj.getTime();
}

export function getDateFromMillis(millis) {
    if(millis)
        return new Date(millis);
}

export function getDateFromString(dateStr) {
    if(dateStr)
        return new Date(dateStr);
}

export function getDateString(dateObj) {
    if(dateObj)
        return `${dateObj.getDate()}/${dateObj.getMonth() + 1}/${dateObj.getFullYear()}`;
}

export function getStandardDateString(dateObj) {
    const month = dateObj.getMonth() + 1;
    if(dateObj)
        return `${dateObj.getFullYear()}-${month < 10 ? "0" : ""}${month}-${dateObj.getDate()}`;
}

export function getDateFromStandardDateString(dateStr) {
    if(dateStr)
        return new Date(dateStr);
}