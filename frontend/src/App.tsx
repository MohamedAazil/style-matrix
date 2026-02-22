// import { Login } from "./components/Login";

// function App() {
//   return (
//     <div className="min-h-screen bg-slate-50">
//       <Login />
//     </div>
//   );
// }

// export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Login";

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Routes>
        {/* Redirect empty path to login for now to test visibility */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;