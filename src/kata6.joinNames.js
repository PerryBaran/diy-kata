const joinNames = namesObj => {
    let names = '';
    const { length } = namesObj;
    const lastIndex = length - 1;
    for (let i = 0; i < length; i++) {
        if (i === lastIndex && length > 1) {
            names += ' & ';
        } else if (i !== 0) {
            names += ', ';
        }
        names += namesObj[i].name;
    }
    return names;
};

module.exports = joinNames;
