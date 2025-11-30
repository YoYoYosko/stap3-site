import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Blogpost",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titel",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Korte intro",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "mainImage",
      title: "Uitgelichte afbeelding",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "readTime",
      title: "Leestijd",
      type: "string",
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "reference", to: [{ type: "tag" }] }],
    }),
    defineField({
      name: "category",
      title: "Categorie",
      type: "reference",
      to: [{ type: "category" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Publicatiedatum",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "body",
      title: "Inhoud",
      type: "array",
      of: [{ type: "block" }],
    }),
    
  ],
});
