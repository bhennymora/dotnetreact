using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace MyApi.Models;

[Table("message")]
public partial class message
{
    [Key]
    public int id { get; set; }

    public int contactid { get; set; }

    [Column("in")]
    public int _in { get; set; }

    [Column("message")]
    public string message1 { get; set; } = null!;
}
