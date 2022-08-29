let anime1 = 'Champloo'
let anime2 = 'Naruto'
const bestAnime = (a, b) => {
    if (a.length > b.length) {
        return a
    } else {
        return b
    }
}
console.log(bestAnime(anime1, anime2));
console.log(anime1.length + anime2.length);