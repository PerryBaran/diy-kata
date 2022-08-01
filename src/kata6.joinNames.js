const joinNames = namesObj => {
    let names = namesObj[0].name;
    const { length } = namesObj;
    for (let i = 1; i < length; i++) {
        if (i === length - 1) {
            names += ` & ${namesObj[i].name}`
        } else {
            names += `, ${namesObj[i].name}`
        }
    }
    return names
};

module.exports = joinNames;
