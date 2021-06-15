// Bhasvic Chronicles

//write an array for each of the 3 data sets: grade, action, consequence. Use nested arrays for those with diffrent outcomes
let gradesArr = ['A*', 'A' , 'B', 'C','D','E'];
let data = {
 _goodGrade : [
    'Neil has promoted you to be become the prinipal',
    'you are now the shadow foreign secretary... for Caroline Lucas',
    'you have been accepted into Cambridge University... doing Land Economy',
    'you have been selected to be the first passenger for starship... lets hope it works'
],
 _badGrade : [
    'You now work at McDonalds... and Samuel is your boss',
    'bhasvic has removed you from their list of Alumni',
    'you have now been employed as an invigilator at Bhasvic'
],
 _goodAddOn : [
    'you get paid £250,000 a year',
    'you are gifted a Tesla model S',
    'You now are the proud owner of a mansion entire filled with huskies'
],
 _badAddOn : [
    'the car you drive is a used moped with 2 extra wheels you glued on',
    'you are forced to wear sketchers for the rest of your life',
    'you make coffee at home by mixing water and dirt in a bowl'
],
checkInputStyle(string){
    let stringArr = string.split('');
    if (stringArr[0] === ' '){return false}
    else if(stringArr[stringArr.length - 1 ] === ' '){return false}
    else {return true}
},
set badAddOn(newElm){ (this._badAddOn).push(newElm); if(this.checkInputStyle(newElm)){console.log('Element added! The new array is: ' + this._badAddOn) } else {console.log('Invalid entry, please check for README.md for help.')}},
set goodAddOn(newElm){ (this._goodAddOn).push(newElm); if(this.checkInputStyle(newElm)){console.log('Element added! The new array is: ' + this._goodAddOn)} else {console.log('Invalid entry, please check for README.md for help.')} },
set goodGrade(newElm){ (this._goodGrade).push(newElm); if(this.checkInputStyle(newElm)){console.log('Element added! The new array is: ' + this._goodGrade)} else {console.log('Invalid entry, please check for README.md for help.')} },
set badGrade(newElm){ (this._badGrade).push(newElm); if(this.checkInputStyle(newElm)){console.log('Element added! The new array is: ' + this._badGrade) } else {console.log('Invalid entry, please check for README.md for help.')}},
get badAddOn(){ return Math.floor(Math.random() * (this._badAddOn).length)},
get goodAddOn(){ return Math.floor(Math.random() * (this._goodAddOn).length)},
get goodGrade(){ return Math.floor(Math.random() * (this._goodGrade).length)},
get badGrade(){ return Math.floor(Math.random() * (this._badGrade).length)},
}
// create a function which takes an argument of the length of an array and generates rand index
const findIndexLength = inArr => {
    return inArr.length
};
const getRandIndex = (arrIn) => {
    return Math.floor(Math.random()* findIndexLength(arrIn))
};
// Create a fucntion that when called will return the random sentence
const runProgram = () => {
   let gradeIndex = getRandIndex(gradesArr);
   let mid = '';
   let end = '';
   if (gradeIndex <= 2){  mid = badGrade[getRandIndex(badGrade)];
    end = badAddOn[getRandIndex(badAddOn)]
}
}
