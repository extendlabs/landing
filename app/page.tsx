import HeroSection from "@/components/hero-section";
import ProjectsSection from "@/components/projects-section";
import Footer from "@/components/footer";
// import FeaturesSection from "@/components/features-section";
import TeamSection from "@/components/team-section";

export default function Home() {
	return (
		<main className="font-sans items-center justify-items-center min-h-screen pb-20 gap-16 ">
			<HeroSection />
			{/* <FeaturesSection /> */}
			<ProjectsSection />
			<TeamSection />
			<Footer />
		</main>
	);
}
