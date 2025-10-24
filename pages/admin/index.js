import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [contents, setContents] = useState([]);

  useEffect(() => {
    if (status === "loading") return;
    const authDisabled = process.env.NEXT_PUBLIC_ADMIN_AUTH_DISABLED === "true";
    if (!authDisabled && !session) {
      router.push("/admin/login");
      return;
    }

    fetchContents();
  }, [session, status]);

  const fetchContents = async () => {
    const res = await fetch("/api/content");
    const data = await res.json();
    setContents(data);
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this content?")) {
      await fetch(`/api/content/${id}`, { method: "DELETE" });
      fetchContents();
    }
  };

  const handlePublish = async (id, published) => {
    await fetch(`/api/content/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ published: !published }),
    });
    fetchContents();
  };

  if (status === "loading") return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Admin Dashboard
              </h1>
              <div className="flex space-x-4">
                <button
                  onClick={() => router.push("/admin/content/new")}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
                >
                  Add New Content
                </button>
                <button
                  onClick={() => signOut()}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <div className="bg-white shadow overflow-hidden sm:rounded-md">
                <ul className="divide-y divide-gray-200">
                  {contents.map((content) => (
                    <li key={content._id}>
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              {content.imageUrl && (
                                <img
                                  className="h-10 w-10 rounded-full"
                                  src={content.imageUrl}
                                  alt=""
                                />
                              )}
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {content.title}
                              </div>
                              <div className="text-sm text-gray-500">
                                {content.type} •{" "}
                                {content.published ? "Published" : "Draft"}
                              </div>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button
                              onClick={() =>
                                handlePublish(content._id, content.published)
                              }
                              className={`px-3 py-1 rounded-md text-sm ${
                                content.published
                                  ? "bg-green-100 text-green-800"
                                  : "bg-yellow-100 text-yellow-800"
                              }`}
                            >
                              {content.published ? "Unpublish" : "Publish"}
                            </button>
                            <button
                              onClick={() =>
                                router.push(
                                  `/admin/content/edit/${content._id}`
                                )
                              }
                              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(content._id)}
                              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md text-sm"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
