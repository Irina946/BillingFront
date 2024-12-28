import React from "react";
import styles from "./input.module.css";
import InputMask from "react-input-mask";

interface InputModalProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
  id: string;
  title: string;
  register?: any;
  value?: string;
  message?: string;
  requiredMessage?: string;
  valueInput?: string;
  mask: string;
  width?: "small" | undefined;
}

export const InputModal: React.FC<InputModalProps> = ({
  type,
  placeholder,
  id,
  title,
  register,
  value,
  message,
  mask,
  valueInput,
  requiredMessage,
  width,
  ...rest
}): JSX.Element => {
    const size = width === "small" ? 'w-[190px]' : 'w-[400px]';
  return (
    <div className="relative mb-6 font-sans">
      <label htmlFor={id} className={styles.labelModal}>
        {title}
        <InputMask
          id={id}
          type={type}
          placeholder={placeholder}
          className={`${styles.inputModal} ${size}`}
          value={valueInput}
          mask={mask}
          required
          {...register(id, {
            required: requiredMessage,
            pattern: {
              value: value,
              message: message,
            },
          })}
          {...rest}
        />
      </label>
    </div>
  );
};
