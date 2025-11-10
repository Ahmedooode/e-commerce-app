import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  // this commented-out access control is just an example of how to restrict creation and deletion of categories
  // access: {
  //   create: () => false,
  //   delete: () => false,
  // },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};
