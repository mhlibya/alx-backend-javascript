function getId(obj) {
    return obj["id"];
}

export default function getListStudentIds(array) {
    if(typeof(array) === 'object') {
        return array.map(getId);
    }
    else {
        return [];
    }
}
