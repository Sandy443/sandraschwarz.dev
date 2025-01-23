import React from "react";

type ButtonLevel = 'background' | 'secondary' | 'tertiary';
type ButtonVariant = 'filled' | 'outlined';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    level?: ButtonLevel;
    variant?: ButtonVariant;
    size?: ButtonSize;
    className?: string;
}

export const Button: React.FC<ButtonProps> = ({
    level = 'background',
    variant = 'filled',
    size = 'md',
    className = '',
    children,
    ...props
}) => {

    const baseStyles = 'font-semibold focus:outline-none transition-transform duration-300 ease-in-out';

    const sizeStyles = {
        sm: 'py-1 px-2 text-xs md:text-sm',
        md: 'py-2 px-4 text-sm md:text-base',
        lg: 'py-3 px-6 text-base md:text-lg'
    }

    const colorStyles = {
        background: {
            filled: 'text-textLight hover:bg-ctaHover bg-cta ', 
            outlined: 'hover:text-textLight border border-cta bg-transparent hover:bg-cta'
        },
    }

    const buttonStyles = `${baseStyles} ${sizeStyles[size]} ${colorStyles[level][variant]} ${className}`

    return (
        <button className={`rounded-full ${buttonStyles}`} {...props}>
            {children}
        </button>
    );
};
