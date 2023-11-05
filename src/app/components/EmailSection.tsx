interface EmailSection {
    cols: number;
    rows: number
}
export default function EmailSection() {
  return (
    <section className='grid md:grid-cols-2 my-12 py-24 gap-4 rounded-xl bg-purple-100 px-12'>
      <div>
        <h5>Hello</h5>
        <p>Hi</p>
      </div>
      <form className='flex flex-col gap-2'>
        <label htmlFor='email' className='block'>
          Email
        </label>
        <input
          type='email'
          id='email'
          required
          placeholder='example@domain.com'
          className='p-2 rounded-lg'
        />
        <label htmlFor='Subject' className='block'>
          Title
        </label>
        <input
          type='text'
          id='title'
          required
          placeholder='ex. Saying hello'
          className='p-2 rounded-lg'
        />
          <label htmlFor='message'>Message</label>
          <textarea name='message' id='message' className="rounded-lg p-2" 
          cols={10} rows={4}></textarea>
          <button type="submit" className="mt-3 bg-white rounded-md p-2 font-semibold text-sm hover:bg-black hover:text-white">Send Message</button>
      </form>
    </section>
  );
}
