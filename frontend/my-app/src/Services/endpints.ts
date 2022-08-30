const base = "http://localhost:9000/";
const routes = {
  employees: {
    addEmp: "users",
    getAllEmp: "users",
    updateEmp: (id: number | string) => `users/${id}`,
    deleteEmp: (id: number | string) => `users/${id}`,
  },
};

export { base, routes };
