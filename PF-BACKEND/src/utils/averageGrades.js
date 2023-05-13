const averageGrades = (arr) =>{
    if(!arr.length) return 0
    const sum = arr.reduce((a, b) => (a*1) + (b*1));
    const average = sum / arr.length;
    return average
}

module.exports = averageGrades;