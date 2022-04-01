export class NotFoundError extends Error { 
	constructor (message, originalError) {
		super(message)
		
		this.name = this.constructor.name

		this.originalError = originalError

		this.errorParsed = true
		
		Error.captureStackTrace(this, this.constructor);
	}
}

export class DeniedError extends Error { 
	constructor (message, originalError) {
		super(message)
		
		this.name = this.constructor.name

		this.originalError = originalError

		this.errorParsed = true

		Error.captureStackTrace(this, this.constructor);
	}
}

export function _errorToCustomError(error) {

	if (error == null) return

	if (error.errorParsed) return error
		
	switch (error.code) {
		case 'ENOENT': 
			return new NotFoundError(`Cound not find file '${error.path}'`, error)
	}
}