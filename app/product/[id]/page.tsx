export default async function ProductPage({
  params, // Убираем деструктуризацию { id } здесь
}: {
  params: Promise<{ id: string }>; // Указываем тип как Promise
}) {
  const { id } = await params; // Дожидаемся params и только потом достаем id

  return <p>Product {id}</p>;
}
