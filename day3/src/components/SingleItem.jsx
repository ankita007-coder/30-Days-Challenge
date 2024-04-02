import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const SingleItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="ques">
            <div className="line"></div>
            <div className="faq">
                <div className="question">
                    <p>{question}</p>{" "}
                    <span>
                        {isOpen ? (
                            <button onClick={handleClick}>
                                <IoClose className="close" />
                            </button>
                        ) : (
                            <button onClick={handleClick} className="plus">
                                <FaPlus />
                            </button>
                        )}
                    </span>
                </div>
                <div className={`answer ${isOpen ? 'open' : ''}`}>
                    <p>{answer}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleItem;
