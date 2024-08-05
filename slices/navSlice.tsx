
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// export interface NavigateState {
//   origin: {} | null
//   destination: {} | null
//   travelTimeInfo: string | null
// }

const initialState = {
  origin : null,
  destination : null,
  travelTimeInfo : null,
  isRideOptions : false,
  isInitialValue : ""

}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
   setOrigin: (state, action) => {
    state.origin = action.payload
   },
   setDestination: (state, action) => {
    state.destination = action.payload
   },
   setTravelTimeInfo: (state, action) => {
    state.travelTimeInfo = action.payload
   },
   setIsRideOptions: (state, action) => {
    state.isRideOptions = action.payload
   },
   setInitialValue: (state, action) => {
    state.isInitialValue = action.payload
   }
}})

// Action creators are generated for each case reducer function
export const { setOrigin, setDestination, setTravelTimeInfo, setIsRideOptions, setInitialValue } = navSlice.actions

//selectors
export const selectOrigin = (state: { nav: { origin: any } }) => state.nav.origin
export const selectDestination = (state: { nav: { destination: any } }) => state.nav.destination
export const selectTravelTimeInfo = (state: { nav: { travelTimeInfo: any } }) => state.nav.travelTimeInfo
export const selectIsRideOptions = (state: { nav: { isRideOptions: any } }) => state.nav.isRideOptions
export const selectInitialValue = (state: { nav: { isInitialValue: any } }) => state.nav.isInitialValue

export default navSlice.reducer