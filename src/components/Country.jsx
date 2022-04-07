import Item from './Item';

export default function Country({
  children: country = null,
  onCountryClick = null,
  isVisited = false,
}) {
  if (!country) {
    return <div>Impossível renderizar o país</div>;
  }

  const {
    flags: { svg },
    name: { common },
    capital,
    region,
    population,
    area,
    cca2,
  } = country;

  const demographicDensity = population / area;

  function handleCountryClick() {
    if (onCountryClick) {
      onCountryClick(cca2);
    }
  }

  const isVisitedClassName = isVisited ? 'bg-green-100' : '';

  return (
    <div
      className={`border p-2 m-2 flex flex-row items-center space-x-2 cursor-pointer ${isVisitedClassName}`}
      onClick={handleCountryClick}
    >
      <img className="w-48" src={svg} alt={common} />

      <ul>
        <li>
          <Item label="Nome">{common}</Item>
        </li>
        <li>
          <Item label="Capital">{capital}</Item>
        </li>
        <li>
          <Item label="Região">{region}</Item>
        </li>
        <li>
          <Item label="População">{population}</Item>
        </li>
        <li>
          <Item label="Área">{area}</Item>
        </li>
        <li>
          <Item label="Densidade Demográfica">{demographicDensity}</Item>
        </li>
      </ul>
    </div>
  );
}
