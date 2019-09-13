export class Utils {
	static optionsDefault = {
		method: 'GET',
		responseType: 'json',
		headers: {}
	};

	static xhr(url, options = {}) {
		return new Promise((resolve, reject) => {
			options = this.mergeDeep(this.optionsDefault, options);

			const xhr = new XMLHttpRequest();
			xhr.open(options.method, url);
			xhr.responseType = options.responseType;

			Object.keys(options.headers).forEach(header => {
				xhr.setRequestHeader(header, options.headers[header]);
			});

			xhr.onload = function(e) {
				if (this.status === 200) {
					resolve(this.response); // JSON response
				} else {
					console.error('Error en xhr', e);
					reject(this);
				}
			};
			xhr.send();
		});
	}

	static mergeDeep(target, source) {
		let output = Object.assign({}, target);
		if (this.isObject(target) && this.isObject(source)) {
			Object.keys(source).forEach(key => {
				if (this.isObject(source[key])) {
					if (!(key in target)) {
						Object.assign(output, {[key]: source[key]});
					} else {
						output[key] = this.mergeDeep(target[key], source[key]);
					}
				} else {
					Object.assign(output, {[key]: source[key]});
				}
			});
		}
		return output;
	}

	static isObject(item) {
		return (item && typeof item === 'object' && !Array.isArray(item));
	}
}

