export default function RMSection({ user }) {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Relationship Manager Dashboard
      </h2>
      <p className="text-gray-600 mb-6">
        Hello, {user.name}. Here you can manage clients and track their documents.
      </p>
      <div className="bg-white p-6 rounded-lg shadow">
        <p className="text-gray-700">Client Portfolio and progress overview here...</p>
      </div>
    </div>
  );
}
