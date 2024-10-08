import getListStudentIds from "./1-get_list_student_ids.js";

export default function getStudentIdsSum(array) {
    let ids = getListStudentIds(array)
    let sum = 0;
    for(let i = 0; i < ids.length; i++) {
        sum += array[i];
    }
    return sum;
}
