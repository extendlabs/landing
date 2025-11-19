import HeroSection from "@/components/hero-section";
import StatsSection from "@/components/stats-section";
import TrustBadgesSection from "@/components/trust-badges-section";
import ProjectsSection from "@/components/projects-section";
import ProcessSection from "@/components/process-section";
import TestimonialsSection from "@/components/testimonials-section";
import TeamSection from "@/components/team-section";
import CTABanner from "@/components/cta-banner";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import FloatingCTA from "@/components/floating-cta";

export default function Home() {
	return (
		<main className="font-sans items-center justify-items-center min-h-screen">
			<HeroSection />
			<StatsSection />
			{/* <TrustBadgesSection /> */}
			<ProjectsSection />
			<ProcessSection />
			<TestimonialsSection />
			<TeamSection />
			<CTABanner />
			<ContactSection />
			<Footer />
			<FloatingCTA />
		</main>
	);
}
