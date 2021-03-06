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
    {festival: "Tortuga", femaleA: 28, maleA: 72, femaleB: 43, maleB: 57, femaleC: 7, maleC: 93}
    // ["festival", "femaleA", "maleA", "femaleB", "maleB", "femaleC", "maleC"]
  ]

console.log(data)

const radio = "Beale Street";
  ​
// function getRightFestival(festivalStr) {
//     for (const festival of data) {
//         if (festival.festival === festivalStr) {
//         return festival;
//         }
//     }
// }
//   ​
// const matchingFestival = getRightFestival(radio)
const matchingFestival = () => {
    if(data.find((festival) => festival.festival === radio)){
        return true
    } else {
        return "All Festivals"
    }
}

console.log(matchingFestival)