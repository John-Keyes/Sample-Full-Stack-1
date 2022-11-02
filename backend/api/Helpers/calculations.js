
module.exports = {
    Average: arr => {
        let sum = 0;
        arr.forEach(grade => sum += grade); 
        return sum / arr.length;
    }
}