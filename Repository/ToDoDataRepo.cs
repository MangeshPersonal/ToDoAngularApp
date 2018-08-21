using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ToDoRepo
{
    public class ToDoDataRepo : IToDo, IDisposable
    {
        AppDbContext ctx;

        public ToDoDataRepo(AppDbContext _ctx)
        {
            ctx = _ctx;
        }
        /// <summary>
        /// Added By Mangesh
        /// </summary>
        /// <param name="T"></param>
        /// <returns></returns>
        public ToDoModel Create(ToDoModel T)
        {
            try
            {
                ctx.ToDo.Add(T);
                int i = ctx.SaveChanges();
                if (i > 0)
                {
                    return T;
                }
                else
                {
                    return T;
                }

            }
            catch (Exception )
            {
                return T;
            }
        }


        /// <summary>
        /// Added By Mangesh
        /// </summary>
        /// <param name="id">id of the element to be updated </param>
        /// <param name="T">Data TO be Updated </param>
        /// <returns></returns>
        public ToDoModel Edit(int id, ToDoModel T)
        {
            try
            {
                var TodoItem = ctx.ToDo.Find(id);
                if (TodoItem != null)
                {
                    TodoItem.Description = T.Description;
                    TodoItem.Title = T.Title;
                    TodoItem.Status = T.Status;
                    ctx.Update(TodoItem);
                    ctx.SaveChanges();
                    return TodoItem;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception)
            {

                return T;
            }

        }

        /// <summary>
        /// Added By Mangesh
        /// </summary>
        /// <param name="id"> id of the To Do Item to be deleted...</param>
        /// <returns></returns>
        public bool Delete(int id)
        {
            try
            {
                var item = Get(id);
                if (item != null)
                {
                    ctx.ToDo.Remove(item);
                    return ctx.SaveChanges() > 0 ? true : false;
                }
                else { return false; }
            }
            catch (Exception)
            {

                return false;
            }

        }

      

        /// <summary>
        /// Added By Mangesh
        /// </summary>
        /// <returns>returns All the element in the ToDoList</returns>
        public List<ToDoModel> Get()
        {
            return ctx.ToDo.ToList();
        }


        /// <summary>
        /// Added By Mangesh
        /// </summary>
        /// <param name="id">returns the element in the database </param>
        /// <returns></returns>
        public ToDoModel Get(int id)
        {
            var item = ctx.ToDo.Find(id);
            return item;
        }

        /// <summary>
        /// Dispose the Context....
        /// </summary>
        public void Dispose()
        {
            ctx.Dispose();
        }
    }
}