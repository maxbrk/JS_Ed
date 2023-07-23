/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

const numberOfFilms = +prompt ('How many movies did you watch?','');
let personalMovieDB = {
	count : numberOfFilms,
	movies : {},
	actors : {},
	genres : [],
	privat : false
};
// let a = prompt ('What last movie did you watch?','');
// personalMovieDB.movies[a] = prompt ('How do you evaluate it?','');
// let b = prompt ('What last movie did you watch?','');
// personalMovieDB.movies[b] = prompt ('How do you evaluate it?','');

let a = prompt ('What last movie did you watch?','');
let b = prompt ('How do you evaluate it?','');
let c = prompt ('What last movie did you watch?','');
let d = prompt ('How do you evaluate it?','');

personalMovieDB[a] = b;
personalMovieDB[c] = d;

console.log (personalMovieDB);