"use client";

import { FaBriefcase, FaGraduationCap, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const workExperience = [
	{
		title: "Front-End Developer & Web Developer",
		company: "Freelance",
		location: "Oran, Algeria",
		period: "2024 - Present",
		description: [
			"Création de sites web modernes avec Next.js et Tailwind CSS.",
			"Développement de composants UI interactifs avec un fort accent sur l’expérience utilisateur.",
			"Collaboration avec des clients pour concevoir des solutions sur mesure.",
			"Optimisation des performances web, du SEO et de l'accessibilité.",
		],
	},
	{
		title: "Founder & Developer",
		company: "TripDzAir (PFE Project)",
		location: "Oran, Algeria",
		period: "2025",
		description: [
			"Développement complet d’une plateforme touristique algérienne : réservation d’hôtels, restaurants, et activités.",
			"Conception de la base de données sous PostgreSQL avec Supabase.",
			"Intégration d’un système de gestion d'offres et de réservations multi-services.",
			"Déploiement du site et présentation du projet avec succès pour le mémoire de fin d’études.",
		],
	},
];

const education = [
	{
		degree: "Licence en Ingénierie des Systèmes d'Information et Génie Logiciel",
		institution: "Université des Sciences et de la Technologie d'Oran Mohamed Boudiaf (USTO-MB)",
		location: "Oran, Algeria",
		period: "2022 - 2025",
		description:
			"Formation approfondie en ingénierie des systèmes d'information et génie logiciel, avec spécialisation en développement web et conception de solutions informatiques. Participation active à divers projets académiques dont 'TripDzAir'.",
	},
];

export default function ExperienceSection() {
	return (
		<section id="experience" className="py-12 md:py-20 bg-muted/30">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12 md:mb-16">
					<h2 className="text-2xl sm:text-3xl font-bold mb-2 text-text-primary">
						Expérience & Formation
					</h2>
					<div className="h-1 w-16 sm:w-20 bg-primary mx-auto"></div>
					<p className="mt-4 text-sm sm:text-base text-text-secondary max-w-2xl mx-auto">
						Mon parcours professionnel et académique qui ont forgé mes compétences en
						développement web et gestion de projets.
					</p>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
					{/* Expérience Professionnelle */}
					<div>
						<h3 className="text-xl sm:text-2xl font-semibold mb-6 md:mb-8 flex items-center text-text-primary">
							<FaBriefcase className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-primary" />
							Expérience Professionnelle
						</h3>

						<div className="relative border-l-2 border-primary/30 pl-6 sm:pl-8 space-y-8 md:space-y-12">
							{workExperience.map((job, index) => (
								<div key={index} className="relative">
									<div className="absolute -left-[18px] sm:-left-10 mt-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full border-4 border-background bg-primary"></div>
									<div className="mb-2">
										<h4 className="text-lg sm:text-xl font-semibold text-text-primary">
											{job.title}
										</h4>
										<div className="text-primary font-medium text-sm sm:text-base">
											{job.company}
										</div>
									</div>
									<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-text-secondary mb-3">
										<div className="flex items-center">
											<FaMapMarkerAlt className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
											{job.location}
										</div>
										<div className="flex items-center">
											<FaCalendarAlt className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
											{job.period}
										</div>
									</div>
									<ul className="list-disc list-inside space-y-1 text-xs sm:text-sm text-text-secondary">
										{job.description.map((item, itemIndex) => (
											<li key={itemIndex}>{item}</li>
										))}
									</ul>
								</div>
							))}
						</div>
					</div>

					{/* Formation */}
					<div>
						<h3 className="text-xl text-text-primary sm:text-2xl font-semibold mb-6 md:mb-8 flex items-center">
							<FaGraduationCap className="mr-2 h-5 w-5 sm:h-6 sm:w-6 text-primary" />
							Formation
						</h3>

						<div className="relative border-l-2 border-primary/30 pl-6 sm:pl-8 space-y-8 md:space-y-12">
							{education.map((edu, index) => (
								<div key={index} className="relative">
									<div className="absolute -left-[18px] sm:-left-10 mt-1 h-4 w-4 sm:h-5 sm:w-5 rounded-full border-4 border-background bg-primary"></div>
									<div className="mb-2">
										<h4 className="text-lg sm:text-xl font-semibold text-text-primary">
											{edu.degree}
										</h4>
										<div className="text-primary font-medium text-sm sm:text-base">
											{edu.institution}
										</div>
									</div>
									<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-text-secondary mb-3">
										<div className="flex items-center">
											<FaMapMarkerAlt className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
											{edu.location}
										</div>
										<div className="flex items-center">
											<FaCalendarAlt className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
											{edu.period}
										</div>
									</div>
									<p className="text-xs sm:text-sm text-text-secondary">
										{edu.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
























