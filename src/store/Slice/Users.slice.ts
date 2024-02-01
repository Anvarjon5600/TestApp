import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UsersType } from "../services/type";

interface UserState {
  users: UsersType[]; // Определите интерфейс для состояния
}

const initialState: UserState = {
  users: [],
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userAdd(state, action: PayloadAction<UsersType>) {
      const payload = action.payload;
      state.users = [ payload]; // Создаем новый массив, добавляя нового пользователя
    },
  },

});


export const { userAdd  } = usersSlice.actions
export default usersSlice.reducer