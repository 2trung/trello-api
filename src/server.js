/* eslint-disable no-console */
import express from 'express'
const app = express()
import exitHook from 'exit-hook'
import { CONNECT_DB, CLOSE_DB, GET_DB } from './config/mongodb'


const START_SERVER = () => {
  const hostname = 'localhost'
  const port = 8080

  app.get('/', async (req, res) => {
    console.log(await GET_DB().listCollections().toArray())
    res.end('<h1>Hello World!</h1><hr>')
  })

  app.listen(port, hostname, () => {
    console.log(`Server runing  at http://${ hostname }:${ port }/`)
  })

  exitHook(() => {
    console.log('Server is shutting down...')
    CLOSE_DB()
  })

}

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