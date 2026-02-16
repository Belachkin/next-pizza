"use client";

import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Api } from "@/services/api-client";
import { Product } from "@prisma/client";
import { useDebounce } from "react-use";
import { spawn } from "child_process";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [focused, setFocused] = React.useState(false);
  const [products, setProducts] = React.useState<Product[]>([]);
  // Функция для очистки поиска при переходе
  const onLinkTransition = () => {
    setSearchQuery("");
    setFocused(false);
  };

  useDebounce(
    () => {
      Api.products.search(searchQuery).then((items) => {
        setProducts(items);
      });
    },
    100,
    [searchQuery],
  );

  return (
    <>
      {focused && (
        <div
          className="fixed top-0 left-0 bottom-0 right-0 bg-black/50 z-30"
          onClick={() => setFocused(false)}
        ></div>
      )}

      <div
        className={cn(
          "flex rounded-2xl flex-1 justify-between relative h-11 z-30",
          className,
        )}
      >
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
        <input
          className="rounded-2xl outline-none w-full bg-gray-50 pl-11"
          type="text"
          placeholder="Поиск..."
          onFocus={() => setFocused(true)}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {products.length > 0 && (
        <div
          className={cn(
            "absolute w-2xl bg-white rounded-xl py-2 top-12 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-20",
          )}
        >
          {products.map((product) => (
            <Link
              key={product.id}
              className="flex items-center gap-3 px-3 py-2 hover:bg-primary/10 cursor-pointer"
              href={`/product/${product.id}`}
              onClick={onLinkTransition}
            >
              <img
                className=" rounded-sm h-8 w-8"
                src={product.imageUrl}
                alt={product.name}
                width={35}
                height={35}
              />
              <span>{product.name}</span>
            </Link>
          ))}
        </div>
      )}

      {products.length === 0 && (
        <div
          className={cn(
            "absolute w-2xl bg-gray-300 rounded-xl py-2 top-12 shadow-md transition-all duration-200 invisible opacity-0 z-30",
            focused && "visible opacity-100 top-20",
          )}
        >
          <span className="flex items-center gap-3  px-3 py-2">
            Ничего не найдено 😬
          </span>
        </div>
      )}
    </>
  );
};
