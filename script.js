//Part 1 Growing Pains
console.log('------------------------------------------------PART 1-----------------------------------------------');
const gardenRadius = 5;
const PI = Math.PI
const gardenArea = PI * gardenRadius ** 2;

const areaRequiredForPlant = 0.8;
let stratingPlants = 20;
let numberOfWeeks = 3
let action = ``;

//weeks analysis
for (let i = 1; i <= numberOfWeeks; i++) {
    let weekiPlantsArea = stratingPlants * areaRequiredForPlant * 2 ** i;
    if (weekiPlantsArea > gardenArea * 0.8) {
        action = `pruned`;
    } else if (weekiPlantsArea >= gardenArea * 0.5 && week1PlantsArea <= gardenArea * 0.8) {
        action = `monitored`;
    } else if (weekiPlantsArea < gardenArea * 0.5) {
        action = `planted`;
    } else {
        action = `unknown`;
    }
    console.log(`After ${i} week of grouth garden should be ${action}`);
}

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

//weeks analysis
for (let i = 1; i <= numberOfWeeks; i++) {
    let weekiPlantsArea = stratingPlants * areaRequiredForPlant * 2 ** i;
    if (weekiPlantsArea > gardenArea * 0.8) {
        action = `pruned`;
    } else if (weekiPlantsArea >= gardenArea * 0.5 && week1PlantsArea <= gardenArea * 0.8) {
        action = `monitored`;
    } else if (weekiPlantsArea < gardenArea * 0.5) {
        action = `planted`;
    } else {
        action = `unknown`;
    }

    console.log(`After NOT listening to recomendations and ${i} week of grouth garden should be ${action} and total area of plants is ${weekiPlantsArea}`);

    try {
        if (weekiPlantsArea > gardenArea) throw new Error(`After week ${i} plants area is larger then area of the garden!`);
    } catch (err) {
        console.error(err.message);
    }
}