import { Routes, Route } from "@solidjs/router";
import { createEffect, createSignal } from "solid-js";
import Nav from "./components/Nav";
import Home from "./pages/Home";



/*

const [users, setUsers]= createSignal([])
createEffect(async()=>{
const res = await fetch('https://jsonplaceholder.typicode.com/users')
setUsers(res.json())
})
*/
 function App() {


  return (
    <div class="container">
      <Nav/>
      <Routes>
      
        <Route path="/" component={Home} />
      </Routes>

          </div>
  );
}

//export {users}
  export default App;