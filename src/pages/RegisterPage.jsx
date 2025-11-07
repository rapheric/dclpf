import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";


export default function RegisterPage() {
  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "RM",
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);
    navigate("/dashboard/co");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border-t-4 border-[#5B2C6F]">
        {/* Logo */}
        <div className="flex justify-center mb-2">
        <h1 className="text-l font-semibold  text-gray-600">NCBA Go for it</h1> 
        </div>

        {/* Subtitle */}
        <p className="text-center text-gray-500 mb-4">
          Register to access the NCBA Document Checklist System
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter a strong password"
              className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Role</label>
            <select
              className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]"
              value={form.role}
              onChange={(e) => setForm({ ...form, role: e.target.value })}
            >
              <option value="RM">Relationship Manager</option>
              <option value="CO">Credit Operations</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#5B2C6F] text-gray-600 py-3 rounded-lg font-semibold hover:bg-[#4A235A] transition-colors duration-200 shadow"
          >
            Register
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[#5B2C6F] font-medium hover:underline">
            Login
          </a>
        </p>

        {/* Footer */}
        <footer className="text-center text-xs text-gray-400 mt-8">
          &copy; {new Date().getFullYear()} NCBA Bank. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
}
