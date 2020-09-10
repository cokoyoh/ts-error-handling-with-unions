var safeNumber = function (s) {
    var n = Number(s);
    if (isNaN(n)) {
        return { kind: 'failure', reason: 'conversion returned a NaN' };
    }
    return { kind: 'success', value: n };
};
var converted = safeNumber('5');
var result = converted.kind === 'success' ? converted.value : 0;
console.log(result);
