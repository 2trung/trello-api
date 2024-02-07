/* eslint-disable no-console */
import express from 'express'
import { mapOrder } from '~/utils/sorts.js'

const app = express()
import { CONNECT_DB, GET_DB } from './config/mongodb'


const START_SERVER = () => {
  const hostname = 'localhost'
  const port = 8080

  app.get('/', async (req, res) => {
    console.log(await GET_DB().listCollections().toArray())
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Server runing  at http://${ hostname }:${ port }/`)
  })
}

// CONNECT_DB()
//   .then(() => console.log('Connected to MongoDB'))
//   .then(() => START_SERVER())
//   .catch(error => {
//     console.error(error),
//     process.exit(0)
//   })

(async () => {
  try {
    console.log('Connecting to MongoDB...')
    await CONNECT_DB()
    console.log('Connected to MongoDB')
    START_SERVER()}
  catch (error) {
    console.error(error)
    process.exit(0)
  }
})()