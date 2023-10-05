import { Button } from "@/components/ui/button";
import Alien from "../assets/imgs/alien.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <img src={Alien} className="max-w-md" />
      <h1 className="mb-5 text-xl font-medium">Looks like you lost your way. Quickly, get back to safety.</h1>
      <Link to={"/"}>
        <Button>Home</Button>
      </Link>
    </section>
  );
};
export default NotFound;
