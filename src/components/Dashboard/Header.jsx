const Header = ({ user }) => (
  <header className="bg-gray-200 py-4 px-6 flex justify-between items-center shadow-md">
    <h1 className="text-xl font-bold text-gray-800">NCBA Dashboard</h1>
    <p className="text-gray-600">
      Welcome, {user.name} ({user.role})
    </p>
  </header>
);

export default Header;
