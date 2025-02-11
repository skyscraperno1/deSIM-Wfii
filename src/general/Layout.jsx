import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "../components/ErrorFallback.jsx";
import Header from "../components/Header.jsx"

export const Layout = ({ children, title }) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Header title={title} />
      <div className="container">
        {children}
      </div>
    </ErrorBoundary>
  );
};
