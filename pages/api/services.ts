// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next'
import { services } from '../../data'
export default (req: NextApiRequest, res: NextApiResponse) => {

   console.log('API', services)

   res.status(200).json({ services })
}
