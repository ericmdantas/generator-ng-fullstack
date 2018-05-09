import Todo from "../../../server/api/todo/dao/todo-dao";
import dbJson from "./db.json";
import Promise from 'bluebird';

exports.setupMongoose = (mongoose, done) => {
  mongoose.Promise = Promise;  //Add promise
  mongoose.models = {};
  mongoose.connection.on("error", () => {});
  mongoose.connect(dbJson.db.test.url, done);  //pass done
}

exports.createTodos = () => {
    let _array = [];

    for (let i = 0; i < 10; i++) {
        _array.push({
          _id: "507c7f79bcf86cd7994f6c"+ (i + 10),
          todoMessage: "aaaaaaa"+i
        });
    }

    return Todo.create(_array);
}
