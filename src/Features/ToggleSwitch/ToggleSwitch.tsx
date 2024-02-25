import React, { useState } from "react";
import Switch from "@mui/material/Switch";

interface SwitchProps {
  onChange: (value: boolean) => void;
}

const ToggleSwitch: React.FC<SwitchProps> = ({ onChange }) => {
  const [checked, setChecked] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    onChange(isChecked);
  };
  return <Switch checked={checked} onChange={handleChange} />;
};

export default ToggleSwitch;
