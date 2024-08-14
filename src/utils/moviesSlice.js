import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        NowPlayingMovies : null,
        OfficialTrailer : null,
        PopularMovies : null,
        TopRatedMovies : null,
        UpcomingMovies : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) =>{
            state.NowPlayingMovies = action.payload;
        },

        addOfficialTrailer : (state, action) =>{
            state.OfficialTrailer = action.payload;
        },

        addPopularMovies : (state, action) =>{
            state.PopularMovies = action.payload;
        },

        addTopRatedMovies : (state, action) =>{
            state.TopRatedMovies = action.payload;
        },

        addUpcomingMovies : (state, action) =>{
            state.UpcomingMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addOfficialTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
