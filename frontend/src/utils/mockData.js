export const mockUsers = [
  {
    id: 1,
    name: "John Doe",
    postCount: 24,
    avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
  },
  {
    id: 10,
    name: "Helen Moore",
    postCount: 19,
    avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
  },
  {
    id: 11,
    name: "Ivy Taylor",
    postCount: 17,
    avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
  },
  {
    id: 12,
    name: "Jack Anderson",
    postCount: 15,
    avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
  },
  {
    id: 13,
    name: "Kathy Thomas",
    postCount: 12,
    avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
  },
];

export const mockPosts = [
  {
    id: 246,
    userId: 1,
    user: "John Doe",
    userAvatar: `https://i.pravatar.cc/150?img=${Math.floor(
      Math.random() * 70
    )}`,
    content: "Post about ant",
    image: `https://source.unsplash.com/random/800x600?ant&sig=${Math.random()}`,
    commentCount: 15,
    timestamp: new Date(Date.now() - 1000 * 60 * 5).toISOString(),
  },
  {
    id: 161,
    userId: 1,
    user: "John Doe",
    userAvatar: `https://i.pravatar.cc/150?img=${Math.floor(
      Math.random() * 70
    )}`,
    content: "Post about elephant",
    image: `https://source.unsplash.com/random/800x600?elephant&sig=${Math.random()}`,
    commentCount: 28,
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
  {
    id: 150,
    userId: 1,
    user: "John Doe",
    userAvatar: `https://i.pravatar.cc/150?img=${Math.floor(
      Math.random() * 70
    )}`,
    content: "Post about ocean",
    image: `https://source.unsplash.com/random/800x600?ocean&sig=${Math.random()}`,
    commentCount: 9,
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
  {
    id: 370,
    userId: 1,
    user: "John Doe",
    userAvatar: `https://i.pravatar.cc/150?img=${Math.floor(
      Math.random() * 70
    )}`,
    content: "Post about monkey",
    image: `https://source.unsplash.com/random/800x600?monkey&sig=${Math.random()}`,
    commentCount: 22,
    timestamp: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
  },
  {
    id: 344,
    userId: 1,
    user: "John Doe",
    userAvatar: `https://i.pravatar.cc/150?img=${Math.floor(
      Math.random() * 70
    )}`,
    content: "Post about ocean",
    image: `https://source.unsplash.com/random/800x600?beach&sig=${Math.random()}`,
    commentCount: 11,
    timestamp: new Date(Date.now() - 1000 * 60 * 120).toISOString(),
  },
  {
    id: 952,
    userId: 10,
    user: "Helen Moore",
    userAvatar: `https://i.pravatar.cc/150?img=${Math.floor(
      Math.random() * 70
    )}`,
    content: "Post about zebra",
    image: `https://source.unsplash.com/random/800x600?zebra&sig=${Math.random()}`,
    commentCount: 19,
    timestamp: new Date(Date.now() - 1000 * 60 * 180).toISOString(),
  },
];

export const mockComments = [
  {
    id: 3893,
    postId: 150,
    user: "Quinn Scott",
    content: "Old comment",
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
  },
  {
    id: 4791,
    postId: 150,
    user: "Olivia Lewis",
    content: "Boring comment",
    timestamp: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
  },
  {
    id: 5123,
    postId: 161,
    user: "Nathan Clark",
    content: "Interesting observation!",
    timestamp: new Date(Date.now() - 1000 * 60 * 45).toISOString(),
  },
  {
    id: 6234,
    postId: 161,
    user: "Mona Harris",
    content: "I disagree with this",
    timestamp: new Date(Date.now() - 1000 * 60 * 50).toISOString(),
  },
  {
    id: 6235,
    postId: 161,
    user: "Paul Walker",
    content: "Can you explain more?",
    timestamp: new Date(Date.now() - 1000 * 60 * 55).toISOString(),
  },
];
