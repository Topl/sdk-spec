# Proposer Tests

## Propose Height Range Tests

### Test Cases

> TODO: In english detail the test cases

### Test Vectors

The test vectors represent the inputs and outputs (for the test scenarios above) of the following language-agnostic pseudo code:

```
proposition = Quivr.Proposer.proposeHeight(chain, min, max)
```

```json
[
  {
    "inputs": {
      "chain": "test",
      "min": 8,
      "max": 12
    },
    "outputs": {
      "proposition": {
        "contextualHeightLock": {
            "chain": "test",
            "min": 8,
            "max": 12
        }
      }
    },
    "errors": []
  },
  {
    "inputs": {
      "chain": "test",
      "min": 1,
      "max": 9223372036854775807
    },
    "outputs": {
      "proposition": {
        "contextualHeightLock": {
          "chain": "test",
          "min": 1,
          "max": 9223372036854775807
        }
      }
    },
    "errors": []
  },
  {
    "inputs": {
      "chain": "test",
      "min": 8,
      "max": 8
    },
    "outputs": {
      "proposition": {
        "contextualHeightLock": {
          "chain": "test",
          "min": 8,
          "max": 8
        }
      }
    },
    "errors": []
  },
  {
    "inputs": {
      "chain": "test",
      "min": 0,
      "max": 9223372036854775808
    },
    "outputs": {},
    "errors": [
      {"msg": "min is out of range. Acceptable values are 1 to 9223372036854775807 inclusive."},
      {"msg": "max is out of range. Acceptable values are 1 to 9223372036854775807 inclusive."}
    ]
  },
  {
    "inputs": {
      "chain": "test",
      "min": 8,
      "max": 7
    },
    "outputs": {},
    "errors": [
      {"msg": "max must be greater or equal to min."}
    ]
  },
  {
    "inputs": {
      "chain": "test",
      "min": 8,
      "max": -1
    },
    "outputs": {},
    "errors": [
      {"msg": "max is out of range. Acceptable values are 1 to 9223372036854775807 inclusive."},
      {"msg": "max must be greater or equal to min."}
    ]
  },
  {
    "inputs": {},
    "outputs": {},
    "errors": [
      {"msg": "The required parameter chain is missing."},
      {"msg": "The required parameter min is missing."},
      {"msg": "The required parameter max is missing."}
    ]
  },
  {
    "inputs": {
      "chain": "test",
      "min": 0
    },
    "outputs": {},
    "errors": [
      {"msg": "min is out of range. Acceptable values are 1 to 9223372036854775807 inclusive."},
      {"msg": "The required parameter max is missing."}
    ]
  }
]
```
