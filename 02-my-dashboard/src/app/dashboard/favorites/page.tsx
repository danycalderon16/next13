import FavoritesWrapper from "./componets/favorites-wrapper";

export const metadata = {
 title: 'Favoritos',
 description: 'Favoritos',
};
export default async  function PokemonsPage() {
 
  return (
    <div className="flex flex-col m-2">
      <span>Pokemon <small className="text-blue-500">favoritos</small></span>
      <FavoritesWrapper/>
    </div>
  );
}