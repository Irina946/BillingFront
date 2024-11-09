import LogoAlpha from "../../assets/LogoAlfa.svg?react";

interface LogoProps {
    size: number;
}

export const Logo = (props: LogoProps): JSX.Element => {
    return (
        <LogoAlpha style={{height: `${props.size}px`, width: `${props.size}px`}}/>
    )
}