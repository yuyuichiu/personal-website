import Layout from "../components/Layout";
import type { NextPage } from "next";
import { useState } from 'react'
import { Form, Button, Modal } from "react-bootstrap";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import router from 'next/router';

interface NewUser {
  username: String,
  password: String,
  confirmPassword: String
}

const Register: NextPage = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userOverlap, setUserOverlap] = useState(false);
  const [pwNotMatch, setPwNotMatch] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit: SubmitHandler<NewUser> = (data) => {
    setLoading(true);
    setPwNotMatch(false);
    setUserOverlap(false);

    if(data.password !== data.confirmPassword) {
      setLoading(false);
      setPwNotMatch(true);
      return console.log(errors);
    }

    fetch('http://localhost:4000/api/users/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: data.username,
        password: data.password
      })
    }).then((data) => {
      if (data.ok) {
        setShow(true);
        setTimeout(() => router.push('/login'), 1000);
        setTimeout(() => setShow(false), 1000);
      } else { setUserOverlap(true); }
      setLoading(false);
    }).catch((error) => {
      console.log(error.message);
      setLoading(false);
    })
  }

  return (
    <Layout title="Login">
      <h1 className="text-center m-2">Register an account</h1>
      <Form className='px-3' onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            isInvalid={errors.username}
            disabled={loading}
            placeholder="Enter Username"
            {...register('username', { required: true })}
          />
          {errors.username && <p className='text-danger'>Required.</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            isInvalid={errors.password}
            disabled={loading}
            placeholder="with at least 6 characters"
            {...register('password', { required: true, minLength: 6 })}
          />
          <Form.Text className="text-muted">
              Your password will be masked confidentially with hash function.
          </Form.Text>
          {errors.password && <p className='text-danger'>Please enter a password with at least 6 characters</p>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            isInvalid={pwNotMatch}
            disabled={loading}
            {...register('confirmPassword', { required: true, minLength: 6 })}
          />
          {pwNotMatch && <p className='text-danger'>Password does not match.</p>}
        </Form.Group>

        <Button variant="dark" type="submit">Register!</Button>
        <Link href='/login'><u className="mx-2 underline">Go back</u></Link>
        {userOverlap && <p className='text-danger'>Username has already been taken.</p>}
      </Form>

      <Modal show={show} centered>
        <Modal.Header>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Account Created! You will be redirected shortly..</Modal.Body>
      </Modal>
    </Layout>
  );
};

export default Register;
