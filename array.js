let arr = [
	{value: 100, type: 'USD'},
	{value: 215, type: 'EUR'},
	{value: 7, type: 'EUR'},	
	{value: 99, type: 'USD'},
	{value: 354, type: 'USD'},
	{value: 12, type: 'EUR'},
	{value: 77, type: 'USD'},
];

let sum = 0;

const reducer = (acc,x) => {
    if(x.type=="USD" && x.value < 100) return acc + x.value;
    else return acc;
}
console.log(arr.reduce(reducer,0));

let newArr = arr.filter(x =>{
    return x.type == "EUR";
}).map(x => {
    x.value=x.value*2;
    return x;
});

console.log(sum);
console.log(newArr);