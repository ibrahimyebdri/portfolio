/* eslint-disable react/no-unescaped-entities */
"use client";

export default function About() {
  type PersonalInfoItem = {
    title: string;
    value: string;
    icon: string;
  };

  const personalInfo: PersonalInfoItem[] = [
    { title: "Name", value: "Ibrahim YEBDRI", icon: "👨‍💻" },
    { title: "Email", value: "ib.yebdri@gmail.com", icon: "✉️" }, 
    { title: "Location", value: "Oran, Algeria", icon: "📍" },
    { title: "Status", value: "Open to new opportunities", icon: "🔍" },
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 bg-background relative overflow-hidden"
    >
      {/* Dynamic background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 sm:-top-32 -left-20 sm:-left-32 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -right-20 sm:-right-40 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-primary-foreground/5 rounded-full blur-3xl animate-float-delay"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header section */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-text-primary relative inline-block">
            <span className="relative">
              About <span className="text-primary">Me</span>
              <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-primary to-transparent"></span>
            </span>
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto">
            Get to know the person behind the code
          </p>
        </div>

        {/* Main content */}
        <div className="relative">
          <div className="bg-card p-6 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl border border-border/50 relative overflow-hidden">
            <div className="absolute -top-10 sm:-top-20 -right-10 sm:-right-20 w-40 sm:w-64 h-40 sm:h-64 bg-primary/5 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12">
                <div className="flex-1">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-text-primary relative">
                    <span className="relative">
                      Full-Stack Developer
                      <span className="absolute -bottom-1 sm:-bottom-2 left-0 w-12 sm:w-16 h-0.5 sm:h-1 bg-primary rounded-full"></span>
                    </span>
                  </h3>

                  <div className="space-y-4 sm:space-y-6 text-text-secondary text-base sm:text-lg leading-relaxed">
                    <p>
                      I'm{" "}
                      <span className="text-primary font-semibold">
                        Ibrahim Yebdri
                      </span>
                      , a passionate developer recently graduated, specialized in building modern web applications that combine performance, design, and scalability.
                    </p>

                    <p>
                      I have worked on several projects including{" "}
                      <span className="text-primary font-semibold">TripDzAir</span>, 
                      a tourism platform for hotel, restaurant and activity booking in Algeria. 
                      My skills include{" "}
                      <span className="text-primary font-semibold">React</span>,{" "}
                      <span className="text-primary font-semibold">Next.js</span>,{" "}
                      <span className="text-primary font-semibold">Supabase</span>,{" "}
                      <span className="text-primary font-semibold">Tailwind CSS</span>, and more.
                    </p>

                    <div data-aos="fade-right" className="bg-background/50 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-border mt-6 sm:mt-8">
                      <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-text-primary">
                        Development Philosophy
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        <li className="flex items-start gap-2 sm:gap-3">
                          <span className="text-primary mt-0.5 sm:mt-1">✓</span>
                          <span>Clean, maintainable code as a foundation</span>
                        </li>
                        <li className="flex items-start gap-2 sm:gap-3">
                          <span className="text-primary mt-0.5 sm:mt-1">✓</span>
                          <span>Performance and scalability oriented</span>
                        </li>
                        <li className="flex items-start gap-2 sm:gap-3">
                          <span className="text-primary mt-0.5 sm:mt-1">✓</span>
                          <span>Continuous learning & improvement</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="lg:w-72 xl:w-80 flex-shrink-0">
                  <div className="sticky top-20 sm:top-24 space-y-4 sm:space-y-6">
                    <div data-aos="fade-down" className="bg-gradient-to-br from-primary/10 to-primary-foreground/5 p-4 sm:p-6 rounded-lg sm:rounded-xl border border-primary/20">
                      <h4 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-5 text-text-primary">
                        Personal Info
                      </h4>
                      <div className="space-y-4 sm:space-y-5">
                        {personalInfo.map((item, index) => (
                          <div key={index} className="flex items-center gap-3 sm:gap-4">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm sm:text-base text-primary">
                              {item.icon}
                            </div>
                            <div>
                              <p className="text-xs sm:text-sm text-text-secondary">
                                {item.title}
                              </p>
                              <p className="font-medium text-foreground text-xs sm:text-sm">
                                {item.value}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div data-aos="fade-up" className="bg-card p-4 sm:p-6 rounded-lg sm:rounded-xl border border-border hover:border-primary transition-all group">
                      <h4 className="font-semibold mb-2 sm:mb-3 text-sm sm:text-base text-text-primary group-hover:text-primary transition-colors">
                        Current Focus
                      </h4>
                      <p className="text-xs sm:text-sm text-text-secondary">
                        Improving cloud integrations & real-world SaaS projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-full h-full rounded-xl sm:rounded-2xl bg-primary/5 -z-10"></div>
        </div>
      </div>
    </section>
  );
}
