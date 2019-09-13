export class Cache {
	static data = {};

	static set(key, value) {
		this.data[key] = value;
	}

	static get(key) {
		return this.data[key];
	}
}
