//
function getName (obj) {
    return obj.name
}
function getNames (obj) {
    const arr = []
    arr.push(obj.firstname)
    arr.push(obj.lastname)
    return arr
}
function concatNames (obj, lastname) {
    return obj.firstname + ' ' + lastname
}

function correctName (obj) {
    if (obj.fathername === undefined) {
        return obj.firstname
    } else {
        return `${obj.firstname} ${obj.lastname} ${obj.fathername}`
    }
}