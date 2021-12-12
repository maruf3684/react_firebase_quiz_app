import { get, getDatabase, orderByKey, query, ref ,startAt,limitToFirst} from "firebase/database";
import { useEffect, useState } from "react";

const useQuestions = (videoID) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [questions, setQuestions] = useState([]);


	useEffect(() => {
		async function fetchQuestions() {
			//database related work
			const db = getDatabase();
			const quizRef = ref(db, "quiz/" + videoID + "/questions");
			const quizQuery = query(quizRef, orderByKey());

			try {
				setError(false);
				setLoading(true);
				//request firebase database
				const result = await get(quizQuery);
				setLoading(false);
				if (result.exists()) {
					setQuestions((prevQuestions) => {
						return [...prevQuestions, ...Object.values(result.val())];
					});
				} else {
                    //
				}
			} catch (err) {
				console.log(err);
				setLoading(false);
				setError(true);
			}
		}

		fetchQuestions();
	}, [videoID]);

	return {
		loading,
		error,
		questions,
	};
};

export default useQuestions;
