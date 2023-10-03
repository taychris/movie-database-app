import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  let navigate = useNavigate();

  return (
    <Button onClick={() => navigate(-1)} className="gap-2" variant={"secondary"}>
      <ArrowLeft className="w-4"/>
      Back
    </Button>
  );
};
export default BackButton;
