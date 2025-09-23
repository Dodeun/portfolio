import { useId, type Dispatch, type SetStateAction } from "react";

interface InputProps {
  label: string;
  fieldType: "text" | "textarea" | "email";
  fieldName: string;
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
}

function Input({ label, fieldName, fieldType, input, setInput }: InputProps) {
  const reactId = useId();
  const id = `${fieldName}-${reactId}`;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="pl-1">
        {label}
      </label>
      {fieldType === "textarea" ? (
        <textarea
          id={id}
          name={fieldName}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={6}
          className="bg-bg-primary-1000 shadow-inner-md rounded-md px-3 py-1.5"
        />
      ) : (
        <input
          id={id}
          name={fieldName}
          type={fieldType}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-bg-primary-1000 shadow-inner-md rounded-md px-3 py-1.5"
        />
      )}
    </div>
  );
}

export default Input;
