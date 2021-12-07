export const helloRoute = {
    path : '/about',
    method : 'get',
    handler : (req, res) => {
        res.status(200).json({message : 'Hello from express!'})
    }
}