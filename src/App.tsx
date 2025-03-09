import { useContext, useReducer, useState } from "react"

import "./App.css"

import Menu from "./components/Menu"
import { useAppSelector } from "./features/app/hooks"

function App() {
	const win = useAppSelector((state) => state.win.value)

	return <Menu />
}

export default App
