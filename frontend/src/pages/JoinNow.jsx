import MagicLinkAlertSignInPage from "../components/Login";
import { useNavigate } from "react-router-dom";

export default function JoinNow() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate("/ExploreStartups");
  };

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      <MagicLinkAlertSignInPage onSuccess={handleSuccess} />
    </div>
  );
}
