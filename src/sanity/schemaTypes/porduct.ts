import { defineType } from "sanity"
export const product = defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
      {
        name: "title",
        title: "Title",
        validation: (rule) => rule.required(),
        type: "string"
    },
    {
        name:"description",
        type:"text",
        validation: (rule) => rule.required(),
        title:"Description",
    },
    {
        name: "productImage",
        type: "image",
        validation: (rule) => rule.required(),
        title: "Product Image"
    },
    {
        name: "price",
        type: "number",
        validation: (rule) => rule.required(),
        title: "Price",
    },
    {
        name: "tags",
        type: "array",
        title: "Tags",
        of: [{ type: "string" }]
    },
    {
        name:"dicountPercentage",
        type:"number",
        title:"Discount Percentage",
    },
    {
        name:"isNew",
        type:"boolean",
        title:"New Badge",
    },
    {
      title: 'Current quantiy',
      name: 'quantity',
      type: 'number'
    },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
          slugify: (input: string) =>
            input
              .toLowerCase()
              .replace(/\s+/g, '-')
              .replace(/[^a-z0-9-]/g, '')
              .slice(0, 96),
        },
      }
    ]
  });