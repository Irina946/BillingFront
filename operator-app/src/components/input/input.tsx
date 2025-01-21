import React from "react";
import styles from "./input.module.css";

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
  width?: "small" | undefined;
}

export const InputModalNoMask: React.FC<InputModalProps> = ({
  type,
  placeholder,
  id,
  title,
  register,
  value,
  message,
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
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          className={`${styles.inputModal} ${size}`}
          value={valueInput}
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
