import { FC } from "react";

interface InputFieldProps {
  text: string;
  handleText: (e: string) => void;
  addTodo: () => void;
}
const InputField: FC<InputFieldProps> = ({ text, handleText, addTodo }) => {
  return (
    <label className="label">
      <input
        type="text"
        value={text}
        onChange={(e) => handleText(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>
    </label>
  );
};

export default InputField;
