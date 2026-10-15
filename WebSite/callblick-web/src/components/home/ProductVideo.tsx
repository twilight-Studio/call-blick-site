import { Play } from "lucide-react";

export default function ProductVideo() {
  return (
    <section id="product-demo" className="section-rule" data-reveal>
      <div className="page-shell py-20 lg:py-28">
        <div className="grid gap-8 lg:grid-cols-[0.6fr_1.4fr] lg:items-end">
          <div>
            <Play size={24} className="text-[var(--blue)]" aria-hidden="true" />
            <h2 className="display mt-5 text-4xl md:text-5xl">See the workflow in context.</h2>
            <p className="body-copy mt-5">Watch the CallBlick product overview, then bring your own call type and review questions to a focused demo.</p>
          </div>
          <div className="overflow-hidden border border-[var(--rule-strong)] bg-black">
            <div className="aspect-video">
              <iframe
                className="h-full w-full"
                src="https://www.youtube-nocookie.com/embed/hz358NwRWCw?rel=0&modestbranding=1&playsinline=1"
                title="CallBlick product overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
