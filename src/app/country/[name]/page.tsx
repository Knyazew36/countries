async function getCountryByName(name: string) {
  const response = await fetch("");
}

export default async function CountryDetail({
  params: { name },
}: {
  params: { name: string };
}) {
  return (
    <section>
      <h1>{name}</h1>
    </section>
  );
}
//TODO:https://www.youtube.com/watch?v=HnVsUD2gMVE 3039
