import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const members = [
	{
		src: "https://avatars.githubusercontent.com/u/118986014?v=4",
		name: "Karol Rynkowski",
		role: "Co-Founder",
		description:
			"Frontend Developer passionate about building innovative solutions and leading teams to success. Expert in product strategy and user experience.",
	},
	{
		src: "https://avatars.githubusercontent.com/u/58517152?v=4",
		name: "Krzysztof Wicki",
		role: "Co-Founder",
		description:
			"Frontend Developer with a focus on scalable architecture and modern development practices. Loves solving complex problems.",
	},
	{
		src: "https://avatars.githubusercontent.com/u/68607232?v=4",
		name: "Szymon Kowalski",
		role: "Python Fullstack",
		description:
			"Python Fullstack developer specializing in building robust applications. Always learning and improving.",
	},
	{
		src: "https://avatars.githubusercontent.com/u/58122120?v=4",
		name: "TWokulski",
		role: "Python Fullstack AI",
		description:
			"Python Fullstack AI engineer with expertise in building robust applications. Passionate about clean code and best practices.",
	},
];

export default function TeamSection() {
	return (
		<section className="w-full py-32 lg:py-40 max-w-7xl mx-auto px-6 lg:px-8" id="team">
			<div className="mx-auto w-full max-w-7xl">
				<div className="mb-16 text-center">
					<span className="uppercase text-sm font-medium text-muted-foreground tracking-wider">
						Team
					</span>
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 mt-4 tracking-tight">
						Meet Our Team
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
						Our talented professionals bring diverse expertise and passion to every project.
						Together, we collaborate to deliver exceptional results and innovative solutions for our
						clients.
					</p>
				</div>

				<div className="sm:grid-cols-2 xl:grid-cols-2 grid gap-8">
					{members.map((member, index) => (
						<div
							key={index}
							className="group flex items-center gap-4 p-6 rounded-2xl border border-border bg-card hover:border-primary/20 transition-colors cursor-pointer"
						>
							<Avatar className="size-14 border border-border rounded-full">
								<AvatarImage src={member.src} alt={member.name} />
								<AvatarFallback className="rounded-full">{member.name.charAt(0)}</AvatarFallback>
							</Avatar>

							<div className="flex-1 min-w-0">
								<div className="text-foreground font-semibold text-lg mb-1">{member.name}</div>
								<div className="text-muted-foreground text-base mb-2">{member.role}</div>
								<div className="text-muted-foreground text-sm">{member.description}</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
