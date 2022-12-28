import CategoryCards from "../components/CategoryCards";
import GiftCard from "../components/GiftCard";
import {client} from "../utils/client";
import { urlForImage } from "../utils/client";

const getSanityData = async() =>{

  let categories = await client.fetch( `*[_type == 'productCategories']{
    _id, preview, name
  }` );

  // categories.preview = urlForImage( categories.preview ).url();

  for (let category of categories) {
    category.preview = urlForImage( category.preview ).width(500).url();
  }

  return {
    categories
  }

}

export default async function Home() {

  const data = await getSanityData();

  const{ categories } = data

  return (
    <main>
     
      <div className="content">

        <div className="categories-container">

          <CategoryCards categories={categories} />

        </div>

      </div>

      <div className="content ">

        <GiftCard />

      </div>

    </main>
  )
}
