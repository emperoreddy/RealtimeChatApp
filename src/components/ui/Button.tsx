
import { supabase } from "../../App";
import { Link } from "react-router-dom";

interface ButtonProps {
    onClick?: () => void;
    text: string;
    linkTo?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, linkTo }) => {
    if (linkTo) {
        return (
            <Link
                to={linkTo}
                className="bg-blue-600 hover:bg-blue-800 text-white font-medium py-1 px-3 rounded"
            >
                {text}
            </Link>
        );
    }

    return (
        <button
            className="bg-red-600 hover:bg-red-800 text-white font-medium py-1 px-3 rounded"
            onClick={onClick}
        >
            {text}
        </button>
    );
};

const SignOutButton: React.FC = () => {
    const handleSignOut = async () => {
        await supabase.auth.signOut();
    };

    return <Button onClick={handleSignOut} text="Sign Out" />;
};

const ChooseUsernameButton: React.FC = () => {
    return <Button text="Change name" linkTo="/username" />;
};

export default SignOutButton;
export { ChooseUsernameButton };
