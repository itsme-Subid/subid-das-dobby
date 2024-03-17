import Form from "../components/login/form";

const Login = () => {
  return (
    <div className="grid grid-cols-6 h-screen items-center justify-center">
      <Brand />
      <Form />
    </div>
  );
};

const Brand = () => (
  <div className="brand font-montserrat col-span-2 flex h-full w-full items-center justify-center bg-black text-6xl font-bold text-white">
    <h1>Dobby.</h1>
  </div>
);

export default Login;
