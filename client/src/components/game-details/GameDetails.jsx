import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import * as gameService from '../../services/gameService'

export default function GameDetails() {

    const [game, setGame] = useState({});
    const {gameId} = useParams();

    useEffect(() => {
        gameService.getOne(gameId)
            .then(setGame)
    }, [gameId]);

    return (
      <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                {game.summary}
                </p>


                {/* <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>

                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>

                    <p className="no-comment">No comments.</p>
                </div> */}


                {/* <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
          */}

</div>

            {/* <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment"/>
                </form>
            </article> */}

        </section>


    )
}