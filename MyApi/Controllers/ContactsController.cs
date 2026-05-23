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
    public class ContactsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public ContactsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Contacts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<contact>>> Getcontacts()
        {
            return await _context.contacts.ToListAsync();
        }

        // GET: api/Contacts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<contact>> Getcontact(int id)
        {
            var contact = await _context.contacts.FindAsync(id);

            if (contact == null)
            {
                return NotFound();
            }

            return contact;
        }

        // PUT: api/Contacts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putcontact(int id, contact contact)
        {
            if (id != contact.id)
            {
                return BadRequest();
            }

            _context.Entry(contact).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!contactExists(id))
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

        // POST: api/Contacts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<contact>> Postcontact(contact contact)
        {
            _context.contacts.Add(contact);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getcontact", new { id = contact.id }, contact);
        }

        // DELETE: api/Contacts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deletecontact(int id)
        {
            var contact = await _context.contacts.FindAsync(id);
            if (contact == null)
            {
                return NotFound();
            }

            _context.contacts.Remove(contact);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool contactExists(int id)
        {
            return _context.contacts.Any(e => e.id == id);
        }
    }
}
