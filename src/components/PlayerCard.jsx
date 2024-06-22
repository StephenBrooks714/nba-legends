import {data} from "../helper/data.cjs";
import {useEffect} from "react";

export default function PlayerCard() {
    // create a function that searches for players


    useEffect(() => {
        const cards = document.querySelectorAll(".show");
        cards.forEach((card) => {
            card.addEventListener("mouseenter", () => {
                card.classList.add("showContent");
            });
            card.addEventListener("mouseleave", () => {
                card.classList.remove("showContent");
            });
        });
    }, []);

    return (
        <div className="card-container">
            {data.map((player) => (
                <div className="card show" key={player.id}>
                    <a href="#!">
                        <img src={player.img} className={"card-image"} alt={player.name}/>
                    </a>
                    <div className={"card-info"}>
                        <h3>{player.name}</h3>
                        <p>{player.position}</p>
                    </div>
                    <ul className={"showContent"}>
                        {player.statistics.map((statistic) => (
                            <li key={player.statistics}>{statistic}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    )
}