export default function Video() {
  const videos = [
    {
      id: 1,
      title: "The Corner Store Chronicles: A Day in the Life",
      duration: "12:45",
      views: "45K",
      date: "2 days ago",
      category: "Daily Life",
    },
    {
      id: 2,
      title: "Morning Market: Where the Community Gathers",
      duration: "8:30",
      views: "32K",
      date: "3 days ago",
      category: "Community",
    },
    {
      id: 3,
      title: "Local Heroes: The Volunteer Firefighters",
      duration: "15:20",
      views: "67K",
      date: "5 days ago",
      category: "Features",
    },
    {
      id: 4,
      title: "The School Bus Driver Who Knows Every Child's Name",
      duration: "10:15",
      views: "89K",
      date: "1 week ago",
      category: "Daily Life",
    },
    {
      id: 5,
      title: "Street Musicians: The Soundtrack of Our City",
      duration: "14:50",
      views: "52K",
      date: "1 week ago",
      category: "Features",
    },
    {
      id: 6,
      title: "The Library: More Than Just Books",
      duration: "11:30",
      views: "41K",
      date: "2 weeks ago",
      category: "Community",
    },
  ];

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

      {/* Featured Video */}
      <article className="border-4 border-black">
        <div className="aspect-video bg-gray-200 border-b-4 border-black flex items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="white"
                className="w-10 h-10 ml-1"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="text-sm font-bold">FEATURED VIDEO</div>
          </div>
        </div>
        <div className="p-6">
          <div className="text-xs font-bold uppercase tracking-wider mb-2">
            Special Report
          </div>
          <h3 className="font-serif text-3xl font-bold mb-3">
            <span className="highlight-lime">
              A Year in the Life of Main Street
            </span>
          </h3>
          <p className="font-serif text-lg text-gray-700 leading-relaxed mb-4">
            We spent 12 months documenting the life of a single city block.
            Through seasons, celebrations, and challenges, witness the
            resilience and spirit of a community.
          </p>
          <div className="flex items-center gap-4 text-sm font-serif text-gray-600">
            <span>45:30</span>
            <span>•</span>
            <span>125K views</span>
            <span>•</span>
            <span>Today</span>
          </div>
        </div>
      </article>

      {/* Video Grid */}
      <div>
        <h3 className="font-serif text-2xl font-bold mb-6 border-b-2 border-black pb-2">
          Recent Videos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <article
              key={video.id}
              className="border-2 border-black hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-200 border-b-2 border-black flex items-center justify-center relative">
                <div className="absolute top-3 right-3 bg-black text-white px-2 py-1 text-xs font-bold">
                  {video.duration}
                </div>
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="white"
                    className="w-8 h-8 ml-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="p-4">
                <div className="text-xs font-bold uppercase tracking-wider mb-2">
                  {video.category}
                </div>
                <h4 className="font-serif text-lg font-bold mb-2">
                  {video.title}
                </h4>
                <div className="flex items-center gap-2 text-xs font-serif text-gray-600">
                  <span>{video.views} views</span>
                  <span>•</span>
                  <span>{video.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="border-t-2 border-black pt-8">
        <h3 className="font-serif text-2xl font-bold mb-6">
          Browse by Category
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-colors cursor-pointer">
            <div className="font-serif font-bold mb-1">Daily Life</div>
            <div className="text-sm">24 videos</div>
          </div>
          <div className="border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-colors cursor-pointer">
            <div className="font-serif font-bold mb-1">Community</div>
            <div className="text-sm">18 videos</div>
          </div>
          <div className="border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-colors cursor-pointer">
            <div className="font-serif font-bold mb-1">Features</div>
            <div className="text-sm">15 videos</div>
          </div>
          <div className="border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-colors cursor-pointer">
            <div className="font-serif font-bold mb-1">Interviews</div>
            <div className="text-sm">12 videos</div>
          </div>
        </div>
      </div>
    </div>
  );
}
