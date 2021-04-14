data = [
    {festival: "Beale Street", femaleA: 28, maleA: 72, femaleB: 25, maleB: 75, femaleC: 18, maleC: 82},
    {festival: "Bonaroo", femaleA: 31, maleA: 69, femaleB: 26, maleB: 74, femaleC: 24, maleC: 76},
    {festival: "Boston Calling", femaleA: 29, maleA: 71, femaleB: 41, maleB: 59, femaleC: 40, maleC: 60},
    {festival: "Bottle Rock", femaleA: 36, maleA: 64, femaleB: 37, maleB: 63, femaleC: 21, maleC: 79},
    {festival: "Bunbury", femaleA: 18, maleA: 82, femaleB: 20, maleB: 80, femaleC: 17, maleC: 83},
    {festival: "Coachella", femaleA: 36, maleA: 64, femaleB: 35, maleB: 65, femaleC: 34, maleC: 66},
    {festival: "Firefly", femaleA: 32, maleA: 68, femaleB: 22, maleB: 78, femaleC: 20, maleC: 80},
    {festival: "Forecastle", femaleA: 30, maleA: 70, femaleB: 35, maleB: 65, femaleC: 24, maleC: 76},
    {festival: "Governor’s Ball", femaleA: 42, maleA: 58, femaleB: 36, maleB: 64, femaleC: 28, maleC: 72},
    {festival: "Gulf Coast Jam", femaleA: 20, maleA: 80, femaleB: 35, maleB: 65, femaleC: 10, maleC: 90},
    {festival: "Hangout", femaleA: 27, maleA: 73, femaleB: 27, maleB: 73, femaleC: 26, maleC: 74},
    {festival: "Innings", femaleA: 24, maleA: 76, femaleB: 28, maleB: 72, femaleC: 16, maleC: 84},
    {festival: "Life is Beautiful", femaleA: 33, maleA: 67, femaleB: 30, maleB: 70, femaleC: 28, maleC: 72},
    {festival: "New Orleans Jazz & Heritage", femaleA: 38, maleA: 62, femaleB: 30, maleB: 70, femaleC: 30, maleC: 70},
    {festival: "Osheaga", femaleA: 35, maleA: 65, femaleB: 33, maleB: 67, femaleC: 32, maleC: 68},
    {festival: "Outside Lands", femaleA: 42, maleA: 58, femaleB: 34, maleB: 66, femaleC: 28, maleC: 72},
    {festival: "Reading & Leeds", femaleA: 22, maleA: 78, femaleB: 21, maleB: 79, femaleC: 19, maleC: 81},
    {festival: "Sea Hear Now", femaleA: 26, maleA: 74, femaleB: 32, maleB: 68, femaleC: 12, maleC: 88},
    {festival: "Shaky Knees", femaleA: 34, maleA: 66, femaleB: 31, maleB: 69, femaleC: 31, maleC: 69},
    {festival: "Stagecoach", femaleA: 31, maleA: 69, femaleB: 28, maleB: 72, femaleC: 34, maleC: 66},
    {festival: "The Peach", femaleA: 13, maleA: 87, femaleB: 22, maleB: 78, femaleC: 17, maleC: 83},
    {festival: "Tortuga", femaleA: 28, maleA: 72, femaleB: 43, maleB: 57, femaleC: 7, maleC: 93},
    // ["festival", "femaleA", "maleA", "femaleB", "maleB", "femaleC", "maleC"]
  ]




const newArray = []
function printI(thisData) {
    for(const i in thisData) {
        newArray.push({
            festival: thisData[i]['festival'],
            femaleA: {
                value: thisData[i]['femaleA'],
                point: [...Array(thisData[i]['femaleA']).keys()]
            },
            maleA: {
                value: thisData[i]['maleA'],
                point: [...Array(thisData[i]['maleA']).keys()]
            },
            femaleB: {
                value: thisData[i]['femaleB'],
                point: [...Array(thisData[i]['femaleB']).keys()]
            },
            maleB: {
                value: thisData[i]['maleB'],
                point: [...Array(thisData[i]['maleB']).keys()]
            },
            femaleC: {
                value: thisData[i]['femaleC'],
                point: [...Array(thisData[i]['femaleC']).keys()]
            },
            maleC: {
                value: thisData[i]['maleC'],
                point: [...Array(thisData[i]['maleC']).keys()]
            }
        })
    }
}
printI(data);
console.log(newArray[0].femaleA.point)

const bealeFemaleA = {}
const createPoints2 = (thisData) => {

    for(const i in thisData) {
        bealeFemaleA.push({
            [i]: thisData[0].femaleA[i]
        })
    }
}
createPoints2(newArray[0].femaleA[1]);
console.log(bealeFemaleA);


// const array2020 = []
// function printI(data) {
//     for(const i in data) {
//         array2020.push({
//             festival: data[i]['festival'],
//             femaleA: [...Array(data[i]['femaleA']).keys()]
//         })
//     }
// }
// console.log(array2020)

// function createPoints(thisData) {
//     const newArray = [];
    
//     for(let i = 0; i < thisData.length; i++) {
//         for(let j = 0; j == thisData.femaleA; j++) {
//             let plus_x = 0;
//             let plus_y = 0;
//             plus_x = 0.1;
//             plus_y = -0.2;



const emojis = ['🎤', '🎸', '🥁', '🎹', '🤘']

const newerArray = newArray[0].femaleA.point

const assignEmoji = (arr) => {
    emojiPoints = []
    for(const i in arr) {
        emojiPoints.push(emojis[Math.floor(Math.random() * 5)])
    }
    return emojiPoints
}

assignEmoji(newerArray)
console.log(emojiPoints);

{
    const svg = html`
      <svg width=800 height=400 style='border: 1px dashed'>
      </svg>
    `
    const femaleArray = fullArray[0].femaleA.point
    const maleArray = fullArray[0].maleA.point
    
    d3.select(svg).selectAll('text')
      .data(assignEmoji(femaleArray)).enter().append('text')
      .attr('x', (d, i) => Math.random() * 100 + (i + 100))
      .attr('y', (d, i) => Math.random() * 100 + (i + 100))
      // .attr('
      .text((d) => d)
    
    d3.select(svg).selectAll('text')
      .data(assignEmoji(maleArray)).enter().append('text')
      .attr('x', (d, i) => Math.random() * 200 + (i + 400))
      .attr('y', (d, i) => Math.random() * 200 + i)
      // .attr('
      .text((d) => d)
    
    return svg
  }