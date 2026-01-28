import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./";
import Image from "next/image";
import { Button } from "../ui";
import { ArrowRight, ShoppingBasket, ShoppingCart, User } from "lucide-react";

interface Props {
  className?: string;
}
export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b pt-4 pb-4", className)}>
      <Container className="flex items-center justify-between ">
        <div className="flex items-center gap-4">
          <Image src={"/logo.png"} alt="logo" width={35} height={35}></Image>
          <div>
            <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
            <p className="text-sm text-gray-400 leading-3">
              Лучшая пицца в кибер пространстве
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>

          <div>
            <Button className="group relative">
              <p>520 ₽</p>
              <span className="h-full w-[1px] bg-white/30 mx-3" />
              <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                <ShoppingCart className=" relative" size={16} />
                <b>3</b>
              </div>
              <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
