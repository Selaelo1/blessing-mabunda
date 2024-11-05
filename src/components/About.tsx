import { Code2, Smartphone, Server } from "lucide-react";

const skills = [
  {
    icon: <Code2 className="w-10 h-10 text-orange-400 mb-4" />,
    title: "Web Development",
    description: "Expert in React.js, Vue.js, and modern frontend technologies",
  },
  {
    icon: <Smartphone className="w-10 h-10 text-orange-400 mb-4" />,
    title: "Mobile Development",
    description:
      "Specialized in Flutter for cross-platform mobile applications",
  },
  {
    icon: <Server className="w-10 h-10 text-orange-400 mb-4" />,
    title: "Backend Development",
    description: "Proficient in Node.js and C# with .NET Web API",
  },
];

export default function About() {
  return (
    <section className="py-20 bg-zinc-800/50" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">
            About Me
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-6">
            I'm a Computer Science graduate and full-stack developer with a
            strong foundation in both web and mobile development. With a keen
            eye for detail and a passion for innovation, I specialize in
            crafting seamless, user-centric applications that address real-world
            challenges.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-zinc-700/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-xl"
              >
                {skill.icon}
                <h3 className="text-xl font-semibold mb-2 text-orange-300">
                  {skill.title}
                </h3>
                <p className="text-zinc-300">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
