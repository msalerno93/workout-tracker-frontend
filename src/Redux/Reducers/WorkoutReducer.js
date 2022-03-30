const WorkoutReducer = (state = [], action) => {
    let index
    let exercise
    let workout
    switch (action.type) {
        case "ALL_WORKOUTS":
            return [ ...action.payload]
        case "DELETE_WORKOUT":
            return [
                ...state.filter(workout => workout.id !== action )
            ]
        case "EDIT_EXERCISE":
            index = state.findIndex(w => w.id === action.id) //finds workout yano? //
            workout = state[index]
            exercise = workout.exercises.findIndex(e => e.id === action.e.id)
            workout.exercises = [...workout.exercises.slice(0, exercise), {...action.e}, ...workout.exercise.slice(exercise + 1)]
            return [...state.slice(0, index), {...workout}, ...state.slice(index + 1)]

        case "ADD_EXERCISE":
            return []

        case "DELETE_EXERCISE":
            return []
    
        default:
            break;
    }
}

export default WorkoutReducer