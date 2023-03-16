const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];
const driversNames = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];

function findMatching(array, string) {
let res = array.filter(val => {
  return (val.toLowerCase().includes(string.toLowerCase()))
});
return res;
}

function fuzzyMatch(array, string) {
  let driverName = array.filter(names => names[0] + names[1] === string)
  return driverName
}

function matchName(arrayOfObjects, string){
  let names = arrayOfObjects.filter(driver => driver.name === string)
  return names
}




findMatching(driversNames, "Bobby")
fuzzyMatch(driversNames,"Sa" )
matchName(drivers,"Bobby")