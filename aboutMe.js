//The actual chained callback functions like the assingment asks for, lol


const displayFactoid = (factoid, callback) => {
    setTimeout(() => {
        console.log(factoid);
        callback();
    }, 1500)
};

const getName = (callback) => {
    displayFactoid("I'm Roz.", callback);
};

const getAge = (callback) => {
    displayFactoid("I'm 41.", callback);
};

const getLocations = (callback) => {
    displayFactoid("I was born the US and now live in Sweden", callback);
};

const getHobbies = (callback) => {
    displayFactoid("I like gardening and permaculture.", callback);
};

getName(() => {
    getAge(() => {
        getLocations(() => {
            getHobbies(() => {})
        });
    });
});

