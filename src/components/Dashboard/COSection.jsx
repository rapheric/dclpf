export default function COSection({ user }) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Credit Operations Dashboard
      </h2>
      <p className="text-gray-600 mb-6">
        Hello, {user.name}. View and process credit approvals efficiently.
      </p>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700">Credit analysis and application data here...</p>
      </div>
    </div>
  );
}
