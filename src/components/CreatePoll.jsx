import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPoll } from "../redux/pollsSlice";
import { v4 as uuidv4 } from "uuid";

const CreatePoll = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const dispatch = useDispatch();

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = options.slice();
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question.trim() && options.every((option) => option.trim())) {
      const newPoll = {
        id: uuidv4(),
        question,
        options: options.map((option) => ({ text: option, votes: 0 })),
      };
      dispatch(addPoll(newPoll));
      console.log()
      setQuestion("");
      setOptions(["", ""]);
    }
  };

  return (
    <div>
      <h2>Create New Poll</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Question</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Options</label>
          {options.map((option, index) => (
            <input
              key={index}
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              required
            />
          ))}
          <button type="button" onClick={handleAddOption}>
            Add Option
          </button>
        </div>
        <button type="submit">Create Poll</button>
      </form>
    </div>
  );
};

export default CreatePoll;
