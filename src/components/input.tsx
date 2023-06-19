// React
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { FC, useEffect, useState } from "react";

// Interfaces
import { IInput } from "../interfaces";

// Icons
// Styles
import { SInput } from "./styles/input.styles";

const Input: FC<IInput> = ({
  title,
  type,
  placeholder,
  name,
  id,
  handleChange,
  value,
}) => {
  const [visible, setVisible] = useState(false);
  const [handleType, setHandleType] = useState("password");
  useEffect(() => {
    if (visible) {
      setHandleType("text");
    } else {
      setHandleType("password");
    }
  }, [visible]);
  return (
    <SInput>
      {title && title}
      <div className="position">
        <input
          type={type === "password" ? handleType : type}
          id={id}
          name={name}
          placeholder={placeholder}
          onChange={handleChange}
          value={value}
        />
        {type.toLowerCase() === "password" ? (
          visible ? (
            <Visibility className="eye" onClick={() => setVisible(false)} />
          ) : (
            <VisibilityOff className="eye" onClick={() => setVisible(true)} />
          )
        ) : null}
      </div>
    </SInput>
  );
};
export default Input;
