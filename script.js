const imgInfo = [
    {pathImg: 'images/C++.png', alt:'C++', name: 'C++', fio: 'Petrov P.P.', group: 'CT-31-21', style: 'png'},
    {pathImg : 'images/CSharp.png', alt:'CSharp', name: 'C#', fio: 'Ivanov. I.I.', group: 'CT-41-21', style: 'png'},
    {pathImg : 'images/Go.png', alt:'Go', name: 'Go', fio: 'Sidorov S.S.', group: 'CT-42-21', style: 'png'},
    {pathImg : 'images/Java.png', alt:'Java', name: 'Java', fio: 'Titov T.T.', group: 'CT-43-21', style: 'png'},
    {pathImg : 'images/JS.png', alt:'JS', name: 'JS', fio: 'Lomov L.L.', group: 'CT-31-22', style: 'png'},
    {pathImg : 'images/Python.png', alt:'Python', name: 'Python', fio: 'Andreev A.A.', group: 'CT-31-23', style: 'png'}
]

//const keys = ['name', 'fio', 'group', 'style'];

const prevBtn = document.getElementsByClassName('btn__prev-img');
const nextBtn = document.getElementsByClassName('btn__next-img');

let i = 0;//Индекс текущего объекта массива

//Функция открытия маленьких изображений в слайдере
const allImages = document.getElementsByClassName('allImages-item');
for(let i = 0; i < allImages.length;i++){
    allImages[i].addEventListener('click', function(){
        const items = document.querySelectorAll('.item');
        const img = document.querySelector('img');

        img.src = imgInfo[i].pathImg;
        img.alt = imgInfo[i].alt;
        items[0].innerHTML = imgInfo[i].name;
        items[1].innerHTML = imgInfo[i].fio;
        items[2].innerHTML = imgInfo[i].group;
        items[3].innerHTML = imgInfo[i].style;

        resetTimer();
    })
}

//Таймер
let timer = setInterval(autoNextImg, 3000);

function resetTimer(){
    clearInterval(timer);
    timer = setInterval(autoNextImg, 3000);
}

function autoNextImg(){
    checkIndexNext();

    assignImgData();
}

function btnPrevImg(){
    checkIndexPrev();

    assignImgData();

    resetTimer();
    // for(let j = 0;j < keys.length;j++){
    //     items[j].innerHTML = imgInfo[i].name;
    // }
}

function btnNextImg(){
    checkIndexNext();

    assignImgData();
    
    resetTimer();
}

//Проверки на выход за пределы массива
function checkIndexPrev(){
    if(i === 0){
        i = imgInfo.length - 1;
    }
    else{
        i--;
    }
}

function checkIndexNext(){
    if(i === imgInfo.length - 1){
        i = 0;
    }
    else{
        i++;
    }
}

//Присваивание данных
function assignImgData(){
    const img = document.querySelector('img');
    const items = document.querySelectorAll('.item');

    img.src = imgInfo[i].pathImg;
    img.alt = imgInfo[i].alt;
    items[0].innerHTML = imgInfo[i].name;
    items[1].innerHTML = imgInfo[i].fio;
    items[2].innerHTML = imgInfo[i].group;
    items[3].innerHTML = imgInfo[i].style;
}
