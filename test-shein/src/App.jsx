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

import { lazy, Suspense } from "solid-js";

const Greeting = lazy(async () => {
  // simulate delay
  await new Promise(r => setTimeout(r, 1000))
  return import("./components/greeting")
});
const getData = async()=>{
const res = await fetch('https://jsonplaceholder.typicode.com/users')
return res.json()
}

 function App() {
getData().then((response)=>{
  console.log(response)
})

  return (
    <div class="container">
      <Nav/>
      <Greeting name="Jake" />
      <Routes>
      
        <Route path="/" component={Home} />
      </Routes>

          </div>
  );
}

//export {users}
  export default App;