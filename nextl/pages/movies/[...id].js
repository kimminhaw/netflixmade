import Router from "next/router";

export default function Detail() {
  const [title, id] = Router.query.id;
  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
}
