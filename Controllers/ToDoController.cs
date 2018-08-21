using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ToDoRepo;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ToDoAPI.Controllers
{
    [Route("api/[controller]")]
    public class ToDoController : Controller
    {
        IToDo toRepo;
        public ToDoController(IToDo _toRepo)
        {
            toRepo = _toRepo;
        }
        // GET: api/values
        [HttpGet]
        public IEnumerable<ToDoModel> Get()
        {
            return toRepo.Get();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ToDoModel Get(int id)
        {
               return toRepo.Get(id);
        }

        // POST api/values
        [HttpPost]
        public ToDoModel Post([FromBody]ToDoModel Todo)
        {

            return toRepo.Create(Todo);

        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody]ToDoModel Todo)
        {
            var item = toRepo.Get(id);
            if (item == null)
            {
                return NotFound(Todo);
            }
            else
            {
                return Ok(toRepo.Edit(id, Todo));
            }
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var item = toRepo.Get(id);
            if (item == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(toRepo.Delete(id));
            }
        }
    }
}