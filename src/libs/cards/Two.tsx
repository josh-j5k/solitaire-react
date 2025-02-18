import CardTop from "./partials/CardTop"
import type { component } from "../../types/cards"
import Component from "./component/Component"
import CardBottom from "./partials/CardBottom"
type props = {
	class_props: string
	component: component
}
export default function Two({ component, class_props }: props) {
	return (
		<>
			<CardTop
				component={component}
				class_props={class_props}
				card_number="2"
			/>

			<div className="flex flex-col items-center justify-between h-full py-4 -lg:hidden">
				<span className="w-6 aspect-square">
					<Component component={component} />
				</span>
				<span className="w-6 aspect-square rotate-180">
					<Component component={component} />
				</span>
			</div>
			<span className="w-6 aspect-square absolute inset-0 m-auto lg:hidden">
				<Component component={component} />
			</span>

			<CardBottom
				component={component}
				class_props={class_props}
				card_number="2"
			/>
		</>
	)
}
