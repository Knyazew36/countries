import Image from "next/image";
import Link from "next/link";

const CountryCard = ({
  name,
  rusName,
  flag,
  flagAlt,
}: {
  name: string;
  rusName: string;
  flag: string;
  flagAlt: string;
}) => {
  return (
    <Link href={`/country/${name}`} key={name}>
      <article className="h-64 p-2 bg-white rounded-xl border-2">
        <div className="relative w-full h-40 p-2 overflow-hidden">
          <Image src={flag} alt={flagAlt} fill className=" object-cover" />
        </div>
        <h1 className=" font-bold text-xl text-center mt-1">{rusName}</h1>
      </article>
    </Link>
  );
};
export default CountryCard;
