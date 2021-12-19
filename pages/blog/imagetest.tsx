import type { NextPage } from 'next'
import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { useForm } from "react-hook-form";
import Link from 'next/link';
import Router from 'next/router'

interface BlogPost {
  name: string,
  image: Array<any>
}

const CreatePost: NextPage = () => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();
  
  const onSubmit = async (data: BlogPost) => {
    console.log(data.image[0])
    try{
      const formData = new FormData();
      formData.append('image', data.image[0]);
      formData.append('name', data.name);

      console.log(formData);
      const res = await fetch('http://localhost:4000/api/image', {
        method: 'POST',
        // headers: { 'Content-Type': 'multipart/form-data' },
        body: formData
      })
    } catch(err) {
      console.log(err);
    }
  }

  return <>
    <Layout title="Create Post - Maxwell Yu">
      <div className="mx-5 my-3">
        <h1 className='text-center m-4'>Test image uploading!</h1>
        <Form onSubmit={handleSubmit(onSubmit)} /* enctype='multipart/form' */>
          <Form.Group className='mb-3' controlId='name'>
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' {...register("name", { max: 150, required: true })}/>
          </Form.Group>

          <Form.Group className='mb-3' controlId='image'>
            <Form.Label>Photo</Form.Label>
            <Form.Control type="file" accept="image/*" {...register("image", { required: true })} />
          </Form.Group>

          <Button variant="dark" type='submit'>
            Submit
          </Button>
          <Link href="/blog">
          <Button variant="" type='button'>
            Back
          </Button></Link>
        </Form>

        <Modal show={show} centered>
          <Modal.Header closeButton>
            <Modal.Title>Post Created!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Post created successfully. You will be redirected soon...</Modal.Body>
          <Modal.Footer>
            <Button variant='dark' onClick={() => setShow(false)}>Got it!</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Layout>
  </>
}

export default CreatePost
