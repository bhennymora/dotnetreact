using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MyApi.Data;
using MyApi.Models;

namespace MyApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MessagesController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Messages
        [HttpGet]
        public async Task<ActionResult<IEnumerable<message>>> Getmessages()
        {
            return await _context.messages.ToListAsync();
        }

        // GET: api/Messages/5
        [HttpGet("{id}")]
        public async Task<ActionResult<message>> Getmessage(int id)
        {
            var message = await _context.messages.FindAsync(id);

            if (message == null)
            {
                return NotFound();
            }

            return message;
        }

        // PUT: api/Messages/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putmessage(int id, message message)
        {
            if (id != message.id)
            {
                return BadRequest();
            }

            _context.Entry(message).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!messageExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Messages
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<message>> Postmessage(message message)
        {
            _context.messages.Add(message);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getmessage", new { id = message.id }, message);
        }

        // DELETE: api/Messages/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletemessage(int id)
        {
            var message = await _context.messages.FindAsync(id);
            if (message == null)
            {
                return NotFound();
            }

            _context.messages.Remove(message);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool messageExists(int id)
        {
            return _context.messages.Any(e => e.id == id);
        }
    }
}
