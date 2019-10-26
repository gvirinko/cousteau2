
// Константы
const placesSection = document.querySelector('.places-list');
const userInfoButtonEdit = document.querySelector('.user-info__button_edit');

const token = '58156076-0fba-40e5-92f5-53ef93f74257';
const cohortId = 'cohort3';
const serverIP = 'http://95.216.175.5';

// Открытие формы редактирования профиля
userInfoButtonEdit.addEventListener('click', function(event) {
    const popupEditMenu = document.querySelector('.popup-edit');
    let editPopup = new EditPopup(popupEditMenu);
});

// Функция запуска слушателей для валидации
function startValidationListeners() {
    // для формы редактирования профиля
    const formEdit = document.forms.form_edit;
    formEdit.addEventListener('input', handleValidate);
    formEdit.addEventListener('input', validateEditOnInput);
    // для формы создания карточки
    const formCard = document.forms.form_card;
    formCard.addEventListener('input', handleValidate);
    formCard.addEventListener('input', validateCardOnInput);
}

startValidationListeners();

let api = new Api(serverIP, { authorization: token, 'Content-Type': 'application/json'});

//1. Загрузка информации о пользователе с сервера
api.loadProfile();

// 2. Загрузка первоначальных карточек с сервера
api.loadInitialCards();

    /**
     * Хорошее начало.
     *
     * DONE Надо вынести методы API в отдельный класс
     *
     * В брифе
     * Для работы с API создайте класс Api. Все запросы должны быть методами этого класса:
     * .then не должно быть реализации
     *
     * DONE вынесите token, id когорты, IP сервера в константы
     *
     * (не успеваю) Валидацию тоже надо бы в отдельный свой класс
     *
     * DONE Название файла должно соответствовать названию класса
     *      1файл = 1класс
     *
     * В целом классы у вас хорошие, читабельные
     *
     */


    /**
     * 
     * Работа принимается
     * 
     * В конце каждого fetch надо добавлять  catch
     * 
     * Ждём вас в следующем спринте
     * @koras
     * 
     * 
     */