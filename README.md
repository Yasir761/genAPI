
# GENAPI

A lightweight CLI tool to scaffold **REST** or **GraphQL** APIs with Express.js — in seconds.


## Features


- Generate **REST API** boilerplate
- Generate **GraphQL API** boilerplate
- Interactive prompts OR direct CLI flags
- Ready-to-use folder structures
- Professional boilerplates with `Express`, `Apollo`, and MongoDB setup

## Installation

Install genapi with npm

```bash
npm install -g genapi

```

## Usage

Interactive mode
```bash
genapi
```

Direct mode
```bash
genapi my-api --framework express --type rest
genapi my-api --framework express --type graphql

```
    
## Example Output

```javascript
my-api/
├── server.js
├── schema/
│   ├── resolvers.js
│   └── typeDefs.js
└── package.json

```


## Contributing

Contributions are always welcome!  

Please read our [Contributing Guide](CONTRIBUTING.md) to get started and make your contributions effective.  

Also, adhere to the project's [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming community for all contributors.


## License

[MIT](https://choosealicense.com/licenses/mit/)

