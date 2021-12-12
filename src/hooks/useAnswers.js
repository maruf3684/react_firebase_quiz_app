import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useAnswers = (videoID) => {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [answers, setAnswers] = useState([]);


	useEffect(() => {
		async function fetchAnswers() {
			//database related work
			const db = getDatabase();
			const answerRef = ref(db, "answers/" + videoID + "/questions");
			const answerQuery = query(answerRef, orderByKey());

			try {
				setError(false);
				setLoading(true);
				//request firebase database
				const result = await get(answerQuery);
				setLoading(false);
				if (result.exists()) {
					setAnswers((prevAnswers) => {
						return [...prevAnswers, ...Object.values(result.val())];
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

		fetchAnswers();
	}, [videoID]);

	return {
		loading,
		error,
		answers,
	};
};

export default useAnswers;
