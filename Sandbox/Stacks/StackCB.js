/**
 * Represents a collection of items.
 * @constructs Stack
 * @property {boolean} IsEmpty Indicates if the stack is empty.
 * @property {number} Length Indicates the size of the stack, how many items it currently has.
 */
class Stack {
	#index = 0;
	#stack = [];

	IsEmpty = true;
	Length = 0;

	/**
	 * Removes the top item from the stack.
	 * @returns {any} The removed item.
	 */
	Pop() {
		let poppedItem = undefined;

		if (this.#index > 0) {
			const item = this.#stack[--this.#index];

			this.#stack.length = this.#index;

			this.IsEmpty = this.#index === 0;

			this.Length = this.#index;

			poppedItem = item;
		}

		return poppedItem;
	}

	/**
	 * Adds an item to the top of the stack.
	 * @param {any} item The item to be added to the top of the stack. It will not be added to the stack should it be undefined or null.
	 * @returns {number} The size of the stack, how many items it currently has.
	 */
	Push(item) {
		if ((item !== undefined) &&
			(item !== null)) {

			this.#stack[this.#index++] = item;

			this.IsEmpty = this.#index === 0;
		}

		return this.Length = this.#stack.length;
	}

	/**
	 * @returns The item on top of the stack.
	 */
	Top() {
		return this.#stack[this.#index - 1];
	}
}

module.exports = Stack;
