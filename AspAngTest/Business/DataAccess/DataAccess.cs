using Database.Database.Tables;
using Microsoft.AspNetCore.Mvc;
using Persistence.DBContext;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Business.DataAccess
{
    public class DataAccess
    {
        ApplicationDbContext db = new ApplicationDbContext();

        public IEnumerable<Books> getBooks()
        {
            return db.Books.ToList();
        }

        public int addBook(Books book)
        {
            db.Books.Add(book);
            db.SaveChanges();

            return 1;
        }
    }
}
