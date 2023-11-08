
import { supabase } from "../../App";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className="bg-violet-600 hover:bg-violet-800 text-white font-medium py-2 px-4 rounded"
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

export default SignOutButton;
