# Testing Studies with Vitest

A personal learning project for studying automated testing concepts using [Vitest](https://vitest.dev/) and TypeScript.

## Stack

- **Vitest** — fast unit test runner (Vite-native)
- **TypeScript** — typed JavaScript
- **tsx** — runs TypeScript directly without compiling

## Getting Started

```bash
npm install
npm test
```

To run in watch mode:

```bash
npx vitest --watch
```

## Project Structure

```
src/
  sum.ts               # Simple sum function with NaN guard
  sumTests.ts          # Tests for sum function
  CourseMapper.ts      # Data mapper (API <-> Domain)
  CourseMapper.test.ts # Tests for CourseMapper
```

## Concepts Covered

### Basic test structure

Vitest uses `test` and `it` (they are aliases) to define test cases, and `expect` for assertions.

```ts
import { expect, test, it } from 'vitest';

test('adds 1 + 1 to equal 2', () => {
  expect(sum(1, 1)).toBe(2)
})
```

### `toBe` vs `toEqual`

| Matcher    | Use for                              |
|------------|--------------------------------------|
| `toBe`     | Primitive values (numbers, strings)  |
| `toEqual`  | Objects and arrays (deep equality)   |

### Data Mappers

The `CourseMapper` demonstrates a common real-world pattern: converting between API response shapes and domain models.

```ts
// API shape → Domain shape
CourseMapper.toDomain({ course: { name: 'TypeScript' } })
// returns: { name: 'TypeScript' }

// Domain shape → API shape
CourseMapper.toApi({ name: 'TypeScript' })
// returns: { course: { name: 'TypeScript' } }
```

## Topics to Explore Next

- `describe` blocks for grouping tests
- `beforeEach` / `afterEach` hooks
- Mocking with `vi.fn()` and `vi.mock()`
- Async tests
- Test coverage (`vitest --coverage`)
- Integration tests
