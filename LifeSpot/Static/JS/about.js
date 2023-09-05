/*
* Конструктор, через который создаётся комментарий
*
* */
function Comment() {
    // Запросим имя
    this.author = prompt("Как вас зовут ?")
    if (this.author == null) {
        this.empty = true
        return
    }

    // Запросим текст
    this.text = prompt("Оставьте отзыв")
    if (this.text == null) {
        this.empty = true
        return
    }

    // Сохраним текущее время
    this.date = new Date().toLocaleString()
}

/*
* Оставить комментарий
*
* */
function addComment() {
    let comment = new Comment()

    // проверяем, успешно ли юзер осуществил ввод
    if (comment.empty) {
        return;
    }

    // Запросим, хочет ли пользователь оставить полноценный отзыв или это будет обычный комментарий
    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')

    if (enableLikes) {
        // Создадим для отзыва новый объект из прототипа - комментария
        let review = Object.create(comment)
        // и добавим ему нужное свойство
        review.rate = 0;

        // Добавляем отзыв с возможностью пользовательских оценок
        writeReview(review)
    } else {
        // Добавим простой комментарий без возможности оценки
        writeReview(comment)
    }
}

/*
* Запишем объект на страницу
*
* */
const writeReview = review => {
    let likeCounter = '';

    // Если публикуется отзыв - добавляем ему кнопку с лайками.
    if (review.hasOwnProperty('rate')) {

        // Генерим идентификатор комментария.
        let commentId = Math.random();
        // Для кнопки лайков добавляем: идентификатор, атрибут onclick для передачи идентификатора в функцию, значок лайка, и само значение счётчика отделяем пробелом
        // Также мы добавили стиль, чтобы кнопка смотрелась лучше и не имела рамок
        likeCounter += '<button id="' + commentId + '" style="border: none" onclick="addLike(this.id)">' + `❤️ ${review.rate}</button>`
    }
    // Запишем результат 
    document.getElementsByClassName('reviews')[0].innerHTML += ' <div class="review-    text">\n' + `<p> <i> <b>${review['author']}</b> ${review['date']}${likeCounter}</i></p>` + `<p>${review['text']}</p>` + '</div>';
}

/*
* Увеличивает счётчик лайков
*
* */
function addLike(id) {
    // Найдём нужный элемент по id
    let element = document.getElementById(id);

    // Преобразуем текст элемента в массив, разбив его по пробелам (так как счётчик лайков у нас отделен от символа ❤️пробелом)
    let array = element.innerText.split(' ')

    // Вытащим искомое значение счётчика и сразу же преобразуем его в число, так как
    // при сложении любого значения со строкой в JS будет строка, а нам этого не требуется
    let resultNum = parseInt(array[array.length - 1], 10);

    // Увеличим счётчик
    resultNum += 1

    // Сохраним измененное значение обратно в массив
    array[array.length - 1] = `${resultNum}`

    // Обновим текст элемента
    element.innerText = array.join(' ')
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function moveSlide() {
    var t = "next" === this._direction ? -100 : 100
        , i = this._transform + t;
    "next" === this._direction ? ++this._currentIndex > this._$itemList.length - 1 && (this._currentIndex -= this._$itemList.length) : --this._currentIndex < 0 && (this._currentIndex += this._$itemList.length),
        this._transform = i,
        this._$items.style.transform = "translateX(".concat(i, "%)"),
        this._setActiveClass()
}

function moveToSlide(t) {
    var i = slideIndex;
    this._direction = t > i ? "next" : "prev";
    for (var e = 0; e < Math.abs(t - i); e++)
        moveSlide()
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}