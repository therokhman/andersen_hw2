[window.alert, window.confirm, window.prompt] = [window.confirm, window.prompt, window.alert];

// An alternative way, but "Uncaught RangeError: Maximum call stack size exceeded" error will appear
//
// window.alert = function (message) { window.confirm(message); };
// window.prompt = function (message) { window.alert(message); };
// window.confirm = function (message) { window.prompt(message); };
