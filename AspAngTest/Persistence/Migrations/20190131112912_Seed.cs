using Microsoft.EntityFrameworkCore.Migrations;

namespace Persistence.Migrations
{
    public partial class Seed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                schema: "Service",
                table: "Books",
                columns: new[] { "BookID", "BookName", "Description", "Price" },
                values: new object[] { 1, "Venäjä", "Kertoo venäjästä", "3000 rub" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                schema: "Service",
                table: "Books",
                keyColumn: "BookID",
                keyValue: 1);
        }
    }
}
