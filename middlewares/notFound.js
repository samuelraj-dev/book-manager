const notFound = (req, res, next) => {
    res.status(404).send('Route not found...')
}

export default notFound