import { useState } from "react";
import { useGetTestsQuery } from "../../store/services/Tests";
import "./Quiz.css";
import { TestType, UsersType } from "../../store/services/type";
import { useGetUsersQuery, useUpdateUserMutation } from "../../store/services/usersApi";

const Quiz = () => {
	const { data: questions, isLoading } = useGetTestsQuery("");
	const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
	const [result, setResult] = useState<number[]>([])
	const [results, setResults] = useState<boolean>(false)
	const { data: usersData } = useGetUsersQuery('');
	const [updateUser, { isLoading: update }] = useUpdateUserMutation()


	const handleNextQuestionNext = () => {
		if (questions) {
			setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
			if (currentQuestionIndex >= questions.length - 1) {
				setCurrentQuestionIndex(questions.length - 1);
			}
		}
	};
	const handleNextQuestionPrev = () => {
		setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
		if (currentQuestionIndex <= 0) {
			setCurrentQuestionIndex(0);
		}
	};

	const checkAnswer = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.getAttribute('id') === `${id}-answer`) {
			const check = result.some((item: number) => item === id)
			if (!check) {
				setResult([
					...result,
					id
				])
			}
		} else {
			const filter = result.filter((item: number) => item !== id)
			setResult([
				...filter
			])
		}
	}

	const endOfQuiz = () => {
		setResults(true)
		const userId = localStorage.getItem("userId")
		const user = usersData?.find((item: UsersType) => userId === item.id);
		updateUser({ ...user, score: result.length })
	}

	return (
		<div className="quiz">
			{isLoading && "Loading..."}
			{questions && !results &&
				questions.map((quiz: TestType, index: number) => (
					<div
						className="quiz-block"
						key={index}
						style={{
							display: index === currentQuestionIndex ? "flex" : "none",
						}}
					>
						<h3>№{index + 1} {quiz.question}</h3>
						<div className="quiz-container">
							<div className="quiz-container__item">
								<input id={`${quiz.id}-answer`} onChange={(event) => checkAnswer(quiz.id, event)} type="radio" name={`${quiz.id}-check`} />
								<label htmlFor={`${quiz.id}-answer`}>{quiz.answer}</label>
							</div>
							<div className="quiz-container__item">
								<input id={`${quiz.id}-variant`} onChange={(event) => checkAnswer(quiz.id, event)} type="radio" name={`${quiz.id}-check`} />
								<label htmlFor={`${quiz.id}-variant`}>{quiz.variat}</label>
							</div>
							<div className="quiz-container__item">
								<input id={`${quiz.id}-variant1`} onChange={(event) => checkAnswer(quiz.id, event)} type="radio" name={`${quiz.id}-check`} />
								<label htmlFor={`${quiz.id}-variant1`}>{quiz.variat1}</label>
							</div>
						</div>
						<div className="buttons">
							<button className="btn" onClick={handleNextQuestionPrev}>
								Prev
							</button>
							<button className="btn" onClick={endOfQuiz}>
								End Quiz {update && 'loading...'}
							</button>
							<button className="btn" onClick={handleNextQuestionNext}>
								Next
							</button>
						</div>
					</div>
				))}
			{results && (
				<div className="results">
					<h2>Ваш результат:{result.length}</h2>
					<button className="btn" onClick={() => window.location.reload()}>
						Restart
					</button>
				</div>
			)}
		</div>
	);
};

export default Quiz;
