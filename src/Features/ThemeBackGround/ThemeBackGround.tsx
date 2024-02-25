import React, { ReactNode } from "react";
import lightBackgroundImage from "../../Images/bg-light.png";
import darkBackgroundImage from "../../Images/bg-dark.png";

interface ThemedBackgroundProps {
  isDarkMode: boolean;
  children: ReactNode;
}

const ThemedBackground: React.FC<ThemedBackgroundProps> = ({
  isDarkMode,
  children,
}) => {
  const backgroundImage = isDarkMode
    ? darkBackgroundImage
    : lightBackgroundImage;

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "100% 100%",
        width: "100%",
        height: "100%",
        display: "block",
        justifyContent: "center",
        alignItems: "center",
        color: isDarkMode ? "white" : "black",
      }}
    >
      {children}
    </div>
  );
};

export default ThemedBackground;
