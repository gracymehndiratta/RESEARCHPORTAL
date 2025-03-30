import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to Research Portal</h1>
      <p className="mt-4">Choose your role:</p>
      <div className="mt-6 space-x-4">
        <Link href="/user">
          <button className="btn btn-blue">|| User ||</button>
        </Link>
        <Link href="/admin">
          <button className="btn btn-green">|| Admin ||</button>
        </Link>
      </div>
    </div>
  );
}
