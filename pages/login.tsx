import Layout from "../components/Layout";
import { useState } from "react";
import { NextPage } from "next";
import { Form, Button, Modal } from "react-bootstrap";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import router from "next/router";
import cookie from 'js-cookie'

interface LoginUser {
  username: String,
  password: String
}

const Login: NextPage = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failure, setFailure] = useState(''); // Empty string = not failing
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<LoginUser> = async (data) => {
    setLoading(true);
    const response = await fetch('http://localhost:4000/api/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ username: data.username, password: data.password })
    })
    const result = await response.json();

    if(result.error) {
      setFailure(result.error);
    } else {
      setFailure(''); // Success
      setShow(true);
      console.log('Set-Cookie: token=' + result.session)
      cookie.set('token', result.session);
      setTimeout(() => router.push('/blog'), 1000);
      setTimeout(() => setShow(false), 1000);
    }

    setLoading(false);
  }

  return (
    <Layout title="Login">
      <h1 className="text-center m-2">Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            isInvalid={failure !== ''}
            disabled={loading}
            type="text"
            placeholder="Username"
            {...register('username', { required: true })}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            isInvalid={failure !== ''}
            disabled={loading}
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
          />
        </Form.Group>
        
        {failure !== '' && <p className="text-danger">{failure}</p>}
        <Button variant="dark" type="submit" disabled={loading}>{loading ? 'Loading' : 'Login'}</Button>
        <Link href='/register' passHref>
          <Button variant="secondary" type="button" className='mx-2'>Register</Button>
        </Link>
      </Form>

      <Modal show={show} centered>
        <Modal.Header>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>You are logged in. We will redirect you shortly..</Modal.Body>
      </Modal>
    </Layout>
  );
};

export default Login;
