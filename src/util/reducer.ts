import { state } from "../types/store";
type Action = {
    type: string,
    payload?: any
}
export default function (state: state, action: Action) {
    switch (action.type) {
        case "update height":
            const cpy = structuredClone(state)
            cpy.height = action.payload
            return cpy

        default:
            return state;
    }

}