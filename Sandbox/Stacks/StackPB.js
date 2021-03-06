/**
 * Represents a collection of items.
 * @constructs Stack
 * @property {boolean} IsEmpty Indicates if the stack is empty.
 * @property {number} Length Indicates the size of the stack, how many items it currently has.
 */
function Stack() {
	this.index = 0;
	this.isEmpty = true;
	this.length = 0;
	this.stack = [];
}

Stack.prototype = {
	get IsEmpty() {
		return this.isEmpty;
	},

	get Length() {
		return this.length;
	}
}

/**
 * Removes the top item from the stack.
 * @returns {*} The removed item.
 */
Stack.prototype.Pop = function() {
	let poppedItem = undefined;

	if (this.index > 0) {
		const item = this.stack[--this.index];

		this.stack.length = this.index;

		this.isEmpty = this.index === 0;

		this.length = this.index;

		poppedItem = item;
	}

	return poppedItem;
};

/**
 * Adds an item to the top of the stack.
 * @param {*} item The item to be added to the top of the stack. It will not be added to the stack should it be undefined or null.
 * @returns {number} The size of the stack, how many items it currently has.
 */
Stack.prototype.Push = function(item) {
	if ((item !== undefined) &&
	    (item !== null)) {

		this.stack[this.index++] = item;

		this.isEmpty = this.index === 0;
	}

	return this.length = this.stack.length;
};

/**
 * @returns The item on top of the stack.
 */
Stack.prototype.Top = function () {
	return this.stack[this.index - 1];
}

module.exports = Stack;
