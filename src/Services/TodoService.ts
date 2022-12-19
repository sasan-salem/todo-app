import HttpServer from "../Common/HttpServer";
import ITodo from "../Models/ITodo";

//"/c78cfda4-ac1c-49ca-a3bf-9945dec7f190"
//"/0c131182-a6ef-4083-9bbd-e57f67e7b399"
//"/todos?userId=1"

function GetAll() {
    return HttpServer.get<Array<ITodo>>("/0c131182-a6ef-4083-9bbd-e57f67e7b399");
}

const TodoService = {
    GetAll
};

export default TodoService;
