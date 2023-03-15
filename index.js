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
let arrOfName = []; 

for(const val of drivers) {
	arrOfName.push(val.name); 
}
function findMatching(arrayOfObjects, string) {
  let res = arrayOfObjects.filter(val => {
    return (val && (val === string || val.toLowerCase().includes(string.toLowerCase())))
  });

  return res;


}

findMatching(arrOfName, "Bobby")

