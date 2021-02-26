export function getRandom(min = 0, max = 1000000) {
    return Math.random() * (max - min) + min;
}