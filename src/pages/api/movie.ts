
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  data: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    console.log(req.query)
   const result = await fetch(
`https://api.themoviedb.org/3/movie/${req.query.movie_id}?api_key=${process.env.API_KEY}&language=en-US`)
const data = await result.json()

  res.status(200).json({ data })
}