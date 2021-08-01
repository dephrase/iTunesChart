import { useEffect, useState } from "react";
import ChartSelect from "../components/ChartSelect";
import Header from "../components/Header";
import SongList from "../components/SongList";

const ItunesContainer = () => {

    const [topTwenty, setTopTwenty] = useState(null);
    const [genre, setGenre] = useState("all");

    const renderGenreTop20 = () => {
        let insertGenre;
        if(genre === "all"){
            insertGenre = "";
        } else if(genre === "rock"){
            insertGenre = "genre=21/";
        } else if (genre === "dance"){
            insertGenre = "genre=17/";
        } else if (genre === "country"){
            insertGenre = "genre=6/";
        }
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/${insertGenre}json`)
        .then(res => res.json())
        .then(data => setTopTwenty(data))
        .catch((err) => {
            console.log(err);
        })
    }

    const renderSongList = () => {
        if(topTwenty != null){
            return <SongList topTwenty={topTwenty}/>
        } 
    }

    useEffect(() => {
        renderGenreTop20()
    }, [genre])

    return (
        <>
            <Header/>
            <div className="pageBody">
            <div className="songList">{renderSongList()}</div>
            <div className="genreSelect"><ChartSelect setGenre={setGenre}/></div>
            </div>
        </>
    )
}

export default ItunesContainer;