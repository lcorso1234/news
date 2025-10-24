export default function Podcast() {
  const podcasts = [
    {
      id: 1,
      title: "Voices from the Neighborhood",
      episode: "Episode 42",
      duration: "45 min",
      date: "October 24, 2025",
      description:
        "Local residents share their perspectives on community, belonging, and what makes a neighborhood thrive.",
      category: "Daily Life",
    },
    {
      id: 2,
      title: "The Working People's Hour",
      episode: "Episode 38",
      duration: "52 min",
      date: "October 23, 2025",
      description:
        "Real conversations with workers about their jobs, challenges, and the dignity of labor.",
      category: "Community",
    },
    {
      id: 3,
      title: "Small Business Stories",
      episode: "Episode 35",
      duration: "48 min",
      date: "October 22, 2025",
      description:
        "Entrepreneurs discuss the reality of running a local business in today's economy.",
      category: "Features",
    },
    {
      id: 4,
      title: "The Commute Talk",
      episode: "Episode 31",
      duration: "35 min",
      date: "October 21, 2025",
      description:
        "Stories collected during morning commutes—the thoughts, dreams, and observations of daily travelers.",
      category: "Daily Life",
    },
    {
      id: 5,
      title: "Community Connections",
      episode: "Episode 28",
      duration: "41 min",
      date: "October 20, 2025",
      description:
        "Exploring how neighbors build bonds and create thriving communities.",
      category: "Community",
    },
    {
      id: 6,
      title: "The Real News Roundtable",
      episode: "Episode 25",
      duration: "58 min",
      date: "October 19, 2025",
      description:
        "Local voices discuss the week's events with authenticity and insight.",
      category: "Opinion",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b-4 border-black pb-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          Podcast Series
        </h2>
        <p className="font-serif text-lg text-gray-700">
          Audio stories from real people about real life
        </p>
      </div>

      {/* Featured Podcast */}
      <article className="border-4 border-black p-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0 w-full md:w-64 h-64 bg-gray-200 border-2 border-black flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-10 h-10"
                >
                  <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                  <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                </svg>
              </div>
              <div className="text-xs font-bold">FEATURED</div>
            </div>
          </div>
          <div className="flex-1">
            <div className="text-xs font-bold uppercase tracking-wider mb-2 text-red-600">
              Latest Episode
            </div>
            <h3 className="font-serif text-3xl md:text-4xl font-bold mb-3">
              <span className="highlight-yellow">
                The Truth About Truth: Why Real Stories Matter
              </span>
            </h3>
            <p className="font-serif text-lg text-gray-700 leading-relaxed mb-4">
              In this special episode, we sit down with community members to
              discuss why authentic journalism matters. From the barber to the
              teacher, hear why people crave real news from real sources.
            </p>
            <div className="flex items-center gap-4 text-sm font-serif text-gray-600 mb-4">
              <span>Episode 43</span>
              <span>•</span>
              <span>62 min</span>
              <span>•</span>
              <span>Today</span>
            </div>
            <button className="border-2 border-black px-6 py-3 font-bold hover:bg-black hover:text-white transition-colors">
              LISTEN NOW
            </button>
          </div>
        </div>
      </article>

      {/* Recent Episodes */}
      <div>
        <h3 className="font-serif text-2xl font-bold mb-6 border-b-2 border-black pb-2">
          Recent Episodes
        </h3>
        <div className="space-y-6">
          {podcasts.map((podcast) => (
            <article
              key={podcast.id}
              className="border-2 border-black p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-32 h-32 bg-gray-200 border border-black flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-12 h-12"
                  >
                    <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                    <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold uppercase tracking-wider mb-2">
                    {podcast.category}
                  </div>
                  <h4 className="font-serif text-2xl font-bold mb-2">
                    {podcast.title}
                  </h4>
                  <p className="font-serif text-gray-700 mb-3">
                    {podcast.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm font-serif text-gray-600">
                    <span>{podcast.episode}</span>
                    <span>•</span>
                    <span>{podcast.duration}</span>
                    <span>•</span>
                    <span>{podcast.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Subscribe Section */}
      <div className="border-4 border-black p-8 bg-gray-50">
        <h3 className="font-serif text-3xl font-bold mb-4">
          Subscribe to Our Podcast
        </h3>
        <p className="font-serif text-lg text-gray-700 mb-6">
          Never miss an episode. Get real stories delivered to your favorite
          podcast app.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="border-2 border-black p-3 font-bold hover:bg-black hover:text-white transition-colors">
            Apple Podcasts
          </button>
          <button className="border-2 border-black p-3 font-bold hover:bg-black hover:text-white transition-colors">
            Spotify
          </button>
          <button className="border-2 border-black p-3 font-bold hover:bg-black hover:text-white transition-colors">
            Google Podcasts
          </button>
          <button className="border-2 border-black p-3 font-bold hover:bg-black hover:text-white transition-colors">
            RSS Feed
          </button>
        </div>
      </div>
    </div>
  );
}
