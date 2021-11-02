import React from "react"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    <main className={"layout flex-center-rw"}>
      {children}
    </main>
  )
}
