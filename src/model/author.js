export default class Author {
    constructor(name, yob, yod, summaries) {
        this.name = name;
        this.yob = yob;
        this.yod = yod;
		this.summaries = summaries;
    }

    getAge() {
		if (this.yob === null) {
			return 'n/a';
		}
		const currentYear = new Date().getFullYear();
		let yearOfDeath;
		if (this.yod === null) {
			yearOfDeath = currentYear;
		} else {
			yearOfDeath = this.yod;
		}
		const age = yearOfDeath - this.yob;
		return age;
    }
}

// const author1 = new Author('pippo', 1950, 2000)
// console.log(author1)
// console.log(author1.getAge())//50

// const author2 = new Author('pluto', 1951, null)
// console.log(author2)
// console.log(author2.getAge())//74

// const author3 = new Author('paperino', null, null)
// console.log(author3)
// console.log(author3.getAge())//n/a