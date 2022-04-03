const WorkoutReducer = (state = [], action) => {
    let index
    let exercise
    let workout
    let deleted
    switch (action.type) {
        case "ALL_WORKOUTS":
            return [ ...action.payload]
        case "DELETE_WORKOUT":
            return [
                ...state.filter(workout => workout.id != action )
            ]
        case "ADD_WORKOUT":
            return [...state, action.workout]

        case "EDIT_EXERCISE":
            index = state.findIndex(w => w.id == action.payload) //finds workout yano? //
            workout = state[index]
            exercise = workout.exercises.findIndex(e => e.id == action.e.id)
            workout.exercises = [...workout.exercises.slice(0, exercise), {...action.e}, ...workout.exercises.slice(exercise + 1)]
            return [...state.slice(0, index), {...workout}, ...state.slice(index + 1)]

        case "ADD_EXERCISE":
            index = state.findIndex(w => w.id == action.payload) 
            workout = state[index]
            workout.exercises.push(action.payload)
            return [...state.slice(0, index), {...workout}, ...state.slice(index + 1)]

        case "DELETE_EXERCISE":
            index = state.findIndex(w => w.id == action.wid) 
            workout = state[index]
            deleted = workout.exercises.filter(ex => ex.id !== action.eid)
            workout.exercises = deleted
            return [...state.slice(0, index), {...workout}, ...state.slice(index + 1)]
    
        default:
            return state;
    }
}

export default WorkoutReducer