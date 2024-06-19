import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    try {
      const url = "https://666d291e7a3738f7cacba6c7.mockapi.io/curd";

      const response = await axios.post(url, data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const readData = createAsyncThunk(
  "readData",
  async (_, { rejectWithValue }) => {
    try {
      const url = "https://666d291e7a3738f7cacba6c7.mockapi.io/curd";

      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      const url = `https://666d291e7a3738f7cacba6c7.mockapi.io/curd/${id}`;

      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    try {
      const url = `https://666d291e7a3738f7cacba6c7.mockapi.io/curd/${data.id}`;

      const response = await axios.put(url,data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDetail = createSlice({
  name: "userDetail",
  initialState: { users: [], loading: false, err: null },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.err = action.payload.message;
        state.loading = false;
      });
    builder
      .addCase(readData.pending, (state) => {
        state.loading = true;
      })
      .addCase(readData.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(readData.rejected, (state, action) => {
        state.err = action.payload;
        state.loading = false;
      });
    builder
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);

        const { id } = action.payload;
        if (id) {
          state.users = state.users.filter((user) => user.id !== id);
        }
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.err = action.payload;
        state.loading = false;
      });
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action.payload);
      state.users = state.users.map((ele)=>ele.id === action.payload.id ? action.payload : ele) 

      })
      .addCase(updateUser.rejected, (state, action) => {
        state.err = action.payload;
        state.loading = false;
      });
  },
});

export default userDetail.reducer;
