import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
	const movieList = [
		{
			name: 'Iron Man',
			poster: 'https://www.themoviedb.org/t/p/w1280//78lPtwv72eTNqFW9COBYI0dWDJa.jpg',
			summary:
				'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
			rating: '7.6/10',
		},
		{
			name: 'Doctor Strange',
			poster: 'https://www.themoviedb.org/t/p/w1280//xf8PbyQcR5ucXErmZNzdKR0s8ya.jpg',
			summary:
				'After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.',
			rating: '7.4/10',
		},
		{
			name: 'Black Panther',
			poster: 'https://www.themoviedb.org/t/p/w1280//uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
			summary:
				"King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantle to join with ex-girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
			rating: '7.4/10',
		},
		{
			name: 'Captain America: The Winter Soldier',
			poster: 'https://www.themoviedb.org/t/p/w1280//tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg',
			summary:
				'After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy—the Winter Soldier.',
			rating: '7.7/10',
		},
		{
			name: 'Shutter Island',
			poster: 'https://www.themoviedb.org/t/p/w1280//52d7CAjnwh1cZXd2lhKaHVFMu0Q.jpg',
			summary:
				'World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by his troubling visions and also by a mysterious doctor.',
			rating: '8.2/10',
		},
	];
	return (
		<div className="conatiner">
			<h1 className="App">My Favourites!!</h1>
			{movieList.map(({ name, poster, summary, rating }) => (
				<ShowMovie name={name} poster={poster} summary={summary} rating={rating} />
			))}
		</div>
		// <Counter />
	);
}

function Counter() {
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
function ShowMovie({ name, poster, summary, rating }) {
	return (
		<div className="movie">
			<div className="imageContainer">
				<img className="poster" src={poster} alt="Iron Man" />
			</div>
			<div className="otherContainer">
				<div className="heading">
					<h2>{name}</h2>
					<h2 className="rating">⭐{rating}</h2>
				</div>
				<p>{summary}</p>
				<Counter />
			</div>
		</div>
	);
}

export default App;
