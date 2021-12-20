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
  image: Array<any>,
  content: string
}

const CreatePost: NextPage = () => {
  const [show, setShow] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data: BlogPost) => {
    try{
      if(data.image.length > 0){
        if(data.image[0].size >= 1048576){
          return console.log('File is too large');
        }
        
        const formData = new FormData;
        formData.append('image', data.image[0]);
        formData.append('title', data.title);
        formData.append('description', data.description);
        formData.append('content', data.content);
  
        const res = await fetch('https://maxwellyu-blog.herokuapp.com/api/articles', {
          method: 'POST',
          body: formData
        })
      } else {
        console.log(JSON.stringify(data))
        const res = await fetch('https://maxwellyu-blog.herokuapp.com/api/articles', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        })
      }
      
      
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
            <Form.Control isInvalid={errors.title} type='text' {...register("title", { max: 150, required: true })}/>
            {errors.title && <Form.Text className='text-danger'>This field is required</Form.Text>}
          </Form.Group>
          
          <Form.Group className='mb-3' controlId='description'>
            <Form.Label>Brief Description</Form.Label>
            <Form.Control isInvalid={errors.description} type='text' {...register("description", { max: 250, required: true })}/>
            {errors.title && <Form.Text className='text-danger'>This field is required</Form.Text>}
          </Form.Group>

          <Form.Group className='mb-3' controlId='image'>
            <Form.Label>Preview Image</Form.Label>
            <Form.Control type="file" accept="image/*" {...register("image")} />
          </Form.Group>

          <Form.Group className='mb-3' controlId='content'>
            <Form.Label>Content - Markdown Syntax</Form.Label>
            <Form.Control isInvalid={errors.content} as='textarea' rows={5} {...register("content", { required: true })} />
            {errors.content && <Form.Text className='text-danger'>This field is required</Form.Text>}
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
