import Header from "../components/Header"
import Task from "../components/Task"
import Todosection from "@/components/Todosection"

export default function Home() {
  return (
    <main className="" style={{backgroundColor: 'rgba(18,11,20,255)'}}>
    <Header/>
    <Task/>
    <Todosection/>
    </main>
  )
}
