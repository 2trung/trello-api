import { StatusCodes } from 'http-status-codes'
import ApiError from '~/utils/ApiError'

const createNew = async (req, res, next) => {
  try {

    // console.log(req.body)
    // throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, 'Error from Controller')
    res.status(StatusCodes.CREATED).json({ message : 'Post from Controller' })
  } catch (error) { next(error) }
}

export const boardController = {
  createNew
}
