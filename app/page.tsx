import { Metadata } from "next"
import { Button } from "../components/Button/Button"
// Removed unused import

export const metadata: Metadata = {
  title: "NuWorld Agency | AI-Driven Organic Growth & Marketing Automation",
  description: "Unlock exponential organic growth with NuWorld Agency. We use cutting-edge AI for marketing automation, SEO, content creation, and competitive analysis. Get your free AI growth audit!",
  keywords: "AI marketing agency, organic growth, marketing automation, SEO, content creation, competitive analysis, AI solutions, digital marketing",
  twitter: {
    card: "summary_large_image",
    title: "NuWorld Agency | AI-Driven Organic Growth & Marketing Automation",
    description: "Unlock exponential organic growth with NuWorld Agency. We use cutting-edge AI for marketing automation, SEO, content creation, and competitive analysis. Get your free AI growth audit!"
  },
  openGraph: {
    url: "https://nuworld.site/",
    title: "NuWorld Agency | AI-Driven Organic Growth & Marketing Automation",
    description: "Unlock exponential organic growth with NuWorld Agency. We use cutting-edge AI for marketing automation, SEO, content creation, and competitive analysis. Get your free AI growth audit!",
    images: [
      {
        width: 1200,
        height: 630,
        url: "https://nuworld.site/images/nuworld-og-image.png",
        alt: "NuWorld Agency - AI-Driven Organic Growth"
      },
    ],
    type: "website",
    locale: "en_US"
  },
}

export default function Web() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto grid max-w-screen-xl px-4 py-12 text-center lg:py-20">
          <div className="mx-auto place-self-center">
            <h1 className="mb-4 max-w-3xl text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl xl:text-6xl">
              Unlock Exponential Organic Growth with AI
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-600 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              Stop Drowning in Manual Marketing Tasks. NuWorld Agency Leverages Cutting-Edge AI to Drive Sustainable, Predictable Organic Traffic and Conversions.
            </p>
            <p className="mb-8 max-w-2xl font-light text-gray-600 dark:text-gray-400 md:text-lg">
              In today&apos;s fast-paced digital landscape, traditional marketing methods struggle to keep up. NuWorld Agency is different. We are an AI-powered marketing agency specializing in supercharging your organic growth through intelligent automation, data-driven insights, and hyper-efficient workflows. Get ready to scale faster, understand your market deeper, and achieve unparalleled ROI.
            </p>
            <Button href="/contact" className="mr-3">
              Get Your Free AI Growth Audit
            </Button>
            <Button
              href="/case-studies"
              intent="secondary"
            >
              See Our Results
            </Button>
          </div>
        </div>
      </section>

      {/* Problem/Solution Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              The Challenge of Organic Growth in a Manual World
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Are you struggling with:
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Slow Growth</h3>
              <p className="text-gray-600 dark:text-gray-400">Slow and inconsistent organic traffic growth that fails to meet your business objectives.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Time-Consuming Tasks</h3>
              <p className="text-gray-600 dark:text-gray-400">Manual marketing tasks that drain resources and prevent your team from focusing on strategy.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Competitive Blindspots</h3>
              <p className="text-gray-600 dark:text-gray-400">Lack of clear insights into competitor strategies and market positioning.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Content Challenges</h3>
              <p className="text-gray-600 dark:text-gray-400">Difficulty creating and optimizing high-performing content at scale.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Social Media Inefficiency</h3>
              <p className="text-gray-600 dark:text-gray-400">Inefficient social media management and content repurposing across platforms.</p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Your AI-Powered Solution: NuWorld Agency
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              We transform your organic marketing challenges into opportunities. By harnessing the power of Artificial Intelligence, NuWorld Agency delivers:
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Accelerated Growth</h3>
              <p className="text-gray-600 dark:text-gray-400">Accelerated and sustainable organic traffic increases through AI-powered optimization.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Efficiency Gains</h3>
              <p className="text-gray-600 dark:text-gray-400">Massive efficiency gains through marketing automation that frees up your team&apos;s time.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Competitive Intelligence</h3>
              <p className="text-gray-600 dark:text-gray-400">Pinpoint accurate competitive and market intelligence to inform your strategy.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Quality Content</h3>
              <p className="text-gray-600 dark:text-gray-400">High-quality, optimized content created faster and cheaper with AI assistance.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Social Media Mastery</h3>
              <p className="text-gray-600 dark:text-gray-400">Streamlined, effective social media presence across platforms with AI-powered management.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-400">
              We build intelligent systems that work tirelessly to grow your online presence while you focus on your core business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white dark:bg-gray-900 py-12 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Our AI-Powered Organic Growth Services
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              NuWorld Agency offers a comprehensive suite of services designed to maximize your organic reach and impact using advanced AI:
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">AI Marketing Automation</h3>
              <p className="text-gray-600 dark:text-gray-400">Implement intelligent automation for email marketing, lead nurturing, customer journeys, and repetitive tasks. Streamline your operations and improve efficiency with AI-driven workflows.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">AI Competitive Analysis</h3>
              <p className="text-gray-600 dark:text-gray-400">Gain an unfair advantage with AI-speed analysis of your competitors&apos; organic strategies, backlink profiles, content performance, and market positioning. Uncover actionable insights to refine your own approach.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">AI-Assisted Content Creation</h3>
              <p className="text-gray-600 dark:text-gray-400">Produce high-performing, SEO-friendly content at scale. Our AI tools assist in generating blog posts, articles, ad copy, and social media updates, ensuring they are optimized for search engines and audience engagement.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">AI Social Media Management</h3>
              <p className="text-gray-600 dark:text-gray-400">Automate posting schedules for maximum reach, analyze social trends with AI, and intelligently repurpose your existing content into engaging formats tailored for each social platform.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Custom AI Automation Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400">Have a unique marketing challenge? We design and implement bespoke AI automation solutions to fit your specific needs, integrating tools and creating custom workflows that give you a competitive edge.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Predictive Organic Analytics</h3>
              <p className="text-gray-600 dark:text-gray-400">Leverage AI to analyze vast datasets and predict future organic search trends, customer behavior, and content performance. Stay ahead of the curve with data-driven forecasting and strategic adjustments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              Why Go AI with NuWorld Agency?
            </h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
              Our approach delivers measurable results through cutting-edge AI technology and marketing expertise.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Exponential Efficiency</h3>
              <p className="text-gray-600 dark:text-gray-400">Achieve more in less time with intelligent automation that multiplies your team&apos;s productivity.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Data-Driven Precision</h3>
              <p className="text-gray-600 dark:text-gray-400">Make informed decisions based on rapid, AI-powered analysis of vast datasets and market trends.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Scalable Growth</h3>
              <p className="text-gray-600 dark:text-gray-400">Our AI solutions grow with your business, delivering consistent results as you expand and evolve.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Reduced Costs</h3>
              <p className="text-gray-600 dark:text-gray-400">Achieve the same or better results than traditional methods at a lower operational cost through AI efficiency.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Innovative Advantage</h3>
              <p className="text-gray-600 dark:text-gray-400">Stay ahead of the competition by leveraging the latest in AI marketing technology before they do.</p>
            </div>

            <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-blue-700 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">Dedicated Expertise</h3>
              <p className="text-gray-600 dark:text-gray-400">Our team combines marketing strategy with AI implementation know-how for a seamless experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="bg-white dark:bg-gray-900 py-12 lg:py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Results Speak Louder
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-2">E-commerce Client</h3>
              <p className="text-2xl font-bold mb-2">+143%</p>
              <p className="text-gray-600 dark:text-gray-400">Increased organic traffic in just 3 months with AI-optimized content.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-2">SaaS Company</h3>
              <p className="text-2xl font-bold mb-2">-68%</p>
              <p className="text-gray-600 dark:text-gray-400">Reduced content creation time while boosting engagement by 45%.</p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-primary-700 dark:text-primary-400 mb-2">Financial Services</h3>
              <p className="text-2xl font-bold mb-2">+89%</p>
              <p className="text-gray-600 dark:text-gray-400">Increase in AI-driven lead conversions with automated nurturing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-700 dark:bg-primary-800 py-12 lg:py-20">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Ready to Transform Your Organic Growth?
          </h2>
          <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl">
            Stop guessing and start growing predictably with the power of AI. Let NuWorld Agency build your engine for organic success.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
            <Button href="/contact" className="bg-white text-primary-700 hover:bg-gray-100">
              Schedule Your Free Consultation
            </Button>
            <Button
              href="/resources"
              intent="secondary"
              className="border-white text-white hover:bg-primary-800"
            >
              Download Our AI Growth Guide
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-12 lg:py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-4xl">
            Get in Touch
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Let&apos;s discuss how AI-driven organic growth can revolutionize your marketing.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-8 sm:space-y-0">
            <div>
              <h3 className="text-lg font-bold mb-2">Email</h3>
              <p className="text-gray-600 dark:text-gray-400">hello@nuworld.site</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Phone</h3>
              <p className="text-gray-600 dark:text-gray-400">(555) 123-4567</p>
            </div>
            <div>
              <Button href="/contact" className="bg-primary-700 text-white hover:bg-primary-800">
                Contact Form
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
