export class Http {
	public static async get<TResponse>(url: string): Promise<TResponse> {
		const response = await fetch(url, {
			headers: {
				'Accept': 'application/json'
			},
		});

		const object = await response.json();

		return object as TResponse;
	}
}