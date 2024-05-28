// appModules/api/api-utils.js

function getRandomGame(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

module.exports = {
    getRandomGame
};
