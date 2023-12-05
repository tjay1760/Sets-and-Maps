const movies = new Map();
movies.set(2020, "Parasite");
movies.set(2021, "Birdman");
movies.set(2022, "12 years of a slave");
movies.set(2023, "money heist");
movies.set(204, "The challenge");
movies.set(2025, "Mr robot");
movies.set(2026, "the prestige");
movies.set(2027, "Shadow");
movies.set(2028, "american gods");
movies.set(2029, "westword");

// val = movies.get(2020);
// console.log(val);
// wea Map
const cities = new Set();

const newcastle = {city:"Newcastle"};
const nairobi = {city:"Nairobi"};
const newYork = {city:"New York"};
const naivasha = {city:"Naivasha"};

cities.add(nairobi, "Kenya");
cities.add(naivasha, "Kenya");
const city = cities.has(naivasha);
console.log(cities);
cities.add(city, "Kenya");
const val = cities.entries()
console.log(val);