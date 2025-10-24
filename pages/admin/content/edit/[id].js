import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function EditContent() {
  const router = useRouter();
  const { id } = router.query;
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // authentication removed — simply fetch content when id is present
    if (id) {
      fetchContent();
    }
  }, [id]);

  const fetchContent = async () => {
    const res = await fetch(`/api/content/${id}`);
    const data = await res.json();
    reset(data);
    setLoading(false);
  };

  const type = watch("type");

  const onSubmit = async (data) => {
    const res = await fetch(`/api/content/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      router.push("/admin");
    } else {
      alert("Error updating content");
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      const { url } = await res.json();
      const fieldName =
        type === "blog"
          ? "imageUrl"
          : type === "podcast"
          ? "audioUrl"
          : "videoUrl";
      setValue(fieldName, url);
    } else {
      alert("Error uploading file");
    }
    setUploading(false);
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
              Edit Content
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Type
                </label>
                <select
                  {...register("type", { required: true })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="blog">Blog</option>
                  <option value="podcast">Podcast</option>
                  <option value="video">Video</option>
                </select>
                {errors.type && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  {...register("title", { required: true })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.title && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  {...register("description", { required: true })}
                  rows={3}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.description && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              {type === "blog" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Content
                  </label>
                  <textarea
                    {...register("content", { required: type === "blog" })}
                    rows={10}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {errors.content && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              )}

              {type === "podcast" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Audio URL
                  </label>
                  <input
                    type="url"
                    {...register("audioUrl", { required: type === "podcast" })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {errors.audioUrl && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              )}

              {type === "video" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Video URL
                  </label>
                  <input
                    type="url"
                    {...register("videoUrl", { required: type === "video" })}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  {errors.videoUrl && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  {type === "blog"
                    ? "Image"
                    : type === "podcast"
                    ? "Audio File"
                    : "Video File"}
                </label>
                <input
                  type="file"
                  accept={
                    type === "blog"
                      ? "image/*"
                      : type === "podcast"
                      ? "audio/*"
                      : "video/*"
                  }
                  onChange={handleFileUpload}
                  className="mt-1 block w-full"
                />
                {uploading && <span>Uploading...</span>}
                {type === "blog" && watch("imageUrl") && (
                  <img
                    src={watch("imageUrl")}
                    alt="Preview"
                    className="mt-2 h-20 w-20 object-cover"
                  />
                )}
                {type === "podcast" && watch("audioUrl") && (
                  <audio controls src={watch("audioUrl")} className="mt-2" />
                )}
                {type === "video" && watch("videoUrl") && (
                  <video
                    controls
                    src={watch("videoUrl")}
                    className="mt-2 h-20 w-20 object-cover"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Slug
                </label>
                <input
                  type="text"
                  {...register("slug", { required: true })}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
                {errors.slug && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => router.push("/admin")}
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
