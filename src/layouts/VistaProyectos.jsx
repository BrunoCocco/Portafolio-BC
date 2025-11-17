import useGithubRepos from "../hooks/useGithubRepos";

function Proyectos() {
  const repos = useGithubRepos("BrunoCocco");

  return (
    <section className="skills-section container">
      <h1 className="skills-title">Proyectos Web3</h1>

      {repos.length === 0 && <p>Cargando repositorios...</p>}

      <div className="skills-grid">
        {repos.map((repo) => (
          <article key={repo.id} className="skill-card">
            <h3>📦 {repo.name}</h3>
            <p>{repo.description || "Repositorio sin descripción"}</p>

            <a
              href={repo.html_url}
              className="btn-proyecto"
              target="_blank"
              rel="noreferrer"
            >
              🔗 Ver Código
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
