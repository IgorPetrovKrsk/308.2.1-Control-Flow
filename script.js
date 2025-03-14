//Part 1 Growing Pains
console.log('------------------------------------------------PART 1-----------------------------------------------');
const gardenRadius = 5;
const PI = Math.PI
const gardenArea = PI * gardenRadius ** 2;

const areaRequiredForPlant = 0.8;
let stratingPlants = 20;

//weeks prediction
let week1PlantsArea = stratingPlants * areaRequiredForPlant * 2 ** 1;
let week2PlantsArea = stratingPlants * areaRequiredForPlant * 2 ** 2;
let week3PlantsArea = stratingPlants * areaRequiredForPlant * 2 ** 3;


let action = ``;
//week 1 analysis
if (week1PlantsArea > gardenArea * 0.8) {
    action = `pruned`;
} else if (week1PlantsArea >= gardenArea * 0.5 && week1PlantsArea <= gardenArea * 0.8) {
    action = `monitored`;
} else if (week1PlantsArea < gardenArea * 0.5) {
    action = `planted`;
} else {
    action = `unknown`;
}

console.log(`After 1 week of grouth garden should be ${action}`);

//week 2 analysis
if (week2PlantsArea > gardenArea * 0.8) {
    action = `pruned`;
} else if (week2PlantsArea >= gardenArea * 0.5 && week2PlantsArea <= gardenArea * 0.8) {
    action = `monitored`;
} else if (week2PlantsArea < gardenArea * 0.5) {
    action = `planted`;
} else {
    action = `unknown`;
}

console.log(`After 2 weeks of grouth garden should be ${action}`);

//week 3 analysis
if (week3PlantsArea > gardenArea * 0.8) {
    action = `pruned`;
} else if (week3PlantsArea >= gardenArea * 0.5 && week3PlantsArea <= gardenArea * 0.8) {
    action = `monitored`;
} else if (week3PlantsArea < gardenArea * 0.5) {
    action = `planted`;
} else {
    action = `unknown`;
}

console.log(`After 3 weeks of grouth garden should be ${action}`);

//Part 2 Thinking Bigger
console.log('\n------------------------------------------------PART 2-----------------------------------------------');
console.log

const newStartPlants = 100;
const numberOfWeeksToGrow = 10;
let newPlantsArea = newStartPlants * areaRequiredForPlant * 2 ** numberOfWeeksToGrow
console.log(`Area of plants after ${numberOfWeeksToGrow} weeks grouth is ${newPlantsArea} m²`);

let newGardenRadius = Math.sqrt(newPlantsArea / PI).toFixed(2); //toFixed(2) rounds number to 2 digits afted decimal point
console.log(`If the space remained circular, the new radios of garden would be ${newGardenRadius} meters`);

//Part 3 Errors in Judgement
console.log('\n------------------------------------------------PART 3-----------------------------------------------');
console.log(`The scientists decided NOT to listen to recommendations\n`)
stratingPlants = 100;
week1PlantsArea = stratingPlants * areaRequiredForPlant * 2 ** 1;
week2PlantsArea = stratingPlants * areaRequiredForPlant * 2 ** 2;
week3PlantsArea = stratingPlants * areaRequiredForPlant * 2 ** 3;
//week 1 analysis

if (week1PlantsArea > gardenArea * 0.8) {
    action = `pruned`;
} else if (week1PlantsArea >= gardenArea * 0.5 && week1PlantsArea <= gardenArea * 0.8) {
    action = `monitored`;
} else if (week1PlantsArea < gardenArea * 0.5) {
    action = `planted`;
} else {
    action = `unknown`;
}

console.log(`After NOT listening to recomendations and 1 week of grouth garden should be ${action}`);

//week 2 analysis
if (week2PlantsArea > gardenArea * 0.8) {
    action = `pruned`;
} else if (week2PlantsArea >= gardenArea * 0.5 && week2PlantsArea <= gardenArea * 0.8) {
    action = `monitored`;
} else if (week2PlantsArea < gardenArea * 0.5) {
    action = `planted`;
} else {
    action = `unknown`;
}

console.log(`After NOT listening to recomendations and 2 weeks of grouth garden should be ${action}`);

//week 3 analysis
if (week3PlantsArea > gardenArea * 0.8) {
    action = `pruned`;
} else if (week3PlantsArea >= gardenArea * 0.5 && week3PlantsArea <= gardenArea * 0.8) {
    action = `monitored`;
} else if (week3PlantsArea < gardenArea * 0.5) {
    action = `planted`;
} else {
    action = `unknown`;
}

console.log(`After NOT listening to recomendations and 3 weeks of grouth garden should be ${action}`);

try {
    if (week1PlantsArea>gardenArea) throw new Error("After week 1 plants area is larger then area of the garden!");    
} catch (err) {
    console.error(err.message);
}
try {
    if (week2PlantsArea>gardenArea) throw new Error("After week 2 plants area is larger then area of the garden!");    
} catch (err) {
    console.error(err.message);
}
try {
    if (week3PlantsArea>gardenArea) throw new Error("After week 3 plants area is larger then area of the garden!");    
} catch (err) {
    console.error(err.message);
}



