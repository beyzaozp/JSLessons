export default function Register() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    // console.log(formData.get("name"));
    // console.log(formData.get("password"));
    // console.log(formData.get("email"));
    // console.log(formData.get("re-password"));
    // console.log(formData.getAll("hobbies"));

    const hobbies = formData.getAll("hobbies");
    const data = Object.fromEntries(formData.entries());
    data.hobbies = hobbies;

    console.log(data);

    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="header">
        <h1>Login</h1>
        <p>Please enter your login and password!</p>
      </div>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input type="name" className="form-control" id="name" name="name" />
      </div>
      <div className="mb-3">
        <label htmlFor="surname" className="form-label">
          Surname
        </label>
        <input
          type="surname"
          className="form-control"
          id="surname"
          name="surname"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input type="email" className="form-control" id="email" name="email" />
      </div>
      <div className="mb-4">
        <div className="row">
          <div className="col col-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
          </div>
          <div className="col col-6 mb-3">
            <label htmlFor="re-password" className="form-label">
              Re-Password
            </label>
            <input
              type="re-password"
              className="form-control"
              id="re-password"
              name="re-password"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="hobbies" className="form-label">
              Hobbies
            </label>
            <div className="card card-body text-bg-light">
              <div className="form-check">
                <input
                  className="form-check-input"
                  name="hobbies"
                  id="cars"
                  type="checkbox"
                  value="cars"
                />
                <label htmlFor="cars" className="form-check-label">
                  Cars
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  name="hobbies"
                  id="books"
                  type="checkbox"
                  value="books"
                />
                <label htmlFor="books" className="form-check-label">
                  Books
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  name="hobbies"
                  type="checkbox"
                  id="cinema"
                  values="cinema"
                />
                <label htmlFor="books" className="form-check-label">
                  Cinema
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-3">
        <button className="btn btn-outline-warning me-2">Submit</button>
        <button type="reset" className="btn btn-outline-light">
          Reset
        </button>
      </div>
    </form>
  );
}
