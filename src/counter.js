import { useState } from 'react';
export function Counter() {
	const [like, setLike] = useState(0);
	const [dislike, setDisLike] = useState(0);
	return (
		<div className="counter-container">
			<button className="like-dislike" onClick={() => setLike(like + 1)}>
				👍{like}
			</button>
			<button className="like-dislike" onClick={() => setDisLike(dislike + 1)}>
				👎{dislike}
			</button>
		</div>
	);
}
