
const operation = process.argv[2]

if (operation === 'add') {
    console.log(parseInt(process.argv[3]) + parseInt(process.argv[4]));
}
if (operation === 'subtract') {
    console.log(parseInt(process.argv[3]) - parseInt(process.argv[4]));
}
if (operation === 'multiply') {
    console.log(parseInt(process.argv[3]) * parseInt(process.argv[4]));
}
if (operation === 'divide') {
    console.log(parseInt(process.argv[3]) / parseInt(process.argv[4]));
}
if (operation === 'sin') {
    console.log(Math.sin(parseInt(process.argv[3])));
}
if (operation === 'cos') {
    console.log(Math.cos(parseInt(process.argv[3])));
}
if (operation === 'tan') {
    console.log(Math.tan(parseInt(process.argv[3])));
}