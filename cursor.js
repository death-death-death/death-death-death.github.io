// Находим наш кастомный элемент курсора
const customCursor = document.getElementById('custom-cursor');
// Находим элемент, при наведении на который курсор должен стать анимированным (нашу ссылку)
const targetLink = document.querySelector('a');


// ******************************************************
// ФУНКЦИЯ ПЕРЕМЕЩЕНИЯ КУРСОРА ЗА МЫШЬЮ
// ******************************************************
document.addEventListener('mousemove', (e) => {
    // Устанавливаем позицию кастомного курсора
    // e.clientX и e.clientY дают точные координаты мыши
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});


// ******************************************************
// ФУНКЦИЯ СМЕНЫ КУРСОРА ПРИ НАВЕДЕНИИ НА ССЫЛКУ
// ******************************************************

// 1. При наведении на ссылку (<a>)
targetLink.addEventListener('mouseover', () => {
    // Добавляем класс, который в CSS меняет фон на анимированный GIF
    customCursor.classList.add('cursor-animated'); 
});

// 2. Когда мышь уходит со ссылки (<a>)
targetLink.addEventListener('mouseout', () => {
    // Убираем класс, чтобы вернуть статичный PNG по умолчанию
    customCursor.classList.remove('cursor-animated'); 
});