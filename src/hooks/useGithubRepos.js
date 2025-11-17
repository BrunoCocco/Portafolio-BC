import { useEffect, useState } from "react";

function useGithubRepos(username) {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const data = await res.json();

        // FILTRO inteligente: evita basura
        const filtrados = data.filter((repo) =>
          /solidity|web3|js|HTML|Bootstrap|hardhat|blockchain|dapp|smart/i.test(
            repo.description || repo.name
          )
        );

        setRepos(filtrados);
      } catch (err) {
        console.error("❌ Error obteniendo repos:", err);
      }
    }
    fetchRepos();
  }, [username]);

  return repos;
}

export default useGithubRepos;
