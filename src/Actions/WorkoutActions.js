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
        .then((r) => r.json)
        .then((e) => {
            dispatch({type: "EDIT_EXERCISE", payload: wid, e: e})
        })
    }
}


//   const deleteEntireExercise = (exerciseId) => {
//     const API_URL = `http://[::1]:3000/api/v1/workouts/${params.id}/exercises/${exerciseId}`
//     fetch(API_URL, {method: "DELETE"
//     })
//   };

//   useEffect(() => {
//     fetch(API_URL)
//     .then(r => r.json())
//     .then(data => setWorkout(data))
//   }, [])


//   const API_URL = `http://[::1]:3000/api/v1/workouts`;
//     fetch(API_URL, {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json;charset=UTF-8",
//       },
//       body: JSON.stringify(newWorkout),
//     })
//       .then((r) => r.json())
//       .then((json) => console.log(json));


//       const singleExercise = (newExercise) => {
//         const API_URL = `http://[::1]:3000/api/v1/workouts/${params.id}/exercises`;
//         fetch(API_URL, {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json;charset=UTF-8",
//           },
//           body: JSON.stringify(newExercise),
//         })
//           .then((r) => r.json())
//           .then((json) => console.log(json));
//       };
    