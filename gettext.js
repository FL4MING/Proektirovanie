var inBody = function(){            // Создаём анонимную функцию. Помещаем её в переменную "inBody"
   var xhr = new XMLHttpRequest()  // Создаём локальную переменную XHR, которая будет объектом XMLHttpRequest
   xhr.open('GET', 'https://github.com/FL4MING/Proektirovanie/blob/35e70fbabccddf1d22553d9111ae5e6957c17bbe/Laba%20%E2%84%962.html')     // Задаём метод запроса и URL  запроса
   xhr.onload = function(){        // Используем обработчик событий onload, чтобы поймать ответ сервера XMLHttpRequest
      console.log(xhr.response)           // Выводим в консоль содержимое ответа сервера. Это строка!
      document.body.innerHTML = xhr.response  // Содержимое ответа, помещаем внутрь элемент "body" 
   }
   xhr.send()  // Инициирует запрос. Посылаем запрос на сервер.
}
inBody()