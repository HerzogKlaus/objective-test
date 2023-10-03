import {IUserDto, IUsersDto} from "data/api/models/IUserDto";
import {UsersApi} from "services/api/UsersApi";
import {ActionContext} from "vuex";
import {IState} from "store";

export interface IUsersState {
	users: IUserDto[];
}

export default {
	state: (): IUsersState => ({
		users: []
	}),
	getters: {
		allUsers(state: IUsersState): IUserDto[] {
			return state.users;
		}
	},
	mutations: {
		setUsers(state: IUsersState, payload: IUserDto[]): void {
			state.users = payload;
		}
	},
	actions: {
		async getUsers({commit}: ActionContext<IUsersState, IState>, payload: string): Promise<void> {
			if (payload) {
				const {items}: IUsersDto = await UsersApi.getAll(payload);
				commit('setUsers', items);
			} else {
				commit('setUsers', []);
			}
		}
	}
}