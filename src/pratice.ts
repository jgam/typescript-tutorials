let count = 0;
count += 1;
// count = '문자열';

const message: string = 'hello world';
const done: boolean = false;
const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];

// messages.push(1);

let mightBeUndefined: string | undefined = undefined;

mightBeUndefined = 'hey';

let nullabaleNumber: number | null = null;

//write sum function taking two params x and y
function TwoSum(x: number, y: number): number {
  return x + y;
}
//console.log(TwoSum(1, '1'));
console.log(TwoSum(1, 3));

//write sumArray taking numbers
function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);

console.log(total);

function merge<A, B>(a: A, b: B) {
  return {
    ...a,
    ...b,
  };
}
const merged = merge({ foo: 1 }, { bar: 2 });
merged.bar;

// param이 정해져있지 않을 때
function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped = wrap('aaa');

wrapped.param;

interface Itemss<T> {
  list: T[];
}

const itemss: Itemss<string> = {
  list: ['a', 'b'],
};

// 타입을 지켜내고싶을 때 제네릭을 사용한다.
type Items<T, V> = {
  list: T[];
  value: V;
};

const items: Items<string, string> = {
  list: ['a', 'b'],
  value: 'aaa',
};
