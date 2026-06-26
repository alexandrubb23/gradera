import { SiReact, SiTypescript, SiVite } from "react-icons/si";
import { TechBadge } from "@/components/TechBadge";
import pkg from "../package.json";

const clean = (v: string) => v.replace(/[\^~]/, "");

const stack = [
  {
    icon: SiVite,
    label: "Vite",
    version: clean(pkg.devDependencies.vite),
    color: "#646CFF",
  },
  {
    icon: SiReact,
    label: "React",
    version: clean(pkg.dependencies.react),
    color: "#61DAFB",
  },
  {
    icon: SiTypescript,
    label: "TypeScript",
    version: clean(pkg.devDependencies.typescript),
    color: "#3178C6",
  },
];

function App() {
  return (
    <div className="container">
      <h1>Welcome to Gradera</h1>
      <p className="subtitle">Enterprise AI Platform</p>
      <div className="badges">
        {stack.map((tech) => (
          <TechBadge key={tech.label} {...tech} />
        ))}
      </div>
    </div>
  );
}

export default App;
