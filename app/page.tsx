import {
  Container,
  Title,
  Filters,
  ProductGroupList,
  Topbar,
} from "@/components/shared";

export default async function Home() {
  const categories = await prisma?.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        },
      },
    },
  });

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
              {categories?.map((category, index) => (
                <ProductGroupList
                  title={category.name}
                  items={category.products}
                  categoryId={category.id}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
