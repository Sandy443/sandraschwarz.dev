import React from "react";

type FabSize = 'sm' | 'md' | 'lg';

interface FabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: FabSize;
    className?: string;
}

const Fab: React.FC<FabProps> = ({
    size = 'md',
    className = '',
    children,
    ...props 
}) => {
    const baseStyles = 'rounded-full';

    const sizeStyles = {
        sm: '',
        md: '',
        lg: '',
    };

    const styles = `${baseStyles} ${sizeStyles[size]}`;

    return (
        <button className={`${styles} ${className}`} {...props}>
            {children}
        </button>
    );
};

export default Fab;
