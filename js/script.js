"use strict";

// alert("Hello");

// const result = confirm("Are you here?");
// console.log(result);


// const answer = prompt("Вам есть 18?", "18");
// console.log(answer);

// const answers = [];

// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваша фамилия?', '');
// answers[2] = prompt('Сколько вам лет?', '');

// && - and

// || - or



const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
     genres: [],
    privat: false
}

const movie1 = prompt("Один из последних просмотренных фильмов?", ""),
      rate1 = prompt("На сколько оцените его?", ""),
      movie2 = prompt("Один из последних просмотренных фильмов?", ""),
      rate2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[movie1] = rate1;
personalMovieDB.movies[movie2] = rate2;
console.log(personalMovieDB)