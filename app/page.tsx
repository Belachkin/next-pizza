import {
  Container,
  Title,
  Filters,
  ProductGroupList,
  Topbar,
} from "@/components/shared";

export default function Home() {
  const productItems = [
    {
      id: 0,
      name: "Гавайская",
      description:
        "Двойная порция цыпленка, ананасы, моцарелла, фирменный соус альфредо",
      items: [{ price: 249 }, { price: 319 }, { price: 549 }],
      imageUrl: "/products/0/gavai.avif",
    },
    {
      id: 1,
      name: "Чесночный цыпленок",
      description:
        "Цыпленок, чеснок, томаты, моцарелла, фирменный соус альфредо",
      items: [{ price: 249 }, { price: 319 }, { price: 549 }],
      imageUrl: "/products/0/garlic-chicken.avif",
    },
    {
      id: 3,
      name: "Мясной микс",
      description:
        "Добавили сочную свиную шейку к пряной говядине, пикантной пепперони, бекону и моцарелле с фирменным томатным соусом",
      items: [{ price: 529 }, { price: 809 }, { price: 949 }],
      imageUrl: "/products/0/meat-mix.avif",
    },
    {
      id: 0,
      name: "Гавайская",
      description:
        "Двойная порция цыпленка, ананасы, моцарелла, фирменный соус альфредо",
      items: [{ price: 249 }, { price: 319 }, { price: 549 }],
      imageUrl: "/products/0/gavai.avif",
    },
    {
      id: 1,
      name: "Чесночный цыпленок",
      description:
        "Цыпленок, чеснок, томаты, моцарелла, фирменный соус альфредо",
      items: [{ price: 249 }, { price: 319 }, { price: 549 }],
      imageUrl: "/products/0/garlic-chicken.avif",
    },
    {
      id: 3,
      name: "Мясной микс",
      description:
        "Добавили сочную свиную шейку к пряной говядине, пикантной пепперони, бекону и моцарелле с фирменным томатным соусом",
      items: [{ price: 529 }, { price: 809 }, { price: 949 }],
      imageUrl: "/products/0/meat-mix.avif",
    },
    {
      id: 0,
      name: "Гавайская",
      description:
        "Двойная порция цыпленка, ананасы, моцарелла, фирменный соус альфредо",
      items: [{ price: 249 }, { price: 319 }, { price: 549 }],
      imageUrl: "/products/0/gavai.avif",
    },
    {
      id: 1,
      name: "Чесночный цыпленок",
      description:
        "Цыпленок, чеснок, томаты, моцарелла, фирменный соус альфредо",
      items: [{ price: 249 }, { price: 319 }, { price: 549 }],
      imageUrl: "/products/0/garlic-chicken.avif",
    },
    {
      id: 3,
      name: "Мясной микс",
      description:
        "Добавили сочную свиную шейку к пряной говядине, пикантной пепперони, бекону и моцарелле с фирменным томатным соусом",
      items: [{ price: 529 }, { price: 809 }, { price: 949 }],
      imageUrl: "/products/0/meat-mix.avif",
    },
  ];

  return (
    <>
      <Container className="mt-10">
        <Title text="Вся пицца" size="lg" className="font-extrabold" />
      </Container>

      <Topbar />

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>

          {/* Каталог */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductGroupList
                title="Пицца"
                items={productItems}
                categoryId={0}
              />

              <ProductGroupList
                title="Комбо"
                items={productItems}
                categoryId={1}
              />

              <ProductGroupList
                title="Закуски"
                items={productItems}
                categoryId={2}
              />

              <ProductGroupList
                title="Коктейли"
                items={productItems}
                categoryId={3}
              />

              <ProductGroupList
                title="Кофе"
                items={productItems}
                categoryId={4}
              />

              <ProductGroupList
                title="Напитки"
                items={productItems}
                categoryId={5}
              />

              <ProductGroupList
                title="Десерты"
                items={productItems}
                categoryId={6}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
