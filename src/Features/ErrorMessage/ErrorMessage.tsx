import React from "react";

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffcccc",
        padding: "10px",
        borderRadius: "5px",
        border: "1px solid #ff0000",
        color: "#ff0000",
      }}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
