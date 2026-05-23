using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace MyApi.Models;

[Table("contact")]
public partial class contact
{
    [Key]
    public int id { get; set; }

    public string? name { get; set; }

    public string? address { get; set; }

    public string? phone { get; set; }
}
