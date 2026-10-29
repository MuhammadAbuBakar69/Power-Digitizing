import type { SiteConfig } from "@/config/types";

export function Testimonials({ site }: { site?: SiteConfig }) {
  const trustpilotUrl = "https://www.trustpilot.com/review/powerdigitizing.com";

  return (
    <section id="testimonials" className="border-y border-border bg-card py-10 md:py-14">
      <div className="mx-auto max-w-6xl xl:max-w-7xl 2xl:max-w-[1440px] px-5 sm:px-6 lg:px-8 xl:px-10">
        <a
          href={trustpilotUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-center transition-all duration-200 hover:opacity-90"
          aria-label="View our 8,071 reviews on Trustpilot with a 4.1 out of 5 Great rating"
        >
          {/* "Our customers say" & "Great" */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-normal text-muted-foreground sm:text-base">
              Our customers say
            </span>
            <span className="text-base font-bold text-foreground sm:text-lg">
              Great
            </span>
          </div>

          {/* 5 Trustpilot Star Boxes (4 green, 1 light-gray for 4.1 score) */}
          <div className="flex items-center gap-1" aria-hidden="true">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex size-6 sm:size-7 items-center justify-center rounded-[2px] bg-[#00B67A]"
              >
                <svg
                  className="size-4 sm:size-4.5 fill-white text-white"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
            ))}
            {/* 5th Star box (light gray for 4.1 rating as in official widget) */}
            <div className="flex size-6 sm:size-7 items-center justify-center rounded-[2px] bg-[#DCDCE6]">
              <svg
                className="size-4 sm:size-4.5 fill-white text-white"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            </div>
          </div>

          {/* Rating score and review count */}
          <div className="text-sm font-medium text-foreground sm:text-base">
            <span>4.1 out of 5 based on </span>
            <span className="font-semibold underline decoration-muted-foreground/40 underline-offset-4 group-hover:decoration-foreground">
              8,071 reviews
            </span>
          </div>

          {/* Official Trustpilot Star & Wordmark */}
          <div className="flex items-center gap-1.5 pl-1">
            <svg
              className="size-5 sm:size-6"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M12 2l2.76 8.5H23.7l-7.23 5.25 2.76 8.5L12 18.99l-7.23 5.26 2.76-8.5L.3 10.5h8.94L12 2z"
                fill="#00B67A"
              />
              <path
                d="M14.76 10.5L12 2v16.99l7.23 5.26-2.76-8.5 7.23-5.25H14.76z"
                fill="#005128"
                opacity="0.3"
              />
            </svg>
            <span className="font-display text-base font-bold tracking-tight text-foreground sm:text-lg">
              Trustpilot
            </span>
          </div>
        </a>
      </div>
    </section>
  );
}
