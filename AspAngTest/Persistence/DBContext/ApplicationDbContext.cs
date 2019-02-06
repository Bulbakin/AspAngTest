using Database.Database.Tables;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Persistence.DBContext
{
    public class ApplicationDbContext : DbContext
    {
        public string ConnectionString = @"Server = LAPTOP-19441AC2; Database = AspAngDB; Trusted_Connection = true";

        public DbSet<Books> Books { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(ConnectionString, a => a.MigrationsHistoryTable("MigrationHistory", "Internal"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Books>()
                .ToTable("Books", schema: "Service");

            modelBuilder.Entity<Books>()
                .HasKey(b => b.BookID);

            modelBuilder.Entity<Books>().HasData(
                new Books { BookID = 1, BookName = "Venäjä", Description = "Kertoo venäjästä", Price = "3000 rub" });
        }
    }
}
