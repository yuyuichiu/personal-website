import type { NextPage } from 'next'
import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { useForm } from "react-hook-form";
import Link from 'next/link';
import Router from 'next/router'

interface BlogPost {
  title: string,
  description: string,
  content: string
}

const CreatePost: NextPage = () => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit } = useForm();
  
  const onSubmit = async (data: BlogPost) => {
    try{
      const res = await fetch('https://maxwellyu-blog.herokuapp.com/api/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
      console.log('Successfully created post!');
      setShow(true);
      setTimeout(() => Router.push('/blog'), 2000);
    } catch(err) {
      console.log(err);
    }
  }

  return <>
    <Layout title="Create Post - Maxwell Yu">
      <div className="mx-5 my-3">
        <h1 className='text-center m-4'>Create a post</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className='mb-3' controlId='title'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='text' {...register("title", { max: 150, required: true })}/>
          </Form.Group>
          
          <Form.Group className='mb-3' controlId='description'>
            <Form.Label>Brief Description</Form.Label>
            <Form.Control type='text' {...register("description", { max: 250, required: true })}/>
          </Form.Group>

          <Form.Group className='mb-3' controlId='image'>
            <Form.Control type="file" accept="image/*" {...register("image", { required: true })} />
          </Form.Group>

          <Form.Group className='mb-3' controlId='content'>
            <Form.Label>Content - Markdown Syntax</Form.Label>
            <Form.Control as='textarea' rows={5} {...register("content", { required: true })} />
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
