export type ItemType = {
  id: number;
  name: string;
  image: string;
  players: number;
};

const TopGames: ItemType[] = [
  {
    id: 1,
    name: "Fortnite",
    image: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/dfd22599626e624c9d249420c5a24ef8.jpg",
    players: 2000000,
  },
  {
    id: 2,
    name: "PlayerUnknown's Battlegrounds (PUBG)",
    image: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/d91067eb078b01d8b93463d51b000ef6.jpg",
    players: 1500000,
  },
  {
    id: 3,
    name: "Call of Duty: Modern Warfare",
    image: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/31c3ffeb9fdbfc0ee713ad7385c3867c.jpg",
    players: 1000000,
  },
  {
    id: 4,
    name: "Apex Legends",
    image: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/60b4471e1fb1e8e0d266d97071669ccb.jpg",
    players: 900000,
  },
  {
    id: 5,
    name: "League of Legends",
    image: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/fa1fac878339bf91f624460e5f8f63fb.jpg",
    players: 800000,
  },
  {
    id: 6,
    name: "Counter-Strike: Global Offensive (CS:GO)",
    image: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/6f0f8be92a89a930b05638fff984a66f.jpg",
    players: 700000,
  },
  {
    id: 7,
    name: "Minecraft",
    image: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/b789ce7f0c28e1831a5b0a1998e38d1e.jpg",
    players: 600000,
  },
  {
    id: 8,
    name: "Grand Theft Auto V",
    image: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero_thumb/5c645cc19a53ac1dfb155840d886050c.jpg",
    players: 500000,
  },
  {
    id: 9,
    name: "Tom Clancy's Rainbow Six Siege",
    image: "https://cdn2.steamgriddb.com/file/sgdb-cdn/hero_thumb/7949e456002b28988d38185bd30e77fd.jpg",
    players: 400000,
  },
  {
    id: 10,
    name: "Overwatch",
    image: "https://cdn2.steamgriddb.com/file/sgdb-cdn/thumb/e0285fc360f86cd80977c1e320872adc.jpg",
    players: 300000,
  },
];

export default TopGames;
