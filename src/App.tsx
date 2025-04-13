import { useState } from "react";
import { Button } from "./components/ui";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-50% to-100% flex flex-col items-center justify-center p-4 ">
      <h1>Hello Blog Project</h1>
      <p className="font-bold border-2 border-black bg-gray-200 px-8 py-2 rounded-3xl mt-5">
        {count}
      </p>
      <div className="flex flex-col items-center justify-center min-h-screen gap-2">
        <Button onClick={() => setCount(count + 1)}>Increase me</Button>
        <Button onClick={() => setCount(count - 1)}>Decrease me</Button>
      </div>
    </div>
  );
}

export default App;
