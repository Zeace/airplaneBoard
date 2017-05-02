function keyGen() {
    return Math.random().toString(36).substr(2, 9);
}

const STATUSES = ['', 'Вылетел', 'Приземлился', 'Посадка', 'Задержан'];

const TIME_OPTIONS = {
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
};

export default {TIME_OPTIONS, STATUSES, keyGen}