import Link from "next/link";

const NotFound = () => {
  return (
    <div className="hero py-32">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-2xl md:text-5xl font-bold">Not Found</h1>
          <Link href="/">
            <button className="btn btn-accent btn-sm normal-case mt-3 rounded-md text-primary-content bg-secondary hover:!bg-secondary border-none shadow-custom">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
