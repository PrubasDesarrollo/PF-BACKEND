const averageGrades = (arr) =>{
    if(!arr.length) return 0
    const sum = arr.reduce((a, b) => (Number(a.valoraciones)*1) + (Number(b.valoraciones)*1));
    const average = sum / arr.length;
    return average
}

module.exports = averageGrades;