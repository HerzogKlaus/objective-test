import { createStore } from 'vuex'
import users, {IUsersState} from "./modules/UsersModule";

export interface IState {
	users: IUsersState
}

export default createStore<IState>({
	modules: {
		users
	}
})