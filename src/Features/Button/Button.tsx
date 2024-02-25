import React, { FC, ReactNode, MouseEvent } from "react";
import "./Button.css";
import SearchIcon from "@mui/icons-material/Search";

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  isDarkMode: boolean;
  children?: ReactNode;
}

const Button: FC<ButtonProps> = ({ onClick, isDarkMode, children }) => {
  return (
    <button
      data-testid="Button"
      onClick={onClick}
      style={{
        backgroundColor: isDarkMode ? "#6C40B5" : "#28124D",
        width: "60px",
        height: "60px",
        borderRadius: "20px",
      }}
    >
      <SearchIcon style={{ color: "white" }} />
    </button>
  );
};

export default Button;
