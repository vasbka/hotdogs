module.exports = (sequalize, Sequalize) => {
    return sequalize.define('hotdogs', {
        price: {
            type: Sequalize.DOUBLE,
        },
        name: {
            type: Sequalize.STRING,
        },
        description: {
            type: Sequalize.STRING,
        },
        imageLink: {
            type: Sequalize.STRING,
        },
    }, {
        timestamps: false,
    });
}