using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace ToDoRepo
{
   public class ToDoModel
    {
        public ToDoModel()
        {
        }

        [Key]
        public int ID { get; set; }
        [MaxLength(200)]
        public string Description { get; set; }
        [MaxLength(100)]
        public string Title { get; set; }
        public bool Status { get; set; }

        //Audit properties....
        [JsonIgnore]
        public DateTime? Insertedon { get; set; }
        [JsonIgnore]
        public DateTime? ModifiedOn { get; set; }
        [JsonIgnore]
        public int? InsertedBy { get; set; }
        [JsonIgnore]
        public int? ModifiedBy { get; set; }
    }
}