using System;
using System.Collections.Generic;
using System.Text;

namespace ToDoRepo
{
    public interface IToDo
    {
        List<ToDoModel> Get();
        ToDoModel Get(int id);
        ToDoModel Create(ToDoModel T);
        ToDoModel Edit(int id, ToDoModel T);
        bool Delete(int id);
    }
}