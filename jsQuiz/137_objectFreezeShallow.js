const person = {
	name: "Lydia Hallie",
	address: {
		street: "100 Main St"
	}
};

Object.freeze(person);

person.address.street = "101 Main St"
console.log(person);