"use client"

interface ShareButtonsProps {
  post: {
    title: string
    image: string
  }
}

export default function ShareButtons({
  post,
}: ShareButtonsProps) {
  const currentUrl =
    typeof window !== "undefined"
      ? window.location.href
      : ""

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <button
        onClick={() => {
          window.open(
            `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
              currentUrl
            )}&media=${encodeURIComponent(
              post.image
            )}&description=${encodeURIComponent(post.title)}`,
            "_blank",
            "width=750,height=600"
          )
        }}
        className="rounded-full border border-border px-4 py-2 transition-colors hover:bg-secondary"
      >
        Pinterest
      </button>

      <button
        onClick={() => {
          window.open(
            `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              currentUrl
            )}`,
            "_blank",
            "width=600,height=400"
          )
        }}
        className="rounded-full border border-border px-4 py-2 transition-colors hover:bg-secondary"
      >
        Facebook
      </button>

      <button
        onClick={() => {
          window.open(
            `https://twitter.com/intent/tweet?url=${encodeURIComponent(
              currentUrl
            )}&text=${encodeURIComponent(post.title)}`,
            "_blank",
            "width=600,height=400"
          )
        }}
        className="rounded-full border border-border px-4 py-2 transition-colors hover:bg-secondary"
      >
        X
      </button>

      <button
        onClick={() => {
          navigator.clipboard.writeText(currentUrl)
        }}
        className="rounded-full border border-border px-4 py-2 transition-colors hover:bg-secondary"
      >
        Copy Link
      </button>
    </div>
  )
}
