import React from "react";
import Link from "next/link";

const Products = () => {
  return (
    <section className="mt-20">
      <div className="container">
        <div className="categories-list">
          <div className="tab-header">
            <Link href="#">All</Link>
            <Link href="#">Gym</Link>
            <Link href="#">Shirt</Link>
            <Link href="#">Pant</Link>
            <Link href="#">Underwear</Link>
            <Link href="#">CM24</Link>
            <Link href="#">Running</Link>
            <Link href="#">Accesories</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
