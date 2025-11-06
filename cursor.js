// Находим элементы кастомного курсора
const customCursor = document.getElementById('custom-cursor');
const targetLinks = document.querySelectorAll('.gif-link');

// ******************************************************
// ФУНКЦИЯ ПЕРЕМЕЩЕНИЯ КУРСОРА ЗА МЫШЬЮ
// ******************************************************
document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});


// ******************************************************
// ФУНКЦИЯ СМЕНЫ КУРСОРА (КЛАССОВ) ПРИ НАВЕДЕНИИ НА ССЫЛКИ
// ******************************************************
targetLinks.forEach(link => {
    
    link.addEventListener('mouseover', () => {
        // Добавляем класс, который меняет фон на Link.webp
        customCursor.classList.add('cursor-link');
    });

    link.addEventListener('mouseout', () => {
        // Удаляем класс, возвращаясь к Arrow.webp
        customCursor.classList.remove('cursor-link');
    });
    
});