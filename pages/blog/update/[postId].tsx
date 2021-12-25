import type { NextPage } from 'next'
import { useState, useEffect } from 'react';
import { Form, Button, Modal } from 'react-bootstrap'
import Layout from '../../../components/Layout'
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { useRouter } from 'next/router';

interface BlogPost {
  title: string,
  body: string,
  tags: string[]
}

const UpdatePost: NextPage<BlogPost> = (props) => {
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  // Initialize form data
  useEffect(() => {
    // Function to initialize form values (because of the nature of edit)
    async function getPostData() {
      if(router.isReady) {
        const res = await fetch(`https://maxwellyu-blog.herokuapp.com/api/articles/${router.query.postId}`);
        const data = await res.json();
        setValue('title', data.title);
        setValue('body', data.body);
        setReady(true);
      } else {
        setValue('body', 'Loading data...');
        return
      }
    }

    getPostData();
  }, [router.isReady])

  const onSubmit = (data: { title: string, body: string }) => {
    if(ready){
      fetch(`https://maxwellyu-blog.herokuapp.com/api/articles/${router.query.postId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ title: data.title, body: data.body })
        })
        .then((res) => {
          setShow(true);
          router.push(`/blog/posts/${router.query.postId}`);
        })
        .catch((error) => console.log(error))
    }
  }

  return <>
    <Layout title="Edit Post - Maxwell Yu">
      <h3 className='text-center m-4'>Editing post...</h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className='mb-3' controlId='title'>
          <Form.Label>Title</Form.Label>
          <Form.Control disabled={!ready} isInvalid={errors.title} type='text' {...register("title", { max: 150, required: true })}/>
          {errors.title && <Form.Text className='text-danger'>This field is required</Form.Text>}
        </Form.Group>

        <Form.Group className='mb-3' controlId='body'>
          <Form.Label>Body</Form.Label>
          <Form.Control disabled={!ready} isInvalid={errors.title} as='textarea' rows={10} {...register("body", { required: true })}/>
          {errors.title && <Form.Text className='text-danger'>This field is required</Form.Text>}
        </Form.Group>

        <Button variant="dark" type='submit'>
          Submit
        </Button>
        <Link href={router.isReady ? `/blog/posts/${router.query.postId}` : '/blog'}>
        <Button variant="" type='button' disabled={!ready}>
          Back
        </Button></Link>
      </Form>

      {/* Popup Widget on update completion */}
      <Modal show={show} centered>
        <Modal.Header closeButton>
          <Modal.Title>Post Updated!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Post updated successfully. You will be redirected soon...</Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={() => setShow(false)}>Got it!</Button>
        </Modal.Footer>
      </Modal>
    </Layout>
  </>
}

export default UpdatePost