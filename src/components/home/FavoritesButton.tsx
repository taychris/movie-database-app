import { Star } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "../ui/button"

const FavoritesButton = () => {
  return (
    <Link to={"/favorites"}>
        <Button className="gap-2">
            <Star className="w-4 fill-yellow-400 stroke-yellow-400"/>
            Favorites
        </Button>
    </Link>
  )
}
export default FavoritesButton