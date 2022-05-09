//============
// FUNCTIONS
//============

//Determine the proficiency bonus based off of character level
function getProficiencyBonus(level) {
    
    if (level < 1 || level > 20) {
        return false;
    } else if(level <= 4) {
        return 2;
    } else if (level >= 5 && level <= 8) {
        return 3;
    } else if (level >= 9 && level <= 12) {
        return 4;
    } else if (level >= 13 && level <= 16) {
        return 5;
    } else {
        return 6;
    }
}

function getAttributeMod(score) {
    if (score === 10) {
        return 0;
    } else if (score > 10) {
        return Math.floor((score - 10)/2);
    } else {
        return Math.floor(-((10 - score)/2));
    }
}

function calculate() {
    const skill = document.querySelector('#acrobatics');
    let attribute = document.querySelector('.dexterity').value;
    let level = document.querySelector('.charlvl').value;
    let result = document.querySelector('.acrobaticsResult');


    if (skill.checked) {
        result.textContent = getAttributeMod(attribute) + getProficiencyBonus(level);
    } else {
        result.textContent = getAttributeMod(attribute);
    }

}