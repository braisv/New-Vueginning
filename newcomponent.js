Vue.component("newcomponent", {
    template:
    `
      <div>
        <h4>{{message}}</h4>
        <h1>:)</h1>
      </div>
    `,
    data() {
      return {
        message: "Hello from other component!"
      };
    }
  });