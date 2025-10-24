import { useEffect, useState } from "react";

export default function Video() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await fetch("/api/content?type=video&published=true");
      const data = await res.json();
      console.log("fetchVideos response", data);
<<<<<<< HEAD
      setVideos(data || []);
=======
      if (!res.ok) {
        console.error("Failed to fetch videos", res.status, data);
        setVideos([]);
      } else if (!Array.isArray(data)) {
        console.warn("Expected videos array but got:", data);
        setVideos([]);
      } else {
        setVideos(data);
      }
>>>>>>> main
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b-4 border-black pb-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Video Reports
        </h2>
        <p className="font-serif text-lg text-gray-700">
          Visual stories from the heart of our community
        </p>
      </div>

      <div className="text-sm text-gray-600">
        Found {videos.length} video(s)
      </div>

      {videos.length === 0 ? (
        <section className="text-center py-12">
          <p className="font-serif text-xl text-gray-600">
            No videos published yet. Check back soon for new content.
          </p>
        </section>
      ) : (
        <div className="space-y-6">
<<<<<<< HEAD
          {videos.map((v) => (
            <article key={v._id} className="border-2 border-black p-6">
              <div className="flex flex-col md:flex-row gap-6">
                {v.videoUrl ? (
                  <div className="flex-shrink-0 w-full md:w-1/3 bg-gray-200 border border-black">
                    {v.videoUrl.includes("youtube.com") ||
                    v.videoUrl.includes("youtu.be") ? (
                      // Render YouTube embed
                      <iframe
                        className="w-full h-full"
                        src={
                          v.videoUrl.includes("youtu.be")
                            ? `https://www.youtube.com/embed/${v.videoUrl
                                .split("/")
                                .pop()}`
                            : v.videoUrl.includes("watch?v=")
                            ? `https://www.youtube.com/embed/${new URL(
                                v.videoUrl
                              ).searchParams.get("v")}`
                            : v.videoUrl
                        }
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                      />
                    ) : v.videoUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                      <video
                        controls
                        src={v.videoUrl}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <a
                        href={v.videoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-600 underline"
                      >
                        Open video
                      </a>
                    )}
                  </div>
                ) : null}
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider mb-2">
                    Video
                  </div>
                  <h3 className="font-serif text-2xl font-bold mb-3">
                    {v.title}
                  </h3>
                  <p className="font-serif text-gray-700 leading-relaxed mb-4">
                    {v.description}
                  </p>
                  <div className="text-sm text-gray-600">
                    By {v.author} • {new Date(v.createdAt).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </article>
          ))}
=======
          {Array.isArray(videos)
            ? videos.map((v) => (
                <article key={v._id} className="border-2 border-black p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {v.videoUrl ? (
                      <div className="flex-shrink-0 w-full md:w-1/3 bg-gray-200 border border-black">
                        {v.videoUrl.includes("youtube.com") ||
                        v.videoUrl.includes("youtu.be") ? (
                          // Render YouTube embed
                          <iframe
                            className="w-full h-full"
                            src={
                              v.videoUrl.includes("youtu.be")
                                ? `https://www.youtube.com/embed/${v.videoUrl
                                    .split("/")
                                    .pop()}`
                                : v.videoUrl.includes("watch?v=")
                                ? `https://www.youtube.com/embed/${new URL(
                                    v.videoUrl
                                  ).searchParams.get("v")}`
                                : v.videoUrl
                            }
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          />
                        ) : v.videoUrl.match(/\.(mp4|webm|ogg)$/i) ? (
                          <video
                            controls
                            src={v.videoUrl}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <a
                            href={v.videoUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 underline"
                          >
                            Open video
                          </a>
                        )}
                      </div>
                    ) : null}
                    <div className="flex-1">
                      <div className="text-xs font-bold uppercase tracking-wider mb-2">
                        Video
                      </div>
                      <h3 className="font-serif text-2xl font-bold mb-3">
                        {v.title}
                      </h3>
                      <p className="font-serif text-gray-700 leading-relaxed mb-4">
                        {v.description}
                      </p>
                      <div className="text-sm text-gray-600">
                        By {v.author} •{" "}
                        {new Date(v.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                </article>
              ))
            : null}
>>>>>>> main
        </div>
      )}
    </div>
  );
}
