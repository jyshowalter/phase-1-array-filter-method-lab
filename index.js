// Code your solution here
function findMatching (array, name) {
    return array.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch (array, letter) {
    return array.filter(driver => driver.startsWith(letter));
}

function matchName (array, name) {
    return array.filter (hometown => hometown.name === name);
}