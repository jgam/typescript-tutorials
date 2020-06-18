var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var count = 0;
count += 1;
// count = '문자열';
var message = 'hello world';
var done = false;
var numbers = [1, 2, 3];
var messages = ['hello', 'world'];
// messages.push(1);
var mightBeUndefined = undefined;
mightBeUndefined = 'hey';
var nullabaleNumber = null;
//write sum function taking two params x and y
function TwoSum(x, y) {
    return x + y;
}
//console.log(TwoSum(1, '1'));
console.log(TwoSum(1, 3));
//write sumArray taking numbers
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
console.log(total);
function merge(a, b) {
    return __assign({}, a, b);
}
var merged = merge({ foo: 1 }, { bar: 2 });
merged.bar;
// param이 정해져있지 않을 때
function wrap(param) {
    return {
        param: param
    };
}
var wrapped = wrap('aaa');
wrapped.param;
var itemss = {
    list: ['a', 'b']
};
var items = {
    list: ['a', 'b'],
    value: 'aaa'
};
