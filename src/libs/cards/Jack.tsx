import CardTop from "./partials/CardTop"
import type { component } from "../../types/cards"

import CardBottom from "./partials/CardBottom"

type props = {
	class_props: string
	component: component
}
export default function Jack({ component, class_props }: props) {
	return (
		<>
			<CardTop
				component={component}
				class_props={class_props}
				card_number="J"
			/>

			<div className="relative h-full flex items-center">
				<span className="w-full aspect-square">
					<img
						draggable="false"
						src="/src/assets/jack_no_type.png"
						alt=""
						className="w-4/5 -lg:w-3/5 mx-auto"
					/>
				</span>
			</div>
			<CardBottom
				component={component}
				class_props={class_props}
				card_number="J"
			/>
		</>
	)
}
