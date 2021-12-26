import type { NextPage } from 'next'
import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { useForm } from "react-hook-form";
import Link from 'next/link';
import Router from 'next/router'

interface BlogPost {
  title: string,
  image: Array<any>,
  body: string,
  tags: string[]
}

const CreatePost: NextPage = () => {
  const [show, setShow] = useState(false);
  const [fileTooLarge, setFileTooLarge] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = async (data: BlogPost) => {
    try{
      console.log('Submiting')
      setFileTooLarge(false);
      if(data.image[0].size >= 1048576){
        setFileTooLarge(true);
        return console.log('File is too large');
      } else {
        const formData = new FormData;
        formData.append('image', data.image[0]);
        formData.append('title', data.title);
        formData.append('body', data.body);
        formData.append('tags', JSON.stringify(['tag01']));
  
        const res = await fetch('https://maxwellyu-blog.herokuapp.com/api/articles', {
          method: 'POST',
          body: formData
        }).then(() => {
          setShow(true);
          setTimeout(() => Router.push('/blog'), 2000);
        })
      }
    } catch(err) {
      console.log(err);
      console.log('Request ended with an error')
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

          <Form.Group className='mb-3' controlId='image'>
            <Form.Label>Preview Image {`(< 1MB)`}</Form.Label>
            <Form.Control isInvalid={errors.image} type="file" accept="image/*" {...register("image", { required: true })} />
            {errors.image && <Form.Text className='text-danger'>This field is required</Form.Text>}
            {fileTooLarge && <Form.Text className='text-danger'>File size exceeds limit of 1MB.</Form.Text>}
          </Form.Group>

          <Form.Group className='mb-3' controlId='body'>
            <Form.Label>Body - Markdown Syntax</Form.Label>
            <Form.Control isInvalid={errors.content} as='textarea' rows={5} placeholder='Markdown Syntax Applicable' {...register("body", { required: true })} />
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
