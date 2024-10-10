import { createSlice } from '@reduxjs/toolkit'
import { teamPlayersExtraReducer } from './teamPlayers.extraReducer'
import { revertTeamPlayersReducer } from './reducers/revertTeamPlayersReducer'
import { setCaptainReducer } from './reducers/setCaptainReducer'
import { addTeamPlayerReducer } from './reducers/addTeamPlayerReducer'
import { updateTeamPlayerReducer } from './reducers/updateTeamPlayerReducer'
import { deleteTeamPlayerReducer } from './reducers/deleteTeamPlayerReducer'
import { swapTeamPlayerReducer } from './reducers/swapTeamPlayerReducer'
import { autoAssembleTeamReducer } from './reducers/autoAssembleTeamReducer'

const initialState = {
  GOA: [],
  DEF: [],
  MID: [],
  STR: [],
  playersCount: {
    GOA: 0,
    DEF: 0,
    MID: 0,
    STR: 0,
  },
  teamPrice: 0,
  duplicatesMap: {},
  prevTeam: [],
  error: null,
  isLoading: false,
}

const teamPlayersSlice = createSlice({
  name: 'teamPlayers',
  initialState,
  reducers: {
    addTeamPlayer: addTeamPlayerReducer,
    deleteTeamPlayer: deleteTeamPlayerReducer,
    setCaptain: setCaptainReducer,
    revertTeamPlayers: revertTeamPlayersReducer,
    updateTeamPlayer: updateTeamPlayerReducer,
    swapTeamPlayer: swapTeamPlayerReducer,
    autoAssembleTeam: autoAssembleTeamReducer,
    emptyTeamPlayers: () => initialState,
  },
  extraReducers: teamPlayersExtraReducer,
})

export const {
  addTeamPlayer,
  deleteTeamPlayer,
  setCaptain,
  emptyTeamPlayers,
  revertTeamPlayers,
  updateTeamPlayer,
  swapTeamPlayer,
  autoAssembleTeam,
} = teamPlayersSlice.actions

export default teamPlayersSlice.reducer