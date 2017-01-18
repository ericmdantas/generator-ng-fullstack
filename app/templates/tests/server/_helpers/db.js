import Todo from "../../../server/api/todo/dao/todo-dao";
import dbJson from "./db.json";

exports.setupMongoose = (mongoose) => {
  mongoose.models = {};
  mongoose.connect(dbJson.db.test.url);
  mongoose.connection.on("error", () => {});
}

exports.createTodos = () => {
    let _array = [];

    for (let i = 0; i < 10; i++) {
        _array.push({_id: "507c7f79bcf86cd7994f6c"+ (i + 10), todoMessage: "aaaaaaa"+i});
    }

    return Todo.create(_array);
}
