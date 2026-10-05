# ip-to-binary

A lightweight command-line tool, written in Node.js, that validates an IPv4 address and converts it to binary notation.

## Features

- Converts each octet of an IPv4 address to its 8-bit binary form
- Outputs both dotted-binary and continuous 32-bit representations
- Validates input strictly and rejects malformed addresses with a clear error message
- No external dependencies: runs on Node.js alone

## Requirements

- [Node.js](https://nodejs.org/) (LTS version recommended)

## Installation

```bash
git clone https://github.com/mahir-h/ip-to-binary.git
cd ip-to-binary
```

## Usage

```bash
node index.js <IPv4-address>
```

### Example

```bash
node index.js 192.168.10.5
```

```
IP: 192.168.10.5
Binary: 11000000.10101000.00001010.00000101
32 bits: 11000000101010000000101000000101
```

### Invalid input

```bash
node index.js 10.0.0.256
```

```
Invalid IPv4 address: 10.0.0.256
```

If no address is provided, the tool prints usage instructions:

```
Usage: node index.js <IPv4>
```

## Validation rules

An address is accepted only if it meets all of the following:

| Rule | Rejected example |
|---|---|
| Exactly four parts separated by dots | `1.2.3`, `1.2.3.4.5` |
| Each part contains digits only (1–3 digits) | `abc.1.2.3`, `1.2.3.x`, `-1.2.3.4` |
| Each part is between 0 and 255 | `10.0.0.256` |
| No empty parts | `1..2.3` |

## Exit codes

| Code | Meaning |
|---|---|
| `0` | Conversion completed successfully |
| `1` | Missing or invalid input |

## How it works

1. Reads the address from the command-line arguments (`process.argv`).
2. Validates the address against the rules above.
3. Splits the address into four octets and converts each one to binary by comparing it against the bit values 128, 64, 32, 16, 8, 4, 2 and 1.
4. Joins the results with dots for the dotted-binary output, and without separators for the 32-bit output.

## Project structure

```
ip-to-binary/
├── index.js       # Validation, conversion and CLI output
├── package.json   # Project metadata
└── README.md
```

## Roadmap

- [ ] Automated tests for valid and invalid inputs
- [ ] Reverse conversion (binary to dotted-decimal)
- [ ] Support for CIDR notation (e.g. `192.168.10.0/24`)

## Author

**Mahir**: [GitHub](https://github.com/mahir-h)
