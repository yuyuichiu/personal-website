import type { NextPage } from 'next'
import { Form, Button } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { useForm } from "react-hook-form";
import Link from 'next/link';
import Router from 'next/router'

interface BlogPost {
  title: string,
  description: string,
  content: string
}

const onSubmit = async (data: BlogPost) => {
  try{
    const res = await fetch('http://localhost:4000/api/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    console.log('Successfully created post!');
    Router.push('/blog');

  } catch(err) {
    console.log(err);
  }
}

const CreatePost: NextPage = () => {
  const { register, handleSubmit } = useForm();

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
      </div>
    </Layout>
  </>
}

export default CreatePost
