import React, { Component } from "react";
import "./SuperTunes.css";
import songs from "./SongsDB";
import SongCard from "./SongCard";



class SuperTunes extends Component {
    state = {
        songs: songs
    }

    sortByTitle = () => {
        this.setState({
            songs: [...this.state.songs.sort((a, b) => a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1)]
        })
    }

    sortByRating = () => {
        this.setState({
            songs: [...this.state.songs.sort((a, b) => b.rating - a.rating)]
        })
    }

    render() {
        return (
            <>
                <section className="ui super_tunes">
                    <div id="superTunes">
                        {/* <h2 id="stTitle">Super Tunes</h2> */}
                        <div className="st_btns">
                            <button className="st_button" onClick={this.sortByTitle}>Sort By Title</button>
                            <button className="st_button" onClick={this.sortByRating}>Sort By Ratings</button>
                        </div>
                        <div id="songList">
                            {
                                this.state.songs.map(song => (
                                    <SongCard data={song} />
                                ))
                            }
                        </div>
                    </div>
                </section>
            </>
        )
    }
}



export default SuperTunes;
