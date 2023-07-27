export const DBConfig = {
  name: "MyDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "notes",
      storeConfig: { keyPath: "id", autoIncrement: true },
      storeSchema: [
        { name: "title", keypath: "title", options: { unique: false } },
        { name: "content", keypath: "content", options: { unique: false } },
      ],
    },
  ],
};
