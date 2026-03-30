import React from 'react'

const MovieCard = ({title, vote_average, poster}) => {
    return (
        <div class="col-md-3 fade-in">
            <div class="movie-card">
                <img src={poster} class="w-100" movie-img />
                <div class="card-body d-flex justify-content-between align-items-center">
                    <div class="movie-title">{title}</div>
                    <div class="vote">{vote_average} ⭐</div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;
