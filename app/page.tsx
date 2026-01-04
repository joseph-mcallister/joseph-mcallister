import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black font-mono p-8 max-w-3xl mx-auto">
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-2">Joseph McAllister</h1>
        <p className="text-lg">ML & Software Engineer | Brooklyn, NY</p>
      </header>

      <main className="space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">About Me</h2>
          <p>I&apos;m currently building something new and will be in the Bay Area through April 2026 👀</p>
          <p>In my free time, I enjoy playing Padel, guitar, reading, and building things.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">Experience</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Coinbase: Senior ML Engineer on the ML Platform team</li>
            <li>Microsoft: Software Engineer working on Azure Data Factory</li>
            <li>Roo Storage: Founder, <Link href="https://www.bizjournals.com/stlouis/news/2020/06/16/st-louis-tech-startup-backed-by-one-of-the-regi.html" className="underline" target="_blank" rel="noopener noreferrer">exited</Link></li>
            <li>Cornell University: Computer Science, Varsity Tennis</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">Recent Projects</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              A simple browser-based game inspired by the Wikipedia Game: <Link href="https://llmgame.ai" className="underline" target="_blank" rel="noopener noreferrer">
                llmgame.ai
              </Link>
              <ul className="list-disc list-inside ml-6 mt-1">
                <li>
                  And for when my credits are out, a version that runs entirely in the browser using a 0.5B fine-tuned LLM: <Link href="https://llmgame.ai/?useLocal=true" className="underline" target="_blank" rel="noopener noreferrer">
                    llmgame.ai/?useLocal=true
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="https://www.coinbase.com/blog/how-coinbase-builds-sequence-features-for-machine-learning" className="underline" target="_blank" rel="noopener noreferrer">
                How Coinbase Builds Sequence Features for Machine Learning
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">How I Learned to Code</h2>
          <p className="mb-4">I love building things, which started with a few projects in high school and college:</p>
          <ul className="list-disc list-inside space-y-2">
            <li>Bachbot, my first ever program that generated a Bach chorale submitted for my AP Music Theory final project</li>
            <li>Built and sold 200 <Link href="https://arvr.google.com/cardboard/" className="underline" target="_blank" rel="noopener noreferrer">Google Cardboards</Link> in high school</li>
            <li>A DIY solar-powered, night-vision trailcam running on a Raspberry Pi to capture wildlife at night</li>
            <li>Facial recognition program running on-device with a Raspberry Pi</li>
            <li>An ML model to predict professional tennis match outcomes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">Favorite Read</h2>
          <p>Ted Chiang&apos;s <i>A Story of Your Life and Others</i></p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b-2 border-black pb-2">Find Me Online</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <Link href="https://github.com/joseph-mcallister" className="underline" rel="noopener noreferrer">
                GitHub
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/joseph-mcallister/" className="underline" rel="noopener noreferrer">
                LinkedIn
              </Link>
            </li>
          </ul>
        </section>
      </main>

      <footer className="mt-12 text-center text-sm">
        © {new Date().getFullYear()} Joseph McAllister. All rights reserved.
      </footer>
    </div>
  )
}
