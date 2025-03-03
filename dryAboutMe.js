// I wanted to see if I could make things more succinct, but I know these aren't technically separate functions for each Q and A so it doesn't fulfill the requirements of the assignment.


const bioData = {
    name: {question: "What's my name?...", response: "It's Roz Townsend"},
    age: {question: "What's my age?...", response: "41. Did you know your age can be used against you in discriminatory hiring practices?"},
    locations: {question: "Where were you born? Where do you live now?...", response: "Tacoma Washington USA and Undenäs Sweden."},
    hobbies: {question: "What are your hobbies?...", response: "Drawing and gardening."}
}

const displayData = (awaitedData) => {
    console.log(awaitedData);
};

const questionAndAnswerGenerator = async (data, displayData) => {
    for (let key in data) {
        console.log(data[key].question);
        await new Promise(resolve => setTimeout(resolve, 1000));
            const myResponse = data[key].response;
            displayData(myResponse);
            await new Promise(resolve => setTimeout(resolve, 1500));
        };
    };

questionAndAnswerGenerator(bioData, displayData);

