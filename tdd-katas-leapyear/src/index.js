const checkIfIsLeapYear = (year) => {
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0)

}


module.exports.checkIfIsLeapYear = checkIfIsLeapYear;
