const MONGODB_URI = 'mongodb+srv://2trung:JpT0wM2zDo9lGefF@cluster0.cdsen84.mongodb.net/?retryWrites=true&w=majority'
const DATABASE_NAME = 'Trello'

import { MongoClient, ServerApiVersion } from 'mongodb'
let trelloDatabseInstance = null

const mongoClientInstance = new MongoClient(MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
})

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect()
  trelloDatabseInstance = mongoClientInstance.db(DATABASE_NAME)
}

export const GET_DB = () => {
  if (!trelloDatabseInstance) {
    throw new Error('Call CONNECT_DB first')
  }

  return trelloDatabseInstance
}