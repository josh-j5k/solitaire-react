import { createContext, useContext, useReducer } from "react"
import { state } from "../types/store"
import reducer from "../util/reducer"
import { initialState } from "../store"

interface Action {
	type: string
}
type storeContextType = {
	state: state
	dispatch: React.Dispatch<Action>
}

// export let store = structuredClone(initialState)
const StoreContext = createContext<storeContextType | undefined>(undefined)
export function useStore() {
	const context = useContext(StoreContext)
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider")
	}
	return context
}
export function StoreProvider({ children }: { children: React.ReactNode }) {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<StoreContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</StoreContext.Provider>
	)
}
