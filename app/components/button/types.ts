export interface ButtonProps {
    className?: string;
    icon?: React.ReactNode;
    text: string;
    onClick: () => void;
}