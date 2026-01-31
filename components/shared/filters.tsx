"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Title, FilterCheckbox, CheckboxFiltersGroup } from "./";
import { Input, RangeSlider } from "../ui";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const ingredients = [
    "Сырный соус",
    "Моцарелла",
    "Чеснок",
    "Соленые огурчики",
    "Красный лук",
  ];

  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собрать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
      </div>

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={5000}
            defaultValue={0}
          />
          <Input
            type="number"
            min={0}
            max={5000}
            placeholder="1000"
            defaultValue={1000}
          />
        </div>

        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
      </div>

      <CheckboxFiltersGroup
        title="Ингредиенты:"
        className="mt-5"
        limit={6}
        defaultItems={[
          { text: "Сырный соус", value: "1" },
          { text: "Моцарелла", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Соленые огурчики", value: "4" },
          { text: "Красный лук", value: "5" },
          { text: "Томаты", value: "6" },
        ]}
        items={[
          { text: "Сырный соус", value: "1" },
          { text: "Моцарелла", value: "2" },
          { text: "Чеснок", value: "3" },
          { text: "Соленые огурчики", value: "4" },
          { text: "Красный лук", value: "5" },
          { text: "Томаты", value: "6" },
          { text: "Сырный соус", value: "7" },
          { text: "Моцарелла", value: "8" },
          { text: "Чеснок", value: "9" },
          { text: "Соленые огурчики", value: "10" },
          { text: "Красный лук", value: "11" },
          { text: "Томаты", value: "12" },
        ]}
      />

      <p className="font-bold mt-6 mb-3">Тип теста</p>
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Традиционное" value="1" />
        <FilterCheckbox text="Тонкое" value="2" />
      </div>
    </div>
  );
};
