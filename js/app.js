/* Задания на урок:

1) Изменить жанр фильма, поменять "комедия" на "драма"

2) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

3) Удалить все рекламные блоки со страницы (правая часть сайта)

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов 

6) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. 

Страница не должна перезагружаться. event.preventDefault()
Новый фильм должен добавляться в movieDB.movies.

7) Если название фильма больше, чем 15 символ - обрезать его и добавить три точки

8) При клике на мусорную корзину - элемент будет удаляться из списка и в movieDB.movies (сложно)

9) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

10) Фильмы должны быть отсортированы по алфавиту 
*/

const movieDB = {
	movies: [
		'Логан',
		'Агент 007',
		'Лига справедливости',
		'Ла-ла лэнд',
		'Одержимость',
		'Скотт Пилигрим против',
	],
};

let { movies } = movieDB;
console.log('movies: ', movies);

let dramma = document.querySelector('.promo__genre')
let bgPoster = document.querySelector('.promo__bg')
const adv_promo = document.querySelectorAll('.promo__adv img')
const  promoInteract = document.querySelector('.promo__interactive-list')
const addInp = document.querySelector('.adding__input')
const btnAdd = document.querySelector('.btn_add')
const addForm = document.querySelector('.add')
const checkbox = addForm.querySelector('[type="checkbox"]');


let inputValue = addInp.value;

dramma.textContent = 'Драмма'
bgPoster.style.background = 'url(/img/bg.jpg) center center/cover no-repeat'
adv_promo.forEach((item) => {
	item.remove();
})

const sortArr = (arr) => {
	arr.sort();
};
const deleteAdv = (arr) => {
	arr.forEach(item => {
		item.remove();
	});
};

addForm.addEventListener('submit', (event) => {
	event.preventDefault(); 

	let newFilm = addInp.value; 
	const favorite = checkbox.checked; 

	if (newFilm) { 

        if (newFilm.length > 9) {
			newFilm = `${newFilm.substring(0,10)}...`;
		}

		if (favorite) {
			console.log('Добавляем любимый фильм');
		}

		movieDB.movies.push(newFilm); 
		createMovieList(movieDB.movies, promoInteract); 
	}

	event.target.reset();
});

function createMovieList(films, parent) {
	
	parent.innerHTML = ""; 
     
    sortArr(films);       

    
	films.forEach((film, i) => {
		parent.innerHTML += `
             <li class="promo__interactive-item">${i + 1}. ${film}
            <div class="delete"></div>
        </li>`;
	});

    
    document.querySelectorAll('.delete').forEach((btn, i) => {
       
        btn.addEventListener('click', () => {
			
			btn.parentElement.remove();
			movieDB.movies.splice(i, 1); 

			createMovieList(films, parent);
		});
	});
}
createMovieList(movieDB.movies, promoInteract);


//2dop
// let movieList = document.createElement('div')
// let main = document.querySelector('.promo');
// main.append(movieList)
// movieList.style.cssText= 'width: 22%; background-color: #212121' ;
// movieList.innerHTML = '<ol class="ul_film"><li class="film_text">Логан</li><li class="film_text">Агент 007</li><li class="film_text">Лига справедливости</li><li class="film_text">Ла-ла лэнд</li><li class="film_text">Одержимость</li><li class="film_text">Скотт Пилигрим против</li></ol>';

// let ulFilm = document.querySelector('.ul_film')
// let filmText = document.querySelectorAll('.film_text')
// let btnAdd = document.querySelector('.btn_add')
// let addInp = document.querySelector('.adding__input')
// let check = document.querySelector('input[name=checkbox]')

// btnAdd.onclick = function () {
// 	return false
// }

// check.addEventListener('click' , function() {
// 	if(this.checked) {
// 	  console.log("Добавлено в любимый");
// 	}
// })

// btnAdd.addEventListener('click', () => {
// 	let lo = document.createElement('li')
// 	lo.classList = 'film_text'
// 	lo.style.cssText = 'font-size: 19px;padding-bottom: 9px;font-weight:300;cursor:pointer;'
// 	lo.innerHTML = `${addInp.value}`
// 	ulFilm.append(lo)
// 	check.checked = false; 
// })
 
// ulFilm.style.cssText = 'margin-left:32px; color:#ffff;margin-top:30px'
// filmText.forEach((item) => {
// 	item.style.cssText = 'font-size: 19px;padding-bottom: 9px;font-weight:300;cursor:pointer;'
// })
