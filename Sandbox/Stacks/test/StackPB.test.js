'use strict';

const Stack = require('../StackPB');

let stack;

describe('Newly created Stack', () => {
	beforeAll(() => stack = new Stack());

	test('IsEmpty should be true', () => expect(stack.IsEmpty).toBe(true));

	test('Length should be 0', () => expect(stack.Length).toBe(0));

	test('Pop() should return undefined', () => expect(stack.Pop()).toBeUndefined());

	test('Push() should return 0', () => expect(stack.Push()).toBe(0));

	test('Top() should return undefined', () => expect(stack.Top()).toBeUndefined());
});

describe('Loaded Stack', () => {
	const stacksLength = Math.ceil(Math.random() * 1000);

	const stacksTopItem = "Top item!";

	beforeAll(() => {
		stack = new Stack();

		for (let item = 0; item < stacksLength - 1; item++) {
			stack.Push(item);
		}

		stack.Push(stacksTopItem);
	});

	test('IsEmpty should be false', () => expect(stack.IsEmpty).toBe(false));

	test(`Length should be ${stacksLength}`, () => expect(stack.Length).toBe(stacksLength));

	test(`Top() should return "${stacksTopItem}"`, () => expect(stack.Top()).toBe(stacksTopItem));

	test(`Length should be ${stacksLength}`, () => expect(stack.Length).toBe(stacksLength));

	test(`Pop() should return "${stacksTopItem}"`, () => expect(stack.Pop()).toBe(stacksTopItem));

	test(`Length should be ${stacksLength - 1}`, () => expect(stack.Length).toBe(stacksLength - 1));

	test('IsEmpty should be false', () => expect(stack.IsEmpty).toBe(false));

	test(`Push() should return ${stacksLength}`, () => expect(stack.Push(stacksTopItem)).toBe(stacksLength));

	test(`Length should be ${stacksLength}`, () => expect(stack.Length).toBe(stacksLength));

	test('IsEmpty should be false', () => expect(stack.IsEmpty).toBe(false));

	test(`Push() should return ${stacksLength}`, () => expect(stack.Push(undefined)).toBe(stacksLength));

	test(`Push() should return ${stacksLength}`, () => expect(stack.Push(null)).toBe(stacksLength));

	test(`Push() should return ${stacksLength + 1}`, () => expect(stack.Push(stacksTopItem)).toBe(stacksLength + 1));

	test(`Top() should return "${stacksTopItem}"`, () => expect(stack.Top()).toBe(stacksTopItem));

	test(`Length should be ${stacksLength + 1}`, () => expect(stack.Length).toBe(stacksLength + 1));

	test(`Pop() should return "${stacksTopItem}"`, () => expect(stack.Pop()).toBe(stacksTopItem));

	test('Top() should return 0', () => {
		for (let index = stacksLength; index > 1; index--) {
			stack.Pop();
		}

		expect(stack.Top()).toBe(0);
	});

	test('IsEmpty should be true', () => {
		stack.Pop();

		expect(stack.IsEmpty).toBe(true);
	});

	test('Length should be 0', () => expect(stack.Length).toBe(0));

	test('Pop() should return undefined', () => expect(stack.Pop()).toBeUndefined());

	test('Push() should return 0', () => expect(stack.Push()).toBe(0));

	test('Top() should return undefined', () => expect(stack.Top()).toBeUndefined());
});
