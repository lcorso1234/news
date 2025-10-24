export default function Home() {
  return (
    <div className="space-y-12">
      {/* Category Header */}
      <div className="border-b-4 border-black pb-8">
        <div className="text-xs font-bold uppercase tracking-wider mb-2 text-gray-600">
          CATEGORY
        </div>
        <h2 className="font-serif text-5xl md:text-6xl font-bold mb-4">
          <span className="highlight">Daily Life</span>
        </h2>
        <p className="font-serif text-lg text-gray-700 leading-relaxed">
          Real stories from everyday people navigating the moments that matter.
          From morning commutes to family dinners, we capture the authentic
          experiences that define our daily existence.
        </p>
      </div>

      {/* Featured Stories */}
      <section>
        <div className="border-l-4 border-black pl-6 mb-6">
          <h3 className="font-serif text-3xl font-bold mb-2">
            Featured Stories
          </h3>
          <p className="text-sm text-gray-600 font-serif italic">
            TODAY'S TOP DAILY LIFE STORIES
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="border-2 border-black p-6 hover:shadow-lg transition-shadow">
            <div className="text-xs font-bold uppercase tracking-wider mb-2">
              Community Voice
            </div>
            <h4 className="font-serif text-2xl font-bold mb-3">
              <span className="highlight">
                The Morning Commute: Stories from the 6 AM Train
              </span>
            </h4>
            <p className="font-serif text-gray-700 leading-relaxed mb-4">
              Every morning, thousands of people board the same train. We spoke
              to regular commuters about their daily routines, dreams, and the
              small moments that make life worth living. From the coffee vendor
              to the college student, these are the voices that matter.
            </p>
            <div className="text-sm text-gray-600 font-serif">
              By Maria Chen • 15 minutes ago
            </div>
          </article>

          <article className="border-2 border-black p-6 hover:shadow-lg transition-shadow">
            <div className="text-xs font-bold uppercase tracking-wider mb-2">
              Local Impact
            </div>
            <h4 className="font-serif text-2xl font-bold mb-3">
              <span className="highlight-lime">
                Corner Store Owner Reflects on 30 Years of Neighborhood Changes
              </span>
            </h4>
            <p className="font-serif text-gray-700 leading-relaxed mb-4">
              Mrs. Rodriguez has been running the same corner store for three
              decades. She's witnessed the neighborhood transform, seen children
              grow into parents, and remained a constant in an ever-changing
              community. Her story is everyone's story.
            </p>
            <div className="text-sm text-gray-600 font-serif">
              By James O'Brien • 1 hour ago
            </div>
          </article>
        </div>
      </section>

      {/* Community Voices */}
      <section>
        <div className="border-l-4 border-black pl-6 mb-6">
          <h3 className="font-serif text-3xl font-bold mb-2">
            Community Voices
          </h3>
          <p className="text-sm text-gray-600 font-serif italic">
            PERSPECTIVES FROM YOUR NEIGHBORS
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="border-2 border-black p-6 hover:shadow-lg transition-shadow">
            <div className="text-xs font-bold uppercase tracking-wider mb-2">
              Straight Talk
            </div>
            <h4 className="font-serif text-2xl font-bold mb-3">
              <span className="highlight-yellow">
                "Why Should I Care About Celebrity Drama?"
              </span>
            </h4>
            <p className="font-serif text-gray-700 leading-relaxed mb-4">
              Local teacher Amanda Brooks speaks for millions when she says
              she's tired of manufactured outrage and celebrity feuds. "I've got
              bills to pay and kids to feed," she says. "The real world is
              happening right here, right now."
            </p>
            <div className="text-sm text-gray-600 font-serif">
              By David Kim • 2 hours ago
            </div>
          </article>

          <article className="border-2 border-black p-6 hover:shadow-lg transition-shadow">
            <div className="text-xs font-bold uppercase tracking-wider mb-2">
              Reality Check
            </div>
            <h4 className="font-serif text-2xl font-bold mb-3">
              <span className="highlight-green">
                Construction Worker: "We're Building Your City, But Nobody
                Notices"
              </span>
            </h4>
            <p className="font-serif text-gray-700 leading-relaxed mb-4">
              Mike Santos has worked construction for 15 years. While others
              scroll through sensational headlines, he and his crew are up at
              dawn, building the infrastructure that keeps the city running.
              "Real work deserves real recognition," he says.
            </p>
            <div className="text-sm text-gray-600 font-serif">
              By Sarah Thompson • 3 hours ago
            </div>
          </article>
        </div>
      </section>

      {/* Quick Reads */}
      <section>
        <div className="border-l-4 border-black pl-6 mb-6">
          <h3 className="font-serif text-3xl font-bold mb-2">Quick Reads</h3>
          <p className="text-sm text-gray-600 font-serif italic">
            BITE-SIZED DAILY LIFE STORIES
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="border border-black p-4 hover:shadow-lg transition-shadow">
            <h4 className="font-serif text-xl font-bold mb-2">
              The Art of the Home-Cooked Meal
            </h4>
            <p className="font-serif text-sm text-gray-700 mb-2">
              In an age of delivery apps, families still gather around the
              dinner table. We explore why.
            </p>
            <div className="text-xs text-gray-600 font-serif">5 hours ago</div>
          </article>

          <article className="border border-black p-4 hover:shadow-lg transition-shadow">
            <h4 className="font-serif text-xl font-bold mb-2">
              Parks and Recreation: Where Communities Connect
            </h4>
            <p className="font-serif text-sm text-gray-700 mb-2">
              The local park remains the heart of neighborhood life, from dawn
              joggers to sunset picnics.
            </p>
            <div className="text-xs text-gray-600 font-serif">6 hours ago</div>
          </article>

          <article className="border border-black p-4 hover:shadow-lg transition-shadow">
            <h4 className="font-serif text-xl font-bold mb-2">
              Small Businesses, Big Impact
            </h4>
            <p className="font-serif text-sm text-gray-700 mb-2">
              Local entrepreneurs share how they're keeping their dreams alive
              in challenging times.
            </p>
            <div className="text-xs text-gray-600 font-serif">8 hours ago</div>
          </article>
        </div>
      </section>

      {/* Latest from Daily Life */}
      <section>
        <div className="border-l-4 border-black pl-6 mb-6">
          <h3 className="font-serif text-3xl font-bold mb-2">
            Latest from Daily Life
          </h3>
          <p className="text-sm text-gray-600 font-serif italic">
            JUST PUBLISHED
          </p>
        </div>
        <div className="space-y-4">
          <article className="flex gap-4 p-4 border-b-2 border-gray-300 hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 w-32 h-32 bg-gray-200 border border-black"></div>
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-wider mb-1">
                Breaking
              </div>
              <h4 className="font-serif text-xl font-bold mb-2">
                Local Library Expansion Approved After Years of Community
                Advocacy
              </h4>
              <p className="font-serif text-sm text-gray-700 mb-2">
                After three years of petition drives and town halls, the
                community's efforts have paid off. The library will double in
                size, adding a children's reading room and technology center.
              </p>
              <div className="text-xs text-gray-600 font-serif">Just now</div>
            </div>
          </article>

          <article className="flex gap-4 p-4 border-b-2 border-gray-300 hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 w-32 h-32 bg-gray-200 border border-black"></div>
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-wider mb-1">
                Community
              </div>
              <h4 className="font-serif text-xl font-bold mb-2">
                Retired Teacher Starts Free Tutoring Program in Community Center
              </h4>
              <p className="font-serif text-sm text-gray-700 mb-2">
                Every Tuesday and Thursday, Mr. Patterson opens his makeshift
                classroom to any student who needs help. "Education should be
                accessible to everyone," he insists.
              </p>
              <div className="text-xs text-gray-600 font-serif">
                30 minutes ago
              </div>
            </div>
          </article>

          <article className="flex gap-4 p-4 hover:bg-gray-50 transition-colors">
            <div className="flex-shrink-0 w-32 h-32 bg-gray-200 border border-black"></div>
            <div className="flex-1">
              <div className="text-xs font-bold uppercase tracking-wider mb-1">
                Daily Life
              </div>
              <h4 className="font-serif text-xl font-bold mb-2">
                The Return of the Block Party: Neighbors Reconnecting
                Post-Pandemic
              </h4>
              <p className="font-serif text-sm text-gray-700 mb-2">
                Streets are filling with folding tables, grills, and laughter as
                communities rediscover the joy of gathering together. It's more
                than a party—it's a revival.
              </p>
              <div className="text-xs text-gray-600 font-serif">1 hour ago</div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
