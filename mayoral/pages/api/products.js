// Next.js API route supporthttps://nextjs.org/docs/api-routes/introduction
import { products } from "./dataproducts"

export default function handler(req, res) {
  res.status(200).json(products)
}
