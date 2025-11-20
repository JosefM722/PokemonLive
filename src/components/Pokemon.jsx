export default function Pokemon({ data }) {
  if (!data) return null;

  return (
    <div className="poke-card">
      {/* Namn */}
      <h3>{data.name.toUpperCase()}</h3>

      {/* Bild */}
      <img src={data.sprites.front_default} alt={data.name} />

      {/* Typer */}
      <div className="poke-types">
        {data.types.map((t) => (
          <span key={t.type.name} className="poke-type">
            {t.type.name.toUpperCase()}
          </span>
        ))}
      </div>

      {/* Vikt och längd */}
      <p>Vikt: {data.weight / 10} kg</p>
      <p>Längd: {data.height / 10} m</p>
    </div>
  );
}
