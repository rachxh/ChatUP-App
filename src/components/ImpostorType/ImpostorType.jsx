import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { IoSendSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import "./ImpostorType.css";

const ImpostorType = () => {
    const { label } = useParams();
    const matchingAnswerArray = {
        impostor_superperson: [
            "Balance is not something you find, it’s something you create.",
            "Your energy is your currency. Spend it well.",
            "Nothing is worth your health. Nothing is worth poisoning yourself with stress, anxiety, and fear. ",
        ],
        impostor_expert: [
            "Relax no one can do everything.",
            "Even Achilles has his weakness, no one is good at everything.",
            "If you are ever sad and think that life is hard, remember that you are not alone.",
        ],
        impostor_perfectionist: [
            "Don’t let perfect be the enemy of good.",
            "Don’t aim for perfection. Aim for better than yesterday.",
            "Perfect is good but done is better.",
        ],
        impostor_soloist: [
            "Having someone help you doesn’t mean you've failed. It just means you’re not alone.",
            "Ask for help not because you’re weak, but because you want to remain strong. ",
            "Sometimes asking for help also means you are helping yourself.",
        ],
        impostor_naturalgenius: [
            "You can do anything but not everything.",
            "Believe you can and you’re halfway there.",
            "No one is you and that’s your strength.",
        ],
    };
    const [responseText, setResponseText] = useState(null);
    const [message, setMessage] = useState("");

    const updateMessage = (event) => {
        setMessage(event.target.value);
    };

    const sendRequest = () => {
        console.log("sendRequest()");
        fetch("https://api.wit.ai/message?v=20221121&q=" + message, {
            headers: {
                Authorization: "Bearer EXRIOVBXYQY3HGSTEUV64YFZGA2MOU3R",
            },
        })
            .then((response) => response.json())
            .then((response) => {
                const anotherAnswer =
                    matchingAnswerArray[label][
                    Math.floor(Math.random() * matchingAnswerArray[label].length)
                    ];

                if (response.intents.length < 1) {
                    setResponseText(
                        `Rudolf cannot measure your answer so far. Here is a quote for you: 
                        "${anotherAnswer}"`
                    );
                    return;
                }

                const confidence = response.intents[0].confidence;
                const name = response.intents[0].name;
                if (name !== label) {
                    setResponseText(
                        `Maybe give more compasssion. It would be better to say something like: 
                        "${anotherAnswer}"`
                    );
                    return;
                }
                if (confidence > 0.9) {
                    setResponseText(
                        `Perfect answer! Pass the compassion on! Here is the quote for you to keep the momentum going: " 
                        "${anotherAnswer}"`
                    );
                } else if (confidence > 0.75) {
                    setResponseText(
                        `Great answer and you could also say  the following: 
                        "${anotherAnswer}"`
                    );
                } else if (confidence > 0.5) {
                    setResponseText(
                        "Good answer and you could also say the following: " + anotherAnswer
                    );
                } else {
                    setResponseText(
                        `Try to be more compssionate, it would be better to say following: 
                        "${anotherAnswer}"`
                    );
                }
            })
            .catch((error) => console.error(error));
    };

    const getTitle = () => {
        switch (label) {
            case "impostor_perfectionist":
                return "The Perfectionist Narrative";
            case "impostor_expert":
                return "The Expert Narrative";
            case "impostor_naturalgenius":
                return "The Natural Genius Narrative";
            case "impostor_soloist":
                return "The Soloist Narrative";
            case "impostor_superperson":
                return "The Superperson Narrative";
            default:
                return "Choose an imposter narrative!";
        }
    };

    const getMood = () => {
        switch (label) {
            case "impostor_perfectionist":
                return "I could have done better 😔";
            case "impostor_expert":
                return "I haven't known everthing about this topic 😔";
            case "impostor_naturalgenius":
                return "I am not natural talented 😔";
            case "impostor_soloist":
                return "I don't feel like asking for help 😔";
            case "impostor_superperson":
                return "I could not working hard enough 😔";
            default:
                return "Hi, my name is Panda. I feel like an imposter sometimes. Can you help me?";
        }
    };

    return (
        <>
            <div className="types-container">
                <h1>Types of imposter syndrome</h1>
                <div className="type-btn-wrapper">
                    <button
                        className={`type-btn ${label === "impostor_perfectionist" ? "active" : ""
                            }`}
                    >
                        <Link reloadDocument to="/impostortype/impostor_perfectionist">
                            The Perfectionist{" "}
                        </Link>
                    </button>

                    <button
                        className={`type-btn ${label === "impostor_expert" ? "active" : ""
                            }`}
                    >
                        <Link reloadDocument to="/impostortype/impostor_expert">
                            The Expert{" "}
                        </Link>
                    </button>
                    <button
                        className={`type-btn ${label === "impostor_naturalgenius" ? "active" : ""
                            }`}
                    >
                        <Link reloadDocument to="/impostortype/impostor_naturalgenius">
                            The Natural Genius{" "}
                        </Link>
                    </button>
                    <button
                        className={`type-btn ${label === "impostor_soloist" ? "active" : ""
                            }`}
                    >
                        <Link reloadDocument to="/impostortype/impostor_soloist">
                            The Soloist{" "}
                        </Link>
                    </button>
                    <button
                        className={`type-btn ${label === "impostor_superperson" ? "active" : ""
                            }`}
                    >
                        <Link reloadDocument to="/impostortype/impostor_superperson">
                            The Superperson{" "}
                        </Link>
                    </button>
                </div>
                <h3>{getTitle()} 💬</h3>
                <div className="chatBubbleLeft">
                    <img
                        src="https://cdn-icons-png.flaticon.com/128/1326/1326377.png"
                        alt="avatar"
                    ></img>
                    <p>{getMood()}</p>
                </div>
                {responseText !== null && (
                    <div className="chatBubbleRight">
                        <p>{responseText}</p>
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/1374/1374559.png"
                            alt="avatar"
                        ></img>
                    </div>
                )}
                <div className="send-wrapper">
                    <p>
                        What would you say to Panda in a compassionate way
                        ?{" "}
                    </p>
                    <div className="input-wrapper">
                        <input type="text" onChange={updateMessage} value={message} />
                        <button className="send-btn" onClick={sendRequest} type="submit">
                            <IoSendSharp />
                        </button>
                    </div>
                </div>
                <div>
                    <Link className="previous-link" to="/intro">
                        <IoIosArrowBack />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ImpostorType;
