// Находим элементы кастомного курсора
const customCursor = document.getElementById('custom-cursor');
const targetLinks = document.querySelectorAll('.gif-link');

// Элементы консоли
const terminalWindow = document.getElementById('terminal-window'); 
const terminalInput = document.getElementById('terminal-input');
const terminalOutput = document.getElementById('terminal-output');
const spookySound = document.getElementById('spooky-sound');


// ******************************************************
// ФУНКЦИЯ ПЕРЕМЕЩЕНИЯ КУРСОРА ЗА МЫШЬЮ
// ******************************************************
document.addEventListener('mousemove', (e) => {
    customCursor.style.left = `${e.clientX}px`;
    customCursor.style.top = `${e.clientY}px`;
});


// ******************************************************
// ФУНКЦИЯ СНЯТИЯ БЛОКИРОВКИ ПРОКРУТКИ ПРИ ЗАГРУЗКЕ
// ******************************************************
document.addEventListener('DOMContentLoaded', (event) => {
    // Удаляем класс, который блокирует прокрутку, сразу после загрузки DOM
    document.body.classList.remove('no-scroll');
    // !!! УДАЛЕНО: window.scrollTo(0, 0); - чтобы не сбрасывать фокус и предотвратить скачок
    // !!! УДАЛЕНО: terminalInput.focus(); - чтобы предотвратить скачок
});


// ******************************************************
// ФУНКЦИЯ СМЕНЫ КУРСОРОВ
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


// ******************************************************
// ЛОГИКА КОНСОЛИ (ПОЛНОСТЬЮ НА АНГЛИЙСКОМ)
// ******************************************************

// Добавляет чистый текст (без HTML)
function outputText(text) {
    const p = document.createElement('div');
    p.textContent = text;
    terminalOutput.appendChild(p);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Добавляет текст с HTML-разметкой (для форматирования команд)
function outputHTML(htmlContent) {
    const div = document.createElement('div');
    div.innerHTML = htmlContent;
    terminalOutput.appendChild(div);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

// Обработка команд
function handleCommand(command) {
    const parts = command.toLowerCase().trim().split(' ');
    const cmd = parts[0];
    const arg = parts.slice(1).join(' ');

    outputText(`C:>${command}`); // Используем outputText для ввода пользователя

    switch (cmd) {
        case 'help':
            outputText('--- AVAILABLE COMMANDS ---');
            // Используем outputHTML и span.command-name
            outputHTML(`<span class="command-name">play spooky sound</span> - Play a spooky sound effect.`);
            outputHTML(`<span class="command-name">clear</span> - Clear the console output.`);
            outputHTML(`<span class="command-name">surprise</span> - You know the rules, and so do I.`);
            break;
            
        case 'play':
            if (arg === 'spooky sound') {
                if (spookySound) {
                    spookySound.currentTime = 0; 
                    spookySound.play();
                    outputText('Playing: spooky sound.');
                } else {
                    outputText('ERROR: Sound element not found.');
                }
            } else {
                outputText('ERROR: Unknown "play" argument.');
            }
            break;
            
        case 'clear':
            terminalOutput.innerHTML = '';
            // Сброс приветствия с красным help
            outputHTML(`Welcome. Type '<span class="command-name">help</span>' for a list of commands.`);
            break;
            
        case 'surprise':
            outputText('Never gonna give you up...');
            window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
            break;


        default:
            // Новое сообщение об ошибке
            outputText("theres no such command, dumbass");
            break;
    }
}

// Слушатель события нажатия Enter в консоли
terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const command = terminalInput.value;
        if (command) {
            handleCommand(command);
        }
        terminalInput.value = ''; // Очищаем поле ввода
    }
});

// ******************************************************
// ЛОГИКА БЛОКИРОВКИ ПРОКРУТКИ СТРАНИЦЫ (при наведении)
// ******************************************************

// Блокируем прокрутку страницы, когда курсор над консолью
terminalWindow.addEventListener('mouseover', () => {
    document.body.style.overflow = 'hidden';
});

// Разрешаем прокрутку страницы, когда курсор уходит
terminalWindow.addEventListener('mouseout', () => {
    document.body.style.overflow = 'auto'; 
});