import { useEffect, useState } from "react";
import ChartSelect from "../components/ChartSelect";
import Header from "../components/Header";
import SongList from "../components/SongList";


const ItunesContainer = () => {

    const [topTwenty, setTopTwenty] = useState(null);

    const getTopTwenty = () => {
        fetch(`https://itunes.apple.com/gb/rss/topsongs/limit=20/json`)
        .then(res => res.json())
        .then(data => setTopTwenty(data))
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
        getTopTwenty()
    }, [])

    const renderSongList = () => {
        if(topTwenty != null){
            return <SongList topTwenty={topTwenty}/>
        }
    }


    return (
        <>
            <Header/>
            <div className="pageBody">
            <div className="songList">{renderSongList()}</div>
            <div className="genreSelect"><ChartSelect/></div>
            </div>
        </>
        
    )


}

export default ItunesContainer;