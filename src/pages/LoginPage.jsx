import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
// import NCBAlogo from "../assets/ncba-logo.png"; // Add your NCBA logo in assets

export default function LoginPage() {
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "", remember: false });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form.email, form.password);
    navigate("/dashboard/rm");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-50 to-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md border-t-4 border-[#5B2C6F]">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <h1 className="text-xl font-semibold  text-gray-600">NCBA Go for it</h1> 
        </div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-600 mb-6">
          Welcome Back
        </h2>

        {/* Subtitle */}
        <p className="text-center text-gray-500 mb-8">
          Sign in to continue to your NCBA dashboard
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
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

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="border border-gray-300 w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B2C6F]"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              required
            />
          </div>

          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between text-sm text-gray-600">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={form.remember}
                onChange={(e) => setForm({ ...form, remember: e.target.checked })}
                className="form-checkbox h-4 w-4 text-[#5B2C6F] rounded"
              />
              Remember Me
            </label>
            <button
              type="button"
              className="text-[#5B2C6F] hover:underline font-medium"
              onClick={() => alert("Forgot Password clicked")}
            >
              Forgot Password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#5B2C6F] text-gray-600 py-3 rounded-lg font-semibold hover:bg-[#4A235A] transition-colors duration-200 shadow"
          >
            Sign In
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don’t have an account?{" "}
          <a href="/register" className="text-[#5B2C6F] font-medium hover:underline">
            Register
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
