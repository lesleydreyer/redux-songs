//Action creator
export const selectSong = song => { //this is a named export
    //Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};