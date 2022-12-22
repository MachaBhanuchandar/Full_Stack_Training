const initialState = {
    courses: [
        {
            id: "",
            name: "",
            instructorName: "",
            startDate: "",
            endDate: "",
            schedulTime: ""

        }
    ]
}
const CourseReducer = (state = initialState, action) => {
    if (action.type === 'ADD_COURSE')
        return {
            ...state,
            courses: [
                ...state.courses,
                action.payload
            ]
        }
    else {
        return state
    }
}
export default CourseReducer;