import "./App.css"

// import Menu from "./components/Menu"
import { useStore } from "./context/storeContext"

function App() {
	const { state, dispatch } = useStore()
	return (
		<div className=" flex flex-col">
			{state.height}
			<button onClick={() => dispatch({ type: "update height", payload: 180 })}>
				click to update
			</button>
		</div>
	)
	// return <Menu />
}

export default App
