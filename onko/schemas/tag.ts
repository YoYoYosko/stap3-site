import { defineType, defineField } from "sanity";

export default defineType({
  name: "tag",
  title: "Tag",
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
