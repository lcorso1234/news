import Link from "next/link";
import { useRouter } from "next/router";

const blogPosts = {
  "lost-art-of-conversation": {
    title: "The Lost Art of Conversation",
    author: "Emily Harrison",
    date: "October 24, 2025",
    category: "Daily Life",
    readTime: "5 min read",
    content: `In a world dominated by screens and notifications, the simple act of face-to-face conversation is becoming rare. We explore why talking matters more than ever.

The coffee shop on Main Street used to buzz with conversation. Now, it's filled with the quiet tapping of keyboards and the glow of smartphone screens. When did we stop talking to each other?

## The Decline of Face-to-Face Interaction

Recent studies show that the average person spends less than 30 minutes per day in meaningful face-to-face conversation with friends or family. Compare that to the 4+ hours we spend on our devices, and the picture becomes clear: we're losing the art of conversation.

## Why It Matters

Real conversations build empathy. They teach us to read body language, understand tone, and connect on a human level. Text messages and social media posts can't replicate the warmth of a genuine smile or the comfort of a friend's presence during difficult times.

## Reclaiming Connection

Communities across the country are fighting back. From "phone-free Fridays" to neighborhood conversation circles, people are rediscovering the joy of talking—really talking—to each other.

The solution isn't to abandon technology. It's to remember that the best connections happen when we look up from our screens and into each other's eyes.`,
  },
  "local-journalism-matters": {
    title: "Why Local Journalism Still Matters",
    author: "Robert Chen",
    date: "October 23, 2025",
    category: "Opinion",
    readTime: "7 min read",
    content: `National headlines grab attention, but it's local news that impacts your daily life. Here's why supporting community journalism is crucial.

When the local newspaper closed its doors last year, something fundamental changed in our town. We lost more than just a publication—we lost our collective memory, our town square, our accountability.

## The Crisis

Across America, local newspapers are disappearing at an alarming rate. More than 2,000 have closed since 2004, leaving entire communities in "news deserts" with no professional journalism coverage.

## What We Lose

Without local journalism, who covers the city council meetings? Who investigates local corruption? Who tells the stories of everyday heroes in our community? The answer, increasingly, is no one.

## The Path Forward

Supporting local journalism isn't charity—it's an investment in democracy and community. Subscribe to your local paper. Share their stories. Attend community meetings. The future of local news depends on all of us.`,
  },
  "weekly-shop-tradition": {
    title: "The Weekly Shop: A Dying Tradition?",
    author: "Sarah Martinez",
    date: "October 22, 2025",
    category: "Daily Life",
    readTime: "6 min read",
    content: `Online delivery has changed how we shop for groceries, but many still value the ritual of the weekly market visit. We examine why.

Saturday morning at the farmer's market. The smell of fresh bread, the vibrant colors of produce, the friendly banter with vendors—these are experiences that no app can replicate.

## The Convenience Revolution

There's no denying the appeal of grocery delivery. With a few taps, your weekly groceries arrive at your door. No parking hassles, no crowds, no carrying heavy bags.

## What We're Missing

But something is lost in the transaction. The accidental conversations with neighbors. The discovery of a new seasonal fruit. The relationship with the butcher who knows your family's preferences.

## A Balanced Approach

Perhaps the answer isn't choosing between convenience and connection, but finding a balance. Use delivery services when life gets hectic, but make time for the weekly market visit—not just as a chore, but as a ritual that connects us to our food and our community.`,
  },
};

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto py-16">
        <h1 className="font-serif text-4xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog" className="text-blue-600 hover:underline font-serif">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Back Link */}
      <Link
        href="/blog"
        className="inline-block mb-8 text-sm font-bold hover:underline"
      >
        ← BACK TO BLOG
      </Link>

      {/* Article Header */}
      <article className="border-4 border-black p-8 mb-8">
        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-red-600">
          {post.category}
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
          <span className="highlight">{post.title}</span>
        </h1>
        <div className="flex items-center gap-4 text-sm font-serif text-gray-600 mb-6 pb-6 border-b-2 border-gray-300">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none font-serif">
          {post.content.split("\n\n").map((paragraph, index) => {
            if (paragraph.startsWith("## ")) {
              return (
                <h2
                  key={index}
                  className="font-serif text-2xl font-bold mt-8 mb-4"
                >
                  {paragraph.replace("## ", "")}
                </h2>
              );
            }
            return (
              <p key={index} className="mb-4 leading-relaxed text-gray-800">
                {paragraph}
              </p>
            );
          })}
        </div>
      </article>

      {/* Share Section */}
      <div className="border-2 border-black p-6 mb-8">
        <h3 className="font-serif text-xl font-bold mb-4">Share This Story</h3>
        <div className="flex gap-4">
          <button className="border-2 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors">
            Twitter
          </button>
          <button className="border-2 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors">
            Facebook
          </button>
          <button className="border-2 border-black px-4 py-2 font-bold hover:bg-black hover:text-white transition-colors">
            Email
          </button>
        </div>
      </div>

      {/* Back to Blog Link */}
      <div className="text-center py-8">
        <Link
          href="/blog"
          className="inline-block border-2 border-black px-8 py-3 font-bold hover:bg-black hover:text-white transition-colors"
        >
          READ MORE STORIES
        </Link>
      </div>
    </div>
  );
}
