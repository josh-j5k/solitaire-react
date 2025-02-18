import type { component } from "../../../types/cards"
import Component from "../component/Component"

type props = {
	component: component
	classes: string
}

export default function CardCenter({ component, classes }: props) {
	return (
		<span className={classes}>
			<Component component={component} />
		</span>
	)
}
