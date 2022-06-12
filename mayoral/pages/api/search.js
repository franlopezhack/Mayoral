export default async function handler(req, res) {
    const title = req.query.title;
    const getTitle = await fetch(
        `http://localhost:3000/api/products/${title}`
    );
    const data = await getTitle.json();
    res.status(200).json(data);
    console.log(title)
} 