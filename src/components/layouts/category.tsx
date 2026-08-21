import React from "react";
import Container from "./Container";
import Link from "next/link";
import CategoryData from "@/data/categories";

const Category = () => {
  return (
    <section className="py-16">
      <Container>
        <h2 className="text-lg font-semibold text-quaternary font-space-grotesk">
          Browse by category
        </h2>

        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {CategoryData.categorylist.map((item) => (
            <Link
              key={item.id}
              href={`/events?category=${encodeURIComponent(item.value)}`}
              className="flex items-center justify-center rounded-xl font-manrope border border-tertiary bg-transparent px-4 py-6 text-sm font-medium text-secondary shadow transition hover:-translate-y-0.5 hover:shadow-lg hover:text-quaternary focus:outline-none focus:ring-2 focus:ring-quaternary focus:ring-offset-2"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Category;
