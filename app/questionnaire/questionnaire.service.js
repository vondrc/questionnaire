export default class QuestionnaireService {
    /* @ngInject */
    constructor() {
    }

    saveToStorage(person) {
        let oldData = JSON.parse(localStorage.getItem('questionnaireData')) || [];
        let newItem = person;
        oldData.push(newItem);
        localStorage.setItem('questionnaireData', JSON.stringify(oldData));
    }

    getCategories() {
        return [
            {id: "first", value: "Pod 18 let"},
            {id: "second", value: "18 - 27 let"},
            {id: "third", value: "28 - 45 let"},
            {id: "fourth", value: "Nad 45 let"}
        ];
    }

    getActivities() {
        return {
            first: [
                {value: "Počítačové hry"},
                {value: "Sport"},
                {value: "Četba"},
                {value: "Procházky"},
                {value: "Diskotéky"}
            ],
            second: [
                {value: "Studium"},
                {value: "Seriály"},
                {value: "Cestování"},
                {value: "Řízení auta"},
                {value: "Koncerty"}
            ],
            third: [
                {value: "Zaměstnání"},
                {value: "Cyklistika"},
                {value: "Výlety s dětmi"},
                {value: "Pivo s přáteli"},
                {value: "Venčení psa"}
            ],
            fourth: [
                {value: "Zahradničení"},
                {value: "Venčení psa"},
                {value: "Pivo s přáteli"},
                {value: "Sledování TV"},
                {value: "Údržba domu"}
            ]
        }
    }
}