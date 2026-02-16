import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Title } from "./title";

interface Props {
  id: number;
  name?: string;
  description?: string;
  price: number;
  imageUrl?: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  className,
  id,
  name = "Товар",
  price,
  imageUrl = "/placeholder.png",
  description = "Описание товара",
}) => {
  return (
    <div className={cn("", className)}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
          <img width={215} height={215} src={imageUrl} alt={name} />
        </div>
      </Link>

      <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />
      <p className="text-sm text-gray-400">{description}</p>
      <div className="flex justify-between items-center mt-4">
        <span className="text-[20px] font-bold">от {price} ₽</span>
        <div className="text-primary font-bold cursor-pointer hover:opacity-70 transition">
          + Добавить
        </div>
      </div>
    </div>
  );
};
