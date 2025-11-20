import Image from "next/image";

const members = [
  {
    src: "/user_1.webp",
    name: "Karol Rynkowski",
    role: "Co-Founder",
  },
  {
    src: "/user_2.webp",
    name: "Krzysztof Wicki",
    role: "Co-Founder",
  },
  {
    src: "/user_3.webp",
    name: "Szymon Kowalski",
    role: "Python Fullstack",
  },
];

export default function TeamSection() {
  return (
    <section
      className="w-full py-32 lg:py-40 max-w-7xl mx-auto px-6 lg:px-8"
      id="projects"
    >
      <div className="text-center mb-12">
        <div className="mb-16 text-center flex flex-col items-center justify-center">
          <span className="uppercase text-sm font-medium text-muted-foreground tracking-wider">
            Team
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 mt-4 tracking-tight">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Our talented professionals bring diverse expertise and passion to
            every project. Together, we collaborate to deliver exceptional
            results and innovative solutions for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="relative w-full max-w-72 aspect-square mb-4 rounded-lg overflow-hidden">
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-foreground font-semibold text-lg mb-1">
                {member.name}
              </div>
              <div className="text-muted-foreground text-base">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
