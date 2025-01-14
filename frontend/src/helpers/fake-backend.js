export { fakeBackend };

function fakeBackend() {
  let users = [
    {
      id: 1,
      username: "test@gmail.com",
      password: "test",
      firstName: "Test",
      lastName: "User",
    },
    {
      id: 2,
      username: "joekaranja@gmail.com",
      password: "joe123",
      firstName: "Joe",
      lastName: "Karanja",
    },
  ];

  let realFetch = window.fetch;
  window.fetch = function (url, opts) {
    return new Promise((resolve, reject) => {
      // Wrap in timeout to simulate server API call delay
      setTimeout(handleRoute, 500);

      function handleRoute() {
        switch (true) {
          case url.endsWith("/login") && opts.method === "POST":
            return authenticate();
          case url.endsWith("/users") && opts.method === "GET":
            return getUsers();
          default:
            // Pass through any requests not handled above to the real backend
            return realFetch(url, opts)
              .then((response) => resolve(response))
              .catch((error) => reject(error));
        }
      }

      // Route functions

      function authenticate() {
        const { username, password } = body();
        const user = users.find(
          (x) => x.username === username && x.password === password
        );

        if (!user)
          return error({ message: "Username or password is incorrect" });

        return ok({
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          token: "fake-jwt-token",
        });
      }

      function getUsers() {
        // Return all users for demo purposes
        return ok(users);
      }

      // Helper functions

      function ok(body) {
        resolve({
          ok: true,
          text: () => Promise.resolve(JSON.stringify(body)),
        });
      }

      function unauthorized() {
        resolve({
          status: 401,
          text: () =>
            Promise.resolve(JSON.stringify({ message: "Unauthorized" })),
        });
      }

      function error(message) {
        resolve({
          status: 400,
          text: () => Promise.resolve(JSON.stringify({ message })),
        });
      }

      function isAuthenticated() {
        return opts.headers["Authorization"] === "Bearer fake-jwt-token";
      }

      function body() {
        return opts.body && JSON.parse(opts.body);
      }
    });
  };
}
