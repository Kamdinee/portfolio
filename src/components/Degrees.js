import React from "react";
import "../styles/Degree.css";
import FadeInSection from "./FadeInSection";

const Degrees = () => {
  const degrees = [
    {
      logo: '/logos/5426a7d8b912ab01137d388e8fee44d1.jpeg',
      degree: "Advanced Technician's Certificate - Ongoing",
      field: 'Computer Services for Organizations - Software Solutions and Business Applications.',
      institution: 'High School Frederic Chopin - Nancy, France',
      period: 'From 01/09/2024 to 20/05/2026',
    },
    {
      logo: '/logos/idmc_nancy_logo.jpg',
      degree: "Bachelor's Program - Incompleted",
      field: 'Computer Services for Organizations - Software Solutions and Business Applications.',
      institution: 'Institute of Digital Sciences / MIASHS  - Nancy, France',
      period: 'From 13/09/2021 to 05/01/2023',
    },
    {
      logo: '🎓',
      degree: 'General Baccalaureate - Completed',
      field: 'General Baccalaureate - Specialization in Mathematics and Life Sciences.',
      institution: 'High School Jacques Callot - Nancy, France',
      period: 'From 01/09/2018 to 07/07/2021',
    },
  ];

  return (
    <section id="degrees" className="section px-10">
      <div>
        <FadeInSection>
          <h2 className="section-heading">Education</h2>
        </FadeInSection>

        <div className="space-y-8">
          {degrees.map((degree, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <div className="flex gap-8 group">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 bg-[var(--light-navy)] rounded-lg flex items-center justify-center border-2 border-[var(--lightest-navy)] group-hover:border-[var(--green)] transition-all duration-300 overflow-hidden">
                    {degree.logo.startsWith('/') ? (
                      <img src={degree.logo} alt="School logo" className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-6xl">{degree.logo}</span>
                    )}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="mb-4">
                    <div className="flex items-start gap-3 mb-3">
                      <GraduationCap size={28} className="text-[var(--green)] flex-shrink-0 mt-1" />
                      <h3 className="text-3xl font-bold text-[var(--lightest-slate)] group-hover:text-[var(--green)] transition-colors">
                        {degree.degree}
                      </h3>
                    </div>
                    <p className="text-xl text-[var(--light-slate)] leading-relaxed ml-11">
                      {degree.field}
                    </p>
                  </div>

                  <div className="ml-11 space-y-3">
                    <div className="flex items-center gap-3 text-lg">
                      <MapPin size={22} className="text-[var(--green)] flex-shrink-0" />
                      <span className="text-[var(--slate)]">{degree.institution}</span>
                    </div>
                    <div className="flex items-center gap-3 text-lg">
                      <Calendar size={22} className="text-[var(--green)] flex-shrink-0" />
                      <span className="text-[var(--slate)]">{degree.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              {index < degrees.length - 1 && (
                <div className="h-px bg-[var(--lightest-navy)] mt-8"></div>
              )}
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Degrees;
