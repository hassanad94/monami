export default {
    name: 'productCategories',
    type: 'document',
    title: 'Termék Kategóriák',
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
        name: 'preview',
        type: 'image',
        title: 'Előnézeti Kép',
        validation: Rule => [
          Rule.required().error('Lady Monami Kérem töltsön fel valami képet')
        ]
      },
    ]
  }