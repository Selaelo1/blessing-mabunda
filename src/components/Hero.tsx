import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative min-h-screen flex items-center justify-center py-20">
      <div className="absolute inset-0">
        <div className="w-full h-full bg-[url('../src/assets/workspace.jpeg')] bg-cover bg-center opacity-10" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600 animate-gradient leading-tight sm:leading-tight md:leading-tight lg:leading-tight">
              Blessing Mabunda
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-zinc-300 mb-8">
            Full-Stack & Mobile Developer
          </p>
          <div className="flex justify-center gap-4 mb-12">
            <a
              href="#"
              className="text-orange-400 hover:text-orange-300 transition-colors transform hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-orange-400 hover:text-orange-300 transition-colors transform hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:contact@blessingmabunda.com"
              className="text-orange-400 hover:text-orange-300 transition-colors transform hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-medium flex items-center gap-2 mx-auto transition-all hover:shadow-lg hover:shadow-orange-500/25">
            <Download className="w-5 h-5" />
            Download CV
          </button>
        </div>
      </div>
    </header>
  );
}
