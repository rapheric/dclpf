// // src/pages/RegisterPage.jsx
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";

// export default function RegisterPage() {
//   const { register } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     // role: "co",
//   });

//   const { name, email, password, role } = form;
//   console.log({ name, email, password }); // ✅ Corrected

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await register(name, email, password);
//     navigate("/codashboard");
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 px-4">
//       <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border-t-4 border-[#5B2C6F]">
//         <div className="flex justify-center mb-2">
//           <h1 className="text-xl font-semibold text-gray-600">NCBA Go for it</h1>
//         </div>

//         <h2 className="text-3xl font-bold text-center text-gray-600 mb-6">
//           Create Your Account
//         </h2>

//         <p className="text-center text-gray-500 mb-8">
//           Register to access your NCBA dashboard
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Full Name</label>
//             <input
//               type="text"
//               placeholder="John Doe"
//               className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]"
//               value={name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Email Address</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]"
//               value={email}
//               onChange={(e) => setForm({ ...form, email: e.target.value })}
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Password</label>
//             <input
//               type="password"
//               placeholder="Create a password"
//               className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]"
//               value={password}
//               onChange={(e) => setForm({ ...form, password: e.target.value })}
//               required
//             />
//           </div>

//           {/* <div>
//             <label className="block text-gray-700 font-medium mb-1">Role</label>
//             <select
//               className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]"
//               value={role}
//               onChange={(e) => setForm({ ...form, role: e.target.value })}
//             >
//               <option value="co">Relationship Officer (co)</option>
//               <option value="rm">Relationship Manager (rm)</option>
//             </select>
//           </div> */}

//           <button
//             type="submit"
//             className="w-full bg-[#5B2C6F] text-gray-100 py-3 rounded-lg font-semibold hover:bg-[#4A235A] transition-colors duration-200 shadow"
//           >
//             Register
//           </button>
//         </form>

//         <p className="text-center text-sm text-gray-500 mt-6">
//           Already have an account?{" "}
//           <a href="/loginpage" className="text-[#5B2C6F] font-medium hover:underline">
//             Sign In
//           </a>
//         </p>

//         <footer className="text-center text-xs text-gray-400 mt-8">
//           &copy; {new Date().getFullYear()} NCBA Bank. All Rights Reserved.
//         </footer>
//       </div>
//     </div>
//   );
// }
// src/pages/RegisterPage.jsx
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "ro",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form.name, form.email, form.password, form.role);
      navigate("/loginpage")
    } catch (err) {
      setError(err.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border-t-4 border-[#5B2C6F]">
        <div className="flex justify-center mb-2">
          <h1 className="text-xl font-semibold text-gray-600">NCBA Go for it</h1>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-600 mb-6">Create an Account</h2>
        <p className="text-center text-gray-500 mb-8">Sign up to access your NCBA dashboard</p>

        {error && <p className="text-red-500 text-center mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Select Role</label>
            <select
              className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="ro">Relationship Officer</option>
              <option value="rm">Relationship Manager</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5B2C6F] text-white py-3 rounded-lg font-semibold hover:bg-[#4A235A] transition-colors duration-200 shadow"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/loginpage" className="text-[#5B2C6F] font-medium hover:underline">
            Login
          </a>
        </p>

        <footer className="text-center text-xs text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} NCBA Bank. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
