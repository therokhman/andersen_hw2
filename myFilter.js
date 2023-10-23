Array.prototype.myFilter = function (callback, thisArg) {
    return this.reduce((filteredArray, element, i, arr) => {
        if (callback.call(thisArg, element, i, arr)) {
            filteredArray.push(element);
        }
        return filteredArray;
    }, []);
};
