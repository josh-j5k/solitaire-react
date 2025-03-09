import type { component } from "../../../types/cards"
import Component from "../component/Component"

type props = {
	component: component
	card_number: string
	class_props: string
}
export default function CardTop({
	component,
	card_number,
	class_props,
}: props) {
	return (
		<div className="absolute lg:bottom-1 bottom-0 right-2 rotate-180 flex flex-col items-center">
			<span className={"font-bold text-xl ".concat(`text-${class_props}`)}>
				{" "}
				{card_number}{" "}
			</span>
			<span className="w-3 aspect-square -lg:-mt-1">
				<Component component={component} />
			</span>
		</div>
	)
}
