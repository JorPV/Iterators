// Exercise: Iterators - old and new style
// COLORS ARRAY
const colors = ['yellow', 'blue', 'red', 'orange'];

// The While loop
let i = 0; 

while (i < colors.length) {
    console.log(`I am color ${colors[i]}`);
    i++; 
};

// // For loop
for (let i = 0; i < colors.length; i++) {
    console.log(`This color is ${colors[i]}`);
};

// // forEach method
colors.forEach(oneColor => console.log(oneColor));

// QUESTIONS
/*1. The While loop takes 4 lines. The for loop takes 2 lines. 
2.The forEach method takes 1 line. 
3.Besides being shorter to write, it is also more clear that it is about the 'colors' array
4.I do not undestand this last question. */