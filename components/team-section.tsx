import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const members = [
	{
		src: "https://avatars.githubusercontent.com/u/118986014?v=4",
		name: "rynkovski",
		role: "Co-Founder & Frontend Engineer",
	},
	{
		src: "https://avatars.githubusercontent.com/u/58517152?v=4",
		name: "kicky",
		role: "Co-Founder & Frontend Engineer",
	},
	{
		src: "https://avatars.githubusercontent.com/u/68607232?v=4",
		name: "szkmk",
		role: "Backend Engineer",
	},
	{
		src: "https://avatars.githubusercontent.com/u/58122120?v=4",
		name: "TWokulski",
		role: "Backend Engineer",
	},
];

export default function TeamSection() {
	return (
		<section className="w-full py-24 lg:py-28 max-w-5xl mx-auto px-8" id="team">
			<div className="py-24">
				<div className="mx-auto w-full max-w-5xl px-6">
					<div className="mb-12">
						<span className="uppercase text-sm font-medium text-muted-foreground ">Team</span>
						<h2 className="text-4xl md:text-5xl font-semibold mb-4">Meet Our Team</h2>
						<p className="text-muted-foreground my-4 text-balance text-lg">
							Our talented professionals bring diverse expertise and passion to every project.
							<br />
							Together, we collaborate to deliver exceptional results and innovative solutions for
							our clients.
						</p>
					</div>

					<div className="sm:grid-cols-2 xl:grid-cols-2 grid gap-6 md:gap-y-10">
						{members.map((member, index) => (
							<div key={index} className="grid grid-cols-[auto_1fr] items-center gap-3">
								<Avatar className="rounded-(--radius) ring-foreground/10 size-10 border border-transparent shadow ring-1">
									<AvatarImage src={member.src} alt={member.name} />
									<AvatarFallback className="rounded-(--radius)">
										{member.name.charAt(0)}
									</AvatarFallback>
								</Avatar>

								<div>
									<span className="text-foreground font-medium">{member.name}</span>
									<div className="text-muted-foreground text-sm">{member.role}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
