/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xedvdvh7qc7j0en")

  collection.name = "fighters"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("xedvdvh7qc7j0en")

  collection.name = "characters"

  return dao.saveCollection(collection)
})
