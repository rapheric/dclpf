
import DocumentReviewPage from "./pages/DocumentReviewPage";
import ReportsPage from "./pages/ReportsPage";
import RmChecklists from "./pages/Checklist";

export default function MainContent({ activePage }) {
  switch (activePage) {
    case "home":
      return <DocumentReviewPage />;

    case "review":
      return <DocumentReviewPage />;

    case "reports":
      return <ReportsPage />;

    case "checklist":
      return <RmChecklists />;

    default:
      return (
        <div className="text-center text-gray-500 mt-10">
          Page not found.
        </div>
      );
  }
}
