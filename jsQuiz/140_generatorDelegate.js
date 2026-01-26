const teams = [
	{ name: "Team 1", members: ["Paul", "Lisa"] },
	{ name: "Team 2", members: ["Laura", "Tim"] }
];

function* getMembers(members) {
	for (let i = 0; i < members.length; i++) {
		yield members[i];
	}
}

function* getTeams(teams) {
	for (let i = 0; i < teams.length; i++) {
		// ✨ SOMETHING IS MISSING HERE ✨
    yield* getMembers(teams[i].members)
	}
}

const obj = getTeams(teams);
console.log(obj.next()); // { value: "Paul", done: false }
console.log(obj.next()); // { value: "Lisa", done: false }