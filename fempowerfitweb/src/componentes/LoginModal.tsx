import { Dispatch, SetStateAction } from "react";

interface LoginModalProps {
    setIsLoginOpen: Dispatch<SetStateAction<boolean>>;
    isOpen: boolean;
}

export function LoginModal({ isOpen, setIsLoginOpen }: LoginModalProps) {
    if (!isOpen) {
        return null;
    }


    return (
        <div className="bg-red-300">
            <h1>Login</h1>
        </div>
    );
}