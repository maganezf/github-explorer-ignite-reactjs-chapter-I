export interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    html_url: string;
  };
}

export const RepositoryItem = (props: RepositoryItemProps) => {
  return (
    <li>
      <strong>{props.repository.name}</strong>
      <p>{props.repository.description}</p>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href={props.repository.html_url}
      >
        Acessar repositório
      </a>
    </li>
  );
};
