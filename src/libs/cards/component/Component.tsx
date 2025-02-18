import type { component } from "../../../types/cards"
import Club from "../icons/Club"
import Diamond from "../icons/Diamond"
import Heart from "../icons/Heart"
import Spade from "../icons/Spade"

type props = {
	component: component
}
export default function Component({ component }: props) {
	if (component === "Club") return <Club />
	if (component === "Diamond") return <Diamond />
	if (component === "Heart") return <Heart />
	return <Spade />
}
