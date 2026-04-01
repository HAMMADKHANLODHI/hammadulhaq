
"use client";
import React, { useEffect, useState } from 'react';

// This simulates the data you would fetch from your DB (e.g., Prisma, Supabase, or MongoDB)
async function getProfileData() {
  return {
    Name: "Alex Thompson",
    Email: "alex@example.com",
    Whatsapp: "+1234567890",
    Linkedin: "linkedin.com/in/alex",
    Github: "github.com/alex",
    GoogleMap: "maps.google.com/location",
    "Home-Summary": "A passionate Full Stack Developer focused on building clean, user-centric interfaces.",
    "About-Summary": "With over 5 years of experience in the industry, I specialize in React, Next.js, and Tailwind CSS. I enjoy solving complex problems and turning them into simple, elegant designs.",
    Skills: [
      { name: "React", level: "95" },
      { name: "Next.js", level: "90" },
      { name: "TypeScript", level: "85" }
    ],
    Experience: [
      { company: "Tech Flow", role: "Senior Dev", startDate: "2022-01-01", endDate: "Present", desc: "Leading the frontend team." },
      { company: "Web Works", role: "Junior Dev", startDate: "2020-01-01", endDate: "2021-12-31", desc: "Built responsive landing pages." }
    ],
    Education: [
      { school: "University of Design", startDate: "2016-09-01", endDate: "2020-05-01", summary: "Bachelor in Computer Science" }
    ],
    Services: [
      { icon: "🎨", title: "UI/UX Design", desc: "Creating beautiful and functional digital experiences." }
    ],
    Portfolio: [
      { name: "E-commerce App", category: "Web", link: "https://shop.com" }
    ]
  };
}

export default function ProfilePage() {
  const [data, setData] = useState<any>(null);
  const[isLogin,setIsLogin]=useState(false);
  useEffect(()=>{
    async function loadData() {
      const result = await getProfileData();
      setData(result);
    }
    loadData();
  },[])
 if (!data) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <p className="text-amber-900 font-bold animate-pulse">Loading Profile...</p>
      </div>
    );
  }

  // 2. NOW THE REST OF YOUR CODE IS SAFE
  const sectionTitle = "text-xl font-black text-amber-600 uppercase tracking-widest border-l-4 border-amber-400 pl-3 mb-6";
  const cardBg = "bg-white p-6 rounded-2xl border border-amber-100 shadow-sm";

  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* HEADER SECTION */}
        <header className="text-center space-y-4">
          <h1 className="text-5xl font-black text-amber-950 uppercase">{data.Name}</h1>
          <p className="text-amber-700 font-medium text-lg">{data.Email} • {data.Whatsapp}</p>
          <div className="flex justify-center gap-4 text-sm font-bold text-amber-900">
            <a href={data.Github} className="hover:text-amber-500 underline">GITHUB</a>
            <a href={data.Linkedin} className="hover:text-amber-500 underline">LINKEDIN</a>
            <a href={data.GoogleMap} className="hover:text-amber-500 underline">LOCATION</a>
          </div>
        </header>

        {/* SUMMARY SECTION */}
        <section className={cardBg}>
          <h2 className={sectionTitle}>Professional Summary</h2>
          <div className="space-y-4">
            <h3 className="font-bold text-amber-900">Introduction</h3>
            <p className="text-amber-950 leading-relaxed">{data["Home-Summary"]}</p>
            <h3 className="font-bold text-amber-900">Background</h3>
            <p className="text-amber-950 leading-relaxed">{data["About-Summary"]}</p>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section>
          <h2 className={sectionTitle}>Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data.Skills.map((skill:any, i:number) => (
              <div key={i} className="bg-amber-100 p-4 rounded-xl text-center">
                <h3 className="font-bold text-amber-950">{skill.name}</h3>
                <p className="text-amber-600 font-black">{skill.level}%</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="space-y-6">
          <h2 className={sectionTitle}>Work Experience</h2>
          {data.Experience.map((exp:any, i:number) => (
            <div key={i} className={cardBg}>
              <h3 className="text-xl font-bold text-amber-900">{exp.role}</h3>
              <h4 className="text-amber-600 font-bold">{exp.company}</h4>
              <p className="text-xs text-amber-400 mb-3">{exp.startDate} — {exp.endDate}</p>
              <p className="text-amber-950 italic">{exp.desc}</p>
            </div>
          ))}
        </section>

        {/* EDUCATION SECTION */}
        <section>
          <h2 className={sectionTitle}>Education</h2>
          {data.Education.map((edu:any, i:number) => (
            <div key={i} className="border-b border-amber-200 pb-4 mb-4 last:border-0">
              <h3 className="text-lg font-bold text-amber-900">{edu.school}</h3>
              <p className="text-sm text-amber-600">{edu.startDate} to {edu.endDate}</p>
              <p className="mt-2 text-amber-950">{edu.summary}</p>
            </div>
          ))}
        </section>

        {/* SERVICES SECTION */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="col-span-full">
            <h2 className={sectionTitle}>My Services</h2>
          </div>
          {data.Services.map((service:any, i:number) => (
            <div key={i} className="bg-amber-950 text-white p-6 rounded-2xl shadow-lg">
              <span className="text-3xl mb-4 block">{service.icon}</span>
              <h3 className="text-xl font-bold text-amber-400 mb-2">{service.title}</h3>
              <p className="text-amber-100 text-sm">{service.desc}</p>
            </div>
          ))}
        </section>

        {/* PORTFOLIO SECTION */}
        <section>
          <h2 className={sectionTitle}>Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.Portfolio.map((project:any, i:number) => (
              <div key={i} className="border-2 border-amber-200 border-dashed p-4 rounded-xl hover:bg-white transition-colors">
                <h3 className="font-bold text-amber-950">{project.name}</h3>
                <p className="text-xs uppercase text-amber-500 mb-2">{project.category}</p>
                <a href={project.link} className="text-sm font-bold text-amber-900 underline">View Project</a>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}