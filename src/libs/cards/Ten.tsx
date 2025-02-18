import CardTop from "./partials/CardTop"
import type { component } from "../../types/cards"
import Component from "./component/Component"
import CardBottom from "./partials/CardBottom"
import CardCenter from "./partials/CardCenter"
type props = {
	class_props: string
	component: component
}
export default function Ten({ component, class_props }: props) {
	return (
		<>
			<CardTop
				component={component}
				class_props={class_props}
				card_number="10"
			/>

			<div className="flex justify-center h-full py-4 px-8 -lg:hidden">
				<div className="flex flex-col justify-between">
					<CardCenter classes="w-4 aspect-square " component={component} />
					<CardCenter classes="w-4 aspect-square" component={component} />

					<CardCenter
						classes="w-4 aspect-square rotate-180"
						component={component}
					/>
					<CardCenter
						classes="w-4 aspect-square rotate-180"
						component={component}
					/>
				</div>
				<div className="flex justify-center py-6">
					<div className="flex flex-col justify-between">
						<CardCenter classes="w-4 aspect-square" component={component} />
						<CardCenter classes="w-4 aspect-square" component={component} />
					</div>
				</div>
				<div className="flex flex-col justify-between">
					<CardCenter classes="w-4 aspect-square" component={component} />
					<CardCenter classes="w-4 aspect-square" component={component} />

					<CardCenter
						classes="w-4 aspect-square rotate-180"
						component={component}
					/>
					<CardCenter
						classes="w-4 aspect-square rotate-180"
						component={component}
					/>
				</div>
			</div>
			<span className="w-6 aspect-square absolute inset-0 m-auto lg:hidden">
				<Component component={component} />
			</span>

			<CardBottom
				component={component}
				class_props={class_props}
				card_number="10"
			/>
		</>
	)
}
