interface Proyecto {
    name: string;
    type: "backend" | "frontend";
    technologies: string;
    link: string;
    repository : string;
  }

  const miProyecto: Proyecto = {
    name: "Sistema de Gestión",
    type: "backend",
    technologies: "Node.js, Express, MongoDB",
    link: "https://github.com/miUsuario/miProyecto",
    repository : "asdsadas"
  };