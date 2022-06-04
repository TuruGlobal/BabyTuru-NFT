// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    "name"  : "BT8 Pacman",
    "image" : "https://gateway.btfs.io/btfs/QmTXU8YiXsc5RTjP4cRowWdr2Yg7g4VwoHL1mWVok8EnLu"
  })
}
