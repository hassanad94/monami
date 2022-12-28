export default {
    name: 'products',
    type: 'document',
      title: 'Füllbevalók',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Név',
        validation: Rule => [
            Rule.required().min(3).error('Lady Monami Kérem Adjon meg egy nevet')
        ]
      },
      {
        title: 'Termék Kategóriája',
        name: 'category',
        type: 'reference',
        to: [{type: 'productCategories'}],
        validation: Rule => [
          Rule.required().error('Lady Monami Kérem rakja be egy kategorába.')
        ]
      },
      {
        name: "images",
        title: "Képek",
        type: "array",
        of : [ {type: "image",}]
        
      },
      {
        name: 'size',
        type: 'number',
        title: 'Méret'
      },
      {
        name: 'price',
        type: 'number',
        title: 'Ár',
        validation: Rule => [
            Rule.required().error('Lady Monami Kérem írja be az árat')
        ]
      },
      {
        name: 'price_original',
        type: 'number',
        title: 'Eredeti Ár'
      },
      {
        name: 'color',
        type: 'string',
        title: 'Színe',
        validation: Rule => [
            Rule.required().error('Ms Monami, Gondolom nem átlátszó...')
        ]
      },
    ]
  }