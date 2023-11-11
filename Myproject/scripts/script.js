/// TIMER

const deadline = new Date("2023, 31 December");

function getLeftTime(d) {
    const currentTime = new Date();
    const differ = Date.parse(d) - currentTime;
    const months = Math.floor(differ / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((differ / (1000 * 60 * 60 * 24)) % 30, 4);
    const hours = Math.floor((differ / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((differ / (1000 * 60)) % 60);
    const seconds = Math.floor((differ / 1000) % 60);

    return {
        total: differ,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    };
}

function checkZero(num) {
    if (num < 10) {
        return `0${num}`;
    } else {
        return num;
    }
}

getTimerElements();

function getTimerElements() {
    if (deadline == 0) {
        clearInterval(setInt);
    } else {
        const monthsElem = document.querySelector(".timer-months"),
            daysElem = document.querySelector(".timer-days"),
            hoursElem = document.querySelector(".timer-hours"),
            minutesElem = document.querySelector(".timer-minutes"),
            secondsElem = document.querySelector(".timer-seconds");
        function setTimer() {
            monthsElem.textContent = checkZero(getLeftTime(deadline).months);
            daysElem.textContent = checkZero(getLeftTime(deadline).days);
            hoursElem.textContent = checkZero(getLeftTime(deadline).hours);
            minutesElem.textContent = checkZero(getLeftTime(deadline).minutes);
            secondsElem.textContent = checkZero(getLeftTime(deadline).seconds);
        }
        setTimer();
    }
}

const setInt = setInterval(getTimerElements, 1000);

//// TABS

const buttons = document.querySelectorAll(".left-nav-button");
const buttonBlock = document.querySelector(".left-bar__buttons");
const containers = document.querySelectorAll(".get-method-button-div");

function hideContainer() {
    containers.forEach((element) => {
        element.classList.add("hidden");
    });
    buttons.forEach((button) => {
        button.classList.remove("active");
    });
}

function showContainer(i = 0) {
    console.log(`this is function showContainers ${containers[0]}`);
    containers[i].classList.remove("hidden");
    buttons[i].classList.add("active");
}

buttonBlock.addEventListener("click", (e) => {
    console.log(e.target);
    const et = e.target;
    if (et.classList.contains("left-nav-button")) {
        buttons.forEach((el, index) => {
            console.log(el, index);
            if (et === el) {
                hideContainer();
                showContainer(index);
            }
        });
    }
});

// SET QUESTIONS AND ANSWERS FOR METHODS

const methods = [
    {
        q: "Что такое метод SLICE?",
        keyword: "slice",
        answer: "метод SLICE позволяет скопировать часть исходного массива в новый массив. Первый аргумент - с какого индекса копировать, второй аргумент - сколько элементов копировать",
    },
    {
        q: "Что такое метод SPLICE?",
        keyword: "splice",
        answer: "SPLICE имеет три функции: массово удалять, заменять и добавлять элементы. УДАЛЕНИЕ: принимаются два аргумента - с какого индекса начинать удалять, и сколько элементов удалять. ЗАМЕНА - к двум предыдущим элементам можно передать значения, которые добавятся в массив вместо удаленных (встанут именно туда). ДОБАВЛЕНИЕ - используя аргументы из первого и второго способа, если вторым аргументов выбрать ноль - ничего не удалится, зато просто добавятся элементы",
    },
    {
        q: "Что такое метод MAP?",
        keyword: "map",
        answer: "Метод MAP позволяет циклом изменять каждый элемент одного массива, помещая их в новый массив",
    },
    {
        q: "Что такое метод MAP?",
        keyword: "map",
        answer: "Метод MAP позволяет циклом изменять каждый элемент одного массива, помещая их в новый массив",
    },
    {
        q: "Что такое метод FILTER?",
        keyword: "filter",
        answer: "Метод FILTER отфильтровать элементы одного массива с помощью условия и поместить их в новый массив",
    },
    {
        q: "Что такое метод REDUCE?",
        keyword: "reduce",
        answer: "Метод REDUCE позволяет привести значения числового массива к одному числу (например, через сложение). Возвращает число.",
    },
    {
        q: "Что такое метод INCLUDES?",
        keyword: "includes",
        answer: "Метод INCLUDES позволяет проверить, есть ли в массиве элемент с заданным значением. Вернет boolean",
    },
    {
        q: "Что такое метод SOME?",
        keyword: "some",
        answer: "Метод SOME позволяет проверить, есть ли в массиве элементы, удовлетворяющие заданному условию. Возвращает boolean",
    },
    {
        q: "Что такое метод EVERY?",
        keyword: "every",
        answer: "Метод EVERY позволяет проверить, что ВСЕ элементы в массиве удовлетворят заданному условию. Возвращает boolean.",
    },
    {
        q: "Что такое метод INDEXOF?",
        keyword: "indexof",
        answer: "Метод INDEXOF позволяет проверить, есть ли в массиве элемент с заданным значением. Вернет первый индекс, если есть или -1, если нет",
    },
    {
        q: "Что такое метод FINDINDEX?",
        keyword: "findindex",
        answer: "Метод FINDINDEX позволяет проверить, есть ли в массиве элементы, удовлетворяющие заданному условию. Возвращает индекс первого элемента, удовлетворяющего условию",
    },
    {
        q: "Что такое метод FIND?",
        keyword: "find",
        answer: "Метод find позволяет проверить, есть ли в массиве элементы, удовлетворяющие заданному условию. Возвращает значение первого элемента (то есть сам элемент), удовлетворяющего условию",
    },
    {
        q: "Что такое метод CONCAT?",
        keyword: "concat",
        answer: "Принимает в качестве аргументов любые данные - массивы, примитивы. И добавляет их в исходный массив",
    },
    {
        q: "Что такое метод FLAT?",
        keyword: "flat",
        answer: "делает из массива с вложенностями массив без вложенностей. Степень глубины регулируется единтвенным аргументом-цифрой",
    },
    {
        q: "Что такое метод SORT?",
        keyword: "sort",
        answer: "Сортирует массив, принимает аргументы для правил сортировки. Мутирует исходный массив.",
    },
    {
        q: "Что такое метод REVERSE?",
        keyword: "reverse",
        answer: "Меняет порядок элементов на обратный. Мутирует исходный массив",
    },
];

const definitions = [
    {
        q: "Что такое hoisting?",
        answer: "HOISTING (всплытие) - возможность использовать переменную var или вызвать функцию до ее объявления. Работает только с переменными var и function-declaration.",
    },
    {
        q: "Какие типы данных существуют?",
        answer: "1 - number, 2 - string, 3 - boolean, 4 - undefined, 5 - bigInt, 6 - Symbol, 7 - null, 8 - Object",
    },
    {
        q: "Что относится к обьектам?",
        answer: "1 - Функции, 2 - Массивы, 3 - Даты, 4 - Коллекции (Map, Set)",
    },
    {
        q: "Чем отличаются let, const и var",
        answer: `1 - var имеет функциональную область видимости, let и const  - блочную (это значит, что var, объяленная в блоке кода, кроме функции, будет доступна везде).
         2 - var поддерживает hoisting (можно обращаться к ней до ее объявления), let и const - нет. 
         3 - var можно переобъявить, let и const - нет`,
    },
    {
        q: "Какие значения преобразуются в false и какие в true",
        answer: `TRUE - string/number, object/array, Symbol.
        FALSE - 0, null, undefined, empty string, NaN.`,
    },
    {
        q: "Логика работы операторов '&&' и '||'.",
        answer: `'И' ('&&') в цепочке ищет первый false, который он вернет в первую очередь. Если все true, вернет последний true.
        'ИЛИ' ('||') в цепочке ищет первый true, который он вернет в первую очередь. Если все false, вернет последний false.`,
    },
    {
        q: "4 варианта абсолютного копирования обьекта",
        answer: `1 - цикл for IN,
        2 - Object.assign({}, oldObj).
        3 - Spread: {...oldObj}.
        4 - structuredClone(oldObj)`,
    },
    {
        q: "4 варианта абсолютного копирования массива",
        answer: `1 - циклы (for, forOf, forEach),
        2 - Map: oldArr.map((el) => el).
        3 - Spread: [...oldArr].
        4 - Slice: oldArr.slice()`,
    },
];

const getMethodButton = document.querySelector(".get-method-button");
const question = document.querySelector(".question-p");
const answerBlock = document.querySelector(".answer");
const answerText = document.querySelector(".answer__text");
const gifBlock = document.querySelector(".question-card-gif-div");
const dontKnowButton = document.querySelector(".question-dontknow-button");
const btnIKnow = document.querySelector(".answer-button__yes");
const btnIDontKnow = document.querySelector(".answer-button__no");
const btnGo = document.querySelector(".answer-button__go");

let random;

function showQuestion() {
    gifBlock.classList.remove("hidden");
    answerBlock.classList.add("hidden");
    random = Math.floor(Math.random() * methods.length);
    question.textContent = `${methods[random].q}`;
    btnIKnow.style.display = "flex";
    btnIDontKnow.style.display = "flex";
    btnGo.style.display = "none";
}

function showAnswer() {
    gifBlock.classList.add("hidden");
    answerBlock.classList.remove("hidden");
    btnIKnow.style.display = "none";
    btnIDontKnow.style.display = "none";
    btnGo.style.display = "flex";

    answerText.textContent = `${methods[random].answer}`;
}

// addEventListeners
getMethodButton.addEventListener("click", showQuestion);
// dontKnowButton.addEventListener("click", setAnswer);

btnIKnow.addEventListener("click", () => {
    showAnswer();
});

btnIDontKnow.addEventListener("click", () => {
    showAnswer();
});

btnGo.addEventListener("click", showQuestion);

const arraytest = [1, 5, 23, 56, 4, 6];

const vari = arraytest.find((item) => item > 20);

// console.log(vari);
// console.log(arraytest.length);

// console.log(methods[2].keyword);

var green = 34;

var green = 65;

const obj = {
    age: 28,
    sex: "man",
    hair: "blonde",
};

const obj2 = structuredClone(obj);

obj2.age = 34;

console.log(obj2, obj);
