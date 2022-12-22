import { AxiosError } from "axios";
import HttpServer from "../Common/HttpServer";
import ITodo from "../Models/ITodo";


HttpServer.interceptors.response.use(
  async (response) => response,
  (error: AxiosError) => {
    console.log(error);
    return Promise.reject(error);
  }
);

const requests = {
  get: <T>(url: string) => HttpServer.get<T>(url).then((response) => response.data),
};

function GetAll() {
  return requests.get<Array<ITodo>>("/0c131182-a6ef-4083-9bbd-e57f67e7b399");
}

const TodoService = {
  GetAll,
};

export default TodoService;
