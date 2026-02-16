"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { Title, CheckboxFiltersGroup } from "./";
import { Input, RangeSlider } from "../ui";
import { useFilterIngredients } from "@/hooks/useFilterIngredients";
import { useSet } from "react-use";
import qs from "qs";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  className?: string;
}

interface PriceProps {
  priceFrom: number;
  priceTo: number;
}

interface QueryFilters extends PriceProps {
  pizzaType: string;
  sizes: string;
  ingredients: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const searchParams = useSearchParams() as unknown as Map<
    keyof QueryFilters,
    string
  >;
  const router = useRouter();

  const { items, loading, onAddId, selectedIngredients } = useFilterIngredients(
    searchParams.get("ingredients")
      ? searchParams.get("ingredients")?.split(",") || []
      : [],
  );

  const [sizes, { toggle: toggleSizes }] = useSet(
    new Set<string>(
      searchParams.get("sizes") ? searchParams.get("sizes")?.split(",") : [],
    ),
  );
  const [pizzaType, { toggle: togglePizzaType }] = useSet(
    new Set<string>(
      searchParams.get("pizzaType")
        ? searchParams.get("pizzaType")?.split(",")
        : [],
    ),
  );

  const minPrice = 0;
  const maxPrice = 5000;

  const [price, setPrice] = React.useState<PriceProps>({
    priceFrom: Number(searchParams.get("priceFrom")) || minPrice,
    priceTo: Number(searchParams.get("priceTo")) || maxPrice,
  });

  const updatePrice = (name: keyof PriceProps, value: number) => {
    setPrice({
      ...price,
      [name]: value,
    });
  };

  const filters = React.useMemo(
    () => ({
      ...(price || []),
      pizzaType: Array.from(pizzaType || []),
      sizes: Array.from(sizes || []),
      ingredients: Array.from(selectedIngredients || []),
    }),
    [price, pizzaType, sizes, selectedIngredients],
  );

  console.log(searchParams);

  React.useEffect(() => {
    const query = qs.stringify(filters, {
      arrayFormat: "comma",
    });

    router.push(`?${query}`, { scroll: false });
  }, [filters]);

  return (
    <div className={cn("", className)}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />
      <CheckboxFiltersGroup
        title="Размеры:"
        name="sizes"
        className="mb-5"
        onClickCheckbox={toggleSizes}
        selected={sizes}
        items={[
          { text: "20 см", value: "20" },
          { text: "30 см", value: "30" },
          { text: "40 см", value: "40" },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={minPrice}
            max={maxPrice}
            value={String(price.priceFrom)}
            onChange={(e) => updatePrice("priceFrom", Number(e.target.value))}
          />
          <Input
            type="number"
            min={minPrice}
            max={maxPrice}
            placeholder="5000"
            value={String(price.priceTo)}
            onChange={(e) => updatePrice("priceTo", Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={minPrice}
          max={maxPrice}
          step={10}
          value={[price.priceFrom, price.priceTo]}
          onValueChange={(value) =>
            setPrice({
              priceFrom: value[0],
              priceTo: value[1],
            })
          }
        />
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
        loading={loading}
        onClickCheckbox={onAddId}
        selected={selectedIngredients}
        name="ingredients"
      />

      <CheckboxFiltersGroup
        title="Тип теста:"
        name="pizzaType"
        className="mb-5 mt-6"
        onClickCheckbox={togglePizzaType}
        selected={pizzaType}
        items={[
          { text: "Толстое", value: "thick" },
          { text: "Тонкое", value: "thin" },
        ]}
      />
    </div>
  );
};
