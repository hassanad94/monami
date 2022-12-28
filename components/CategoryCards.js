import Image from "next/image"


function CategoryCards({categories = []}) {

  return(
    <>
    {categories?.map( (category) => {

      const {_id, name, preview} = category;

      return(
          <div className="category-card" key={_id}>
      
              <div className="category-image">
                  <Image className="rounded-md" width={150} height={150} src={preview} />
              </div>
      
              <div className="category-title text-primary">
                  <p className="font-title uppercase">{name}</p>
              </div>
      
          </div>
      )

    } )}
    </>
  )

  // return (
  // )
}

export default CategoryCards