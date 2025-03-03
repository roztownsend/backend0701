//Wanted some practice with promises. Ignore.

const displayAnswer = (answer) => {
    console.log(answer);
}

const questionAndAnswerGenerator = async (displayAnswer) => {
    const timer = (question, answer) => {
        return new Promise(resolve => {
            const questionData = question;
            console.log(question);
            setTimeout(() => {
                const answerData = answer;
                displayAnswer(answerData);
                setTimeout(resolve, 1500);
            }, 1000);
        });
    };


    const myName = async () => {
        await timer("Name:", "Roz Townsend");
    };
    
    const myAge = async () => {
        await timer("Age:", "41");
    };

    const myLocations = async () => {
        await timer("Birth Location and Current Location:", "Tacoma Washington USA and Undenäs Sweden");
    };

    const myHobbies = async () => {
        await timer("Hobbies:", "Drawing and permaculture")
    };

   await myName();
   await myAge();
   await myLocations();
   await myHobbies();
};

questionAndAnswerGenerator(displayAnswer);