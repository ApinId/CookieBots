export default function handler(req, res) {
  res.status(200).json({
    message: "RAWR! Wookie API is working!",
    mood: "galactic happy",
    poweredBy: "Pookie Force"
  });
}
