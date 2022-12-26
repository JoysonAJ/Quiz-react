import React from 'react';

function Questions(props) {

    const onSelect = () =>{
        console.log("Hello")
    }
    return (
        <>
            <div className={"questions"}>
                <h2 className={"text-light"}>
                    Simple Question 1....
                </h2>

                <ul>
                    <li>
                        <input
                        type={"radio"}
                        value={false}
                        name={"Options"}
                        id={"q1-options"}
                        onChange={onSelect()}
                        />

                        <label className={"text-primary"} htmlFor={"q1-option"}>
                            Option
                        </label>
                        <div className={"check checked"}>

                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Questions;