const Base_API = 'http://[::1]:3000/api/v1/workouts'

export function getWorkouts() {
    return (dispatch) => {
        fetch(Base_API)
        .then((r) => r.json())
        .then(workouts => {
            dispatch ({type: "ALL_WORKOUTS", payload: workouts})
        })
    }
}
 
export function deleteWorkout(id) {
    return (dispatch) => {
        fetch(`${Base_API}/${id}`, {method: "DELETE"})
        .then(() => {
            dispatch ({type: "DELETE_WORKOUT", payload: id})

        })
    }
}

export function editEntireExercise(formData, wid, eid) {
    return (dispatch) => {
        fetch(`${Base_API}/${wid}/exercises/${eid}`, {
        method: "PATCH",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(formData),
        })
        .then((r) => r.json())
        .then((e) => {
            dispatch({type: "EDIT_EXERCISE", payload: wid, e: e})
        })
    }
}

export function deleteEntireExercise(wid,eid) {
    return (dispatch) => {
        fetch(`${Base_API}/${wid}/exercises/${eid}`, {method: "DELETE"})
        .then(() => {
            dispatch ({type: "DELETE_EXERCISE", wid, eid})

        })
    }
}

export function addExercise(form, wid) {
    return (dispatch) => {
        fetch(`${Base_API}/${wid}/exercises`, {
            method: "POST",
            headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify(form),
        })
        .then((r) => r.json())
        .then((e) => {
            dispatch({type: "EDIT_EXERCISE", payload: wid, e})
        })
    }
}
