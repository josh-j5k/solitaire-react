import CardTop from "./partials/CardTop"
import type { component } from "../../types/cards"
import Component from "./component/Component"
import CardBottom from "./partials/CardBottom"
import CardCenter from "./partials/CardCenter"
type props = {
	class_props: string
	component: component
}
export default function Three({ component, class_props }: props) {
	return (
		<>
			<CardTop
				component={component}
				class_props={class_props}
				card_number="3"
			/>

			<div className="flex flex-col items-center justify-between h-full py-4 -lg:hidden">
				<CardCenter classes="w-6 aspect-square" component={component} />
				<CardCenter classes="w-6 aspect-square" component={component} />
				<CardCenter classes="w-6 aspect-square" component={component} />
			</div>
			<span className="w-6 aspect-square absolute inset-0 m-auto lg:hidden">
				<Component component={component} />
			</span>

			<CardBottom
				component={component}
				class_props={class_props}
				card_number="3"
			/>
		</>
	)
}
