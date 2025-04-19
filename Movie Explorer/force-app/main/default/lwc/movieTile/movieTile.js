import { LightningElement, api } from 'lwc';

export default class MovieTile extends LightningElement {
    @api movie;
    @api selectedMovieId;

    clickHandler(event){
        console.log(this.movie.imdbID);

        //Custom Event
        // 1. create Event 
        const evt = new CustomEvent('selectedmovie', {
            detail: this.movie.imdbID
        });

        // 2. dispatch event
        this.dispatchEvent(evt);
    }

    // applying dynamic css on click of tile
    get tileSelected(){
        return this.selectedMovieId === this.movie.imdbID ? 'tile selected' : 'tile';
    }
}