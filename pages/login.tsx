import Layout from "../components/Layout";
import { NextPage } from "next";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";
import { useForm } from "react-hook-form";

interface LoginUser {
  username: String,
  password: String
}

const Login: NextPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: LoginUser) => {
    console.log(data)
  }

  return (
    <Layout title="Login">
      <h1 className="text-center m-2">Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Username"
            {...register('username', { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
        </Form.Group>

        <Button variant="dark" type="submit">Login</Button>
        <Link href='/register' passHref>
          <Button variant="secondary" type="button" className='mx-2'>Register</Button>
        </Link>
      </Form>
    </Layout>
  );
};

export default Login;
