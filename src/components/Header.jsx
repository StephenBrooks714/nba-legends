import Logo from "../assets/nba-logo.png";

export default function Header() {
    // create a function that searches for players


    return (
        <>
            <div className="header">
                <img src={Logo} className={"logo"} alt="NBA Logo" />
                <h1 className={"title mb-2"}>NBA Legends</h1>
                <input type="search" className={"form-control"} aria-description={"search"} placeholder={"search"} id={"searchType"}/>
            </div>
        </>
    )
}