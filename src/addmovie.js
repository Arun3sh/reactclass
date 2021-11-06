// import { ShowMovie } from './showmovie';
import { useState } from 'react';
// import { movieList } from './movieList.js';
import { ShowMovie } from './showmovie.js';

export function AddMovie() {
	var [name, setName] = useState('');
	var [poster, setPoster] = useState('');
	var [summary, setSummary] = useState('');
	var [rating, setRating] = useState('');
	const [add, setAdd] = useState(false);
	const [submit, setSubmit] = useState(false);
	const mystyle = { display: add ? 'block' : 'none' };
	return (
		<div>
			{submit ? '' : <button onClick={() => setAdd(!add)}>Add new Movie</button>}

			<form className="myForm" style={mystyle}>
				<label>Movie Title</label>
				<input
					type="text"
					value={name}
					onChange={(e) => setName(e.target.value)}
					placeholder="Movie Name"
				/>
				<br />
				<label>Poster link</label>
				<input
					type="link"
					value={poster}
					onChange={(e) => setPoster(e.target.value)}
					placeholder="Poster Link"
				/>
				<br />
				<label>Movie Summary</label>
				<input
					type="text"
					value={summary}
					onChange={(e) => setSummary(e.target.value)}
					placeholder="Movie Summary"
				/>
				<br />
				<label>Movie Rating</label>
				<input
					type="text"
					value={rating}
					onChange={(e) => setRating(e.target.value)}
					placeholder="Movie Rating"
				/>
				<br />
				<button type="button" onClick={() => setSubmit(true) & setAdd(!add)}>
					Submit
				</button>
			</form>

			{/* {submit
				? movieList.add(
						(name = { name }),
						(poster = { poster }),
						(summary = { summary }),
						(rating = { rating })
				  )
				: ''} */}

			{(name !== '') & submit ? (
				<ShowMovie name={name} poster={poster} summary={summary} rating={rating} />
			) : (
				''
			)}

			{(name !== '') & submit
				? console.log(`name=${name} poster=${poster} summary=${summary} rating=${rating}`)
				: ''}
		</div>
	);
}
