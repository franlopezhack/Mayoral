import { products } from './dataproducts'

export default function handler(req, res) {
    const { q } = req.query

    if (q) {
        const results = products.filter((product) => {
            const { title } = product
            return title.toLowerCase().includes(q.toLowerCase())
        });
        return res.status(200).json(results)
    }
}