"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Title, FilterCheckbox, CheckboxFiltersGroup } from "./";
import { Input, RangeSlider } from "../ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { items } = useFilterIngredients();

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
        defaultItems={items.slice(0, 6).map((item) => ({
          text: item.text,
          value: item.value.toString(),
        }))}
        items={items.map((item) => ({
          text: item.text,
          value: item.value.toString(),
        }))}
        loading={true}
      />

      <p className="font-bold mt-6 mb-3">Тип теста</p>
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Традиционное" value="1" />
        <FilterCheckbox text="Тонкое" value="2" />
      </div>
    </div>
  );
};
