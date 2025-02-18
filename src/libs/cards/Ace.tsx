import CardTop from "./partials/CardTop"
import type { component } from "../../types/cards"
import Component from "./component/Component"
import CardBottom from "./partials/CardBottom"
type props = {
	class_props: string
	component: component
}
export default function Ace({ component, class_props }: props) {
	return (
		<>
			<CardTop
				component={component}
				class_props={class_props}
				card_number="A"
			/>

			<div className="relative h-full flex items-center justify-center">
				<span className="w-14 -lg:w-6 aspect-square">
					<Component component={component} />
				</span>
			</div>

			<CardBottom
				component={component}
				class_props={class_props}
				card_number="A"
			/>
		</>
	)
}
