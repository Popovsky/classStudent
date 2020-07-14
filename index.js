'use strict';

class User {
    /**
     *
     * @param {string} name
     * @param {string} surname
     */
    constructor(name, surname) {
        if (typeof name !== 'string'|| typeof surname !== 'string') {
            throw new TypeError();
        }
        if (name.length > 30 || surname.length > 30) {
            throw new RangeError();
        }
        this._name = name;
        this._surname = surname;
    }

    /**
     *
     * @returns {string}
     */
    getFullName() {
        return `${this._name} ${this._surname}`;
    }
}

class Student extends User {
    /**
     *
     * @param {string} name
     * @param {string} surname
     * @param {number} year
     */
    constructor(name, surname, year) {
        super(name, surname);
        if (typeof year !== 'number' || !Number.isInteger(year)) {
            throw new TypeError();
        }
        this._year = year;
    }

    /**
     *
     * @returns {string}
     */
    getCourse() {
        const currentYear = new Date().getFullYear();
        if (currentYear - this._year > 5) {
            throw new RangeError();
        }
        return `Student ${this.getFullName()} is studying in the ${currentYear - this._year} course`;
    }
}

const stud = new Student('Vasy', 'Pupkin', 2015);
console.log(stud.getFullName());
console.log(stud.getCourse());
