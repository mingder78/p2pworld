# 🌐 p2pworld

Welcome to **p2pworld** — a modern, modular, and developer-friendly peer-to-peer (P2P) networking library for TypeScript.

---

## 🚀 Features

- **TypeScript-first:** Written in and for TypeScript, with full type safety.
- **Modular Design:** Easily extend and customize core functionality.
- **Peer Discovery:** Efficient peer finding and connection management.
- **Secure Communication:** Built-in support for encrypted channels.
- **Extensive Documentation:** Auto-generated with [TypeDoc](https://typedoc.org/).

---

## 📦 Installation

```sh
npm install p2pworld
```

---

## 🛠️ Usage Example

```ts
import { P2PNode } from 'p2pworld';

const node = new P2PNode({ port: 9000 });

node.on('peer:connect', (peer) => {
  console.log('Connected to peer:', peer.id);
});

node.start();
```

---

## 📚 Documentation

- **API Docs:** [View the latest documentation](./docs/index.html)  
  (or visit the [GitHub Pages site](https://YOUR_GITHUB_USERNAME.github.io/p2pworld/) if enabled)

---

## 🧑‍💻 Development

Clone the repo and install dependencies:

```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/p2pworld.git
cd p2pworld
npm install
```

Generate documentation:

```sh
npm run docs
```

Run tests:

```sh
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Please open issues and pull requests.

---

## 📄 License

[MIT](./LICENSE)

---

## ⭐️ Show Your Support

If you like this project, please star the repo and share it with others!

---