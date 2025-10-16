import {defineField, defineType} from 'sanity'
import {SheetIcon} from '../../ui/icons/sheet'

export const ComponentSheetType = defineType({
  name: 'componentSheet',
  title: 'Component Sheet',
  type: 'document',
  icon: SheetIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) =>
        rule.required().error("Ce champ est requis pour la création d'un composant"),
      hidden: ({document}) => !document?.title,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Contenu',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishedAt',
    },
  },
})
