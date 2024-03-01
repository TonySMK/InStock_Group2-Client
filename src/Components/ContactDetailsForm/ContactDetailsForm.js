function ContactDetailsForm () {
    return (
      <section>
        <div>
          <h2>Contact Details</h2>
        </div>
        <div>
          <label>Contact Name</label>
          <input
            type="text"
            name="contac_name"
            placeholder="Contact Name"
          />
          <label>Position</label>
          <input
            type="text"
            name="position"
            placeholder="Position"
          />
          <label>Phone Number</label>
          <input 
            type="text" 
            name="phone_number" 
            placeholder="Phone Number" />
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
          />
        </div>
      </section>
    );
}

export default ContactDetailsForm;