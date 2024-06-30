/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xedvdvh7qc7j0en")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "comxs8aj",
    "name": "country",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xedvdvh7qc7j0en")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "comxs8aj",
    "name": "nationality",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
