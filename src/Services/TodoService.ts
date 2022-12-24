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

/**
 * Here there are anly general verbs which every request can call them.
 * write other verbs like post, delete, ... if you need in project.
 */
const requests = {
  get: <T>(url: string) => HttpServer.get<T>(url).then((response) => response.data),
};

function GetAll() {
  return requests.get<Array<ITodo>>("/84b0af24-ecec-42fe-8855-f6983fb6c5e9");
}

const TodoService = {
  GetAll,
};

export default TodoService;
