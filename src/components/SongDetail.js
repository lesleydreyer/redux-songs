import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {//could do (props) instaed of destructuring ({song})
    if (!song) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}<br />
                Duration: {song.duration}
            </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { song: state.selectedSong }//can change 'song' to whatever key you want worded as
};

export default connect(mapStateToProps)(SongDetail);