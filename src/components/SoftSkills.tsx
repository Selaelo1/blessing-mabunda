import { Brain, Users, Lightbulb, Target } from "lucide-react";

const softSkills = [
  {
    icon: <Brain className="w-10 h-10 text-orange-400 mb-4" />,
    title: "Problem Solving",
    description:
      "Strong analytical thinking and creative problem-solving abilities",
  },
  {
    icon: <Users className="w-10 h-10 text-orange-400 mb-4" />,
    title: "Team Collaboration",
    description: "Excellent communication and team coordination skills",
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-orange-400 mb-4" />,
    title: "Innovation",
    description:
      "Passionate about exploring new technologies and creative solutions",
  },
  {
    icon: <Target className="w-10 h-10 text-orange-400 mb-4" />,
    title: "Project Management",
    description:
      "Experienced in leading projects and meeting deadlines effectively",
  },
];

export default function SoftSkills() {
  return (
    <section className="py-20 bg-zinc-900" id="soft-skills">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-orange-400">
            Soft Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-zinc-800/50 p-6 rounded-lg transform hover:scale-105 transition-all hover:shadow-xl"
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
