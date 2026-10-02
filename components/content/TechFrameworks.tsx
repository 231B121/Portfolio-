import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFlask,
  SiScikitlearn,
  SiNumpy,
} from "react-icons/si";

const items = [
  { label: "React.js", Icon: SiReact },
  { label: "Node.js", Icon: SiNodedotjs },
  { label: "Express.js", Icon: SiExpress },
  { label: "Flask", Icon: SiFlask },
  { label: "Scikit-Learn", Icon: SiScikitlearn },
  { label: "NumPy", Icon: SiNumpy },
];

export default function TechFrameworks() {
  return (
    <div className="prose prose-invert max-w-none">
      <h3 className="text-accent font-retroSans font-extrabold text-4xl md:text-5xl">
        Frameworks &amp; Libraries
      </h3>
      <p className="text-muted text-sm mt-2">
        Libraries and frameworks powering Machine Learning models, microservices, REST APIs, and full stack web apps.
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {items.map(({ label, Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-lg bg-panel/70 px-3 py-2 md:px-4 md:py-3 ring-1 ring-ring/60"
          >
            <Icon className="text-accent" size={26} />
            <span className="font-retroSans font-extrabold text-lg">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
