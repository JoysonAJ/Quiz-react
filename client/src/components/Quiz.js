import React from 'react';
import Questions from "./Questions";

function Quiz(props) {
    // Previous Button Event Handler
    const onPrevious = () =>{
        console.log("Previous")
    }
    // next button event handler
    const onNext = () =>{
        console.log("Next")
    }
    return (
        <>
            <div className={"container"}>
                <h1 className={"title text-light"}>
                    Quiz Application
                </h1>

                <Questions />

                <div className={"grid"}>
                    <button className={"btn prev"}
                    onClick={onPrevious}
                    >
                        Previous
                    </button>

                    <button className={"btn next "}
                    onClick={onNext}
                    >
                        Next
                    </button>
                </div>

            </div>
        </>
    );
}

export default Quiz;