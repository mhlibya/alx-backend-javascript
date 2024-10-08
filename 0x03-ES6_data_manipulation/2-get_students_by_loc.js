

export default function getStudentsByLocation(array, location) {
    return array.filter(byLocation);
    
    function byLocation(obj,) {
        return obj["location"] === location;
    }
}