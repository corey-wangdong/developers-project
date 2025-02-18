export default (req, res) => {
  console.log('req---', req);
  console.log('res---', res);
  res.status(200).json({ message: 'Hello from Vercel Serverless!' + JSON.stringify(req.query) });
};