const numbers = [12, 9, 31, 18, 22]
const names = ['Joe Schmo', 'Ms. Buckets', 'Harvey Kay', 'Sally Talls', 'MK DiBoux']
const positions = ['Center', 'Point Guard', 'Shooting Guard', 'Power Forward', 'Small Forward']
const points = {
	12: [14, 32, 7, 0, 23],
	9: [19, 0, 11, 22, 0],
	31: [0, 30, 16, 0, 25],
	18: [18, 29, 26, 31, 19],
	22: [11, 0, 23, 17, 0]
}

function generateRoster() {
// Код тут.

  // let roster = [];
  // for (let i = 0; i < numbers.length; i++) {
  //   let arr = []
  //   arr = arr.concat(numbers[i], names[i], positions[i], [points[numbers[i]]])
  //   console.log(arr)
  //   roster.push(arr)
  // }

  const roster = numbers.map((el, i) => [el, names[i], positions[i], points[el]])
  //  console.log(roster.length)
   return roster
}
module.exports = {generateRoster};

