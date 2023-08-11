"use client";

import Link from "next/link";

const error = () => {
  return (
    <section className="flex flex-col container">
      <h1 className="text-5xl text-center font-bold text-gray-800 my-16">
        Ops,an Error occured!
      </h1>
      <Link href="/" className="flex items-center py-2">
        Назад
      </Link>
    </section>
  );
};
export default error;
