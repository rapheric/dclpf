import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-b from-gray-50 to-gray-100 px-6 py-10">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center max-w-3xl">

        {/* Title */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          NCBA Document Checklist System
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Streamline your document management process with a secure, efficient, and 
            user-friendly platform built for NCBA Relationship Managers and Credit Operations.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/loginpage"
            className="px-8 py-3 bg-[#5B2C6F] text-white font-semibold rounded-lg shadow hover:bg-[#4A235A] transition-all duration-200"
          >
            Login
          </Link>
          <Link
            to="/registerpage"
            className="px-8 py-3 bg-white text-[#5B2C6F] border border-[#5B2C6F] font-semibold rounded-lg shadow hover:bg-[#EDE7F6] transition-all duration-200"
          >
            Register
          </Link>
        </div>
      </div>

      {/* Feature Section */}
      <section className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border-t-4 border-[#5B2C6F] text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Client Management
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Track, organize, and manage client documentation effortlessly with
            real-time updates.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border-t-4 border-[#5B2C6F] text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Role-Based Dashboards
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Access personalized dashboards designed for Relationship Managers
            and Credit Operations teams.
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border-t-4 border-[#5B2C6F] text-center">
          <h3 className="text-xl font-semibold text-gray-800 mb-3">
            Secure & Compliant
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Your data is safeguarded under bank-grade security standards ensuring 
            compliance and confidentiality.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 text-gray-500 text-sm text-center border-t border-gray-200 pt-6 w-full max-w-6xl">
        &copy; {new Date().getFullYear()} NCBA Bank. All rights reserved.
      </footer>
    </div>
  );
}
