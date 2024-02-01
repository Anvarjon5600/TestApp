export type UsersType = {
	email: string,
	id: string,
	name: string,
	password: string,
	score: number
}

export type TestType = {
	id: number,
	question: string,
	answer: string,
	variat: string,
	variat1: string
}


export type State = {
	user: {
		users: UsersType[]
	},
}