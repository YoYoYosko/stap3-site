import { defineType, defineField } from "sanity";

export default defineType({
  name: "category",
  title: "Categorie",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Naam",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
