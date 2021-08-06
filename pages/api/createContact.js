export default function handler(req, res) {
  console.log("ENTRE AL BACK");
  console.log("req.body",req.body);

  res.status(200).json({ message: "success", statusCode: 200 });
}
