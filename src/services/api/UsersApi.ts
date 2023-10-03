import { Http } from 'services/Http';
import {IUsersDto} from "data/api/models/IUserDto";

export class UsersApi {
	public static async getAll(login: string): Promise<IUsersDto> {
		return await Http.get<IUsersDto>(`https://api.github.com/search/users?q=${login}`)
	}
	// public static async add(form: IUserForm): Promise<IAddEditUserResult> {
	// 	return await Http.post<IAddEditUserResult>(`/api/users/add`, form);
	// }
	//
	// public static async edit(userId: string, form: IUserForm): Promise<IAddEditUserResult> {
	// 	return await Http.post<IAddEditUserResult>(`/api/users/${userId}/edit`, form);
	// }
	//
	// public static async getAll(): Promise<IUserFullDto[]> {
	// 	return await Http.get<IUserFullDto[]>('/api/users/all');
	// }
	//
	// public static async getCurrentUser(): Promise<IUserFullDto> {
	// 	return await Http.post<IUserFullDto>(`/api/users`);
	// }
}