import { Star } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const FavoritesButton = () => {
  return (
    <Link to={"/favorites"} className="order-1 w-full xs:w-max md:order-2">
        <Button className="w-full gap-2">
            <Star className="w-4 fill-yellow-400 stroke-yellow-400"/>
            Favorites
        </Button>
    </Link>
  )
}
export default FavoritesButton