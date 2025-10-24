import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      slug: "lost-art-of-conversation",
      title: "The Lost Art of Conversation",
      author: "Emily Harrison",
      date: "October 24, 2025",
      category: "Daily Life",
      excerpt:
        "In a world dominated by screens and notifications, the simple act of face-to-face conversation is becoming rare. We explore why talking matters more than ever.",
      readTime: "5 min read",
    },
    {
      id: 2,
      slug: "local-journalism-matters",
      title: "Why Local Journalism Still Matters",
      author: "Robert Chen",
      date: "October 23, 2025",
      category: "Opinion",
      excerpt:
        "National headlines grab attention, but it's local news that impacts your daily life. Here's why supporting community journalism is crucial.",
      readTime: "7 min read",
    },
    {
      id: 3,
      slug: "weekly-shop-tradition",
      title: "The Weekly Shop: A Dying Tradition?",
      author: "Sarah Martinez",
      date: "October 22, 2025",
      category: "Daily Life",
      excerpt:
        "Online delivery has changed how we shop for groceries, but many still value the ritual of the weekly market visit. We examine why.",
      readTime: "6 min read",
    },
    {
      id: 4,
      slug: "community-gardens",
      title: "Community Gardens: More Than Just Vegetables",
      author: "David Thompson",
      date: "October 21, 2025",
      category: "Community",
      excerpt:
        "Local community gardens are sprouting up across neighborhoods, offering more than fresh produce—they're building connections.",
      readTime: "8 min read",
    },
    {
      id: 5,
      slug: "commute-chronicles",
      title: "The Commute Chronicles: Stories from the Road",
      author: "Lisa Wong",
      date: "October 20, 2025",
      category: "Daily Life",
      excerpt:
        "Your daily commute might feel mundane, but it's filled with untold stories. We collected narratives from regular travelers.",
      readTime: "10 min read",
    },
    {
      id: 6,
      slug: "small-town-big-heart",
      title: "Small Town, Big Heart: Profile of Rural America",
      author: "Michael O'Brien",
      date: "October 19, 2025",
      category: "Features",
      excerpt:
        "Beyond the headlines about urban centers, small towns continue to thrive with their own unique character and resilient communities.",
      readTime: "12 min read",
    },
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b-4 border-black pb-6">
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          The Daily Truth Blog
        </h2>
        <p className="font-serif text-lg text-gray-700">
          Thoughtful perspectives on daily life, community, and what really
          matters
        </p>
      </div>

      {/* Featured Post */}
      <article className="border-4 border-black p-8">
        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-red-600">
          Featured Story
        </div>
        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-4">
          <span className="highlight">
            The Neighborhood Barber: 40 Years of Stories and Haircuts
          </span>
        </h3>
        <p className="font-serif text-lg text-gray-700 leading-relaxed mb-4">
          For four decades, Tony's Barbershop has been more than a place to get
          a haircut. It's been a confessional, a community center, and a living
          archive of neighborhood history. We spent a week there to understand
          why this small business matters so much.
        </p>
        <div className="flex items-center gap-4 text-sm font-serif text-gray-600">
          <span>By Marcus Rodriguez</span>
          <span>•</span>
          <span>October 24, 2025</span>
          <span>•</span>
          <span>15 min read</span>
        </div>
      </article>

      {/* Blog Posts Grid */}
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="block border-2 border-black p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0 w-full md:w-48 h-48 bg-gray-200 border border-black"></div>
              <div className="flex-1">
                <div className="text-xs font-bold uppercase tracking-wider mb-2">
                  {post.category}
                </div>
                <h3 className="font-serif text-2xl font-bold mb-3 hover:text-gray-700 transition-colors">
                  {post.title}
                </h3>
                <p className="font-serif text-gray-700 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm font-serif text-gray-600">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Categories Sidebar */}
      <div className="border-t-2 border-black pt-8">
        <h3 className="font-serif text-2xl font-bold mb-6">Browse by Topic</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-colors cursor-pointer">
            <div className="font-serif font-bold">Daily Life</div>
            <div className="text-sm">42 articles</div>
          </div>
          <div className="border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-colors cursor-pointer">
            <div className="font-serif font-bold">Community</div>
            <div className="text-sm">28 articles</div>
          </div>
          <div className="border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-colors cursor-pointer">
            <div className="font-serif font-bold">Opinion</div>
            <div className="text-sm">35 articles</div>
          </div>
          <div className="border-2 border-black p-4 text-center hover:bg-black hover:text-white transition-colors cursor-pointer">
            <div className="font-serif font-bold">Features</div>
            <div className="text-sm">19 articles</div>
          </div>
        </div>
      </div>
    </div>
  );
}
