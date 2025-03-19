export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Khethukuthula Simamane",
          url: "",
          sameAs: [
            "https://github.com/Khetha100",
            "https://www.linkedin.com/in/khethukuthula-simamane-67127a265/",
            "https://x.com/KSimamane37390"
          ],
          jobTitle: "Full Stack Developer",
          knowsAbout: ["Web Development", "Blockchain", "TypeScript", "React", "Next.js"],
          image: "/profile.jpg",
          description: "Full Stack Developer specializing in Next.js, TypeScript, and Blockchain development."
        })
      }}
    />
  );
} 