
import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="container flex flex-col items-center justify-center min-h-screen text-center py-16">
        <h1 className="text-9xl font-bold text-primary-200">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-6 mb-4">Page Not Found</h2>
        <p className="text-lg text-neutral-600 max-w-md mb-8">
          The page you're looking for doesn't exist or has been moved to another location.
        </p>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          <ArrowLeft size={16} className="mr-2" />
          Back to Homepage
        </Link>
      </div>
    </Layout>
  );
}
