
const ChartSelect = ({setGenre}) => {

    const updateGenre = (event) => {
        setGenre(event.target.value);
    }

    return (
        <>
        <div className="chartSelect">
            <h4 className="left">Select Genre to view chart</h4>
            <form className="genreForm left" onChange={updateGenre}>
                <input type="radio" id="all" value="all" name="genre" />
                <label className="left">All</label><br/>
                <input type="radio" id="rock" value="rock" name="genre"/>
                <label className="left">Rock</label><br/>
                <input type="radio" id="dance" value="dance" name="genre"/>
                <label className="left">Dance</label><br/>
                <input type="radio" id="country" value="country" name="genre"/>
                <label className="left">Country</label><br/>
            </form>
        </div>
        </>
    )
}

export default ChartSelect;