import type { NextPage } from 'next'
import { useState, useEffect, useContext } from 'react';
import { Form, Button, Modal, Collapse } from 'react-bootstrap'
import Layout from '../../../components/Layout'
import { useForm } from "react-hook-form";
import Link from 'next/link';
import { useRouter } from 'next/router';
import ReactMarkdown from "react-markdown"
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import AuthContext from '../../../context/authContext';
import Cookies from 'js-cookie';

interface BlogPost {
  title: String,
  body: String,
  tags: String[],
  author: String
}

const UpdatePost: NextPage<BlogPost> = (props) => {
  const authCtx = useContext(AuthContext);
  const [show, setShow] = useState(false);
  const [ready, setReady] = useState(false);
  const [bodyText, setBodyText] = useState('');
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();

  // Initialize form data
  useEffect(() => {
    // Function to initialize form values (because of the nature of edit)
    async function getPostData() {
      if(router.isReady) {
        const res = await fetch(`https://maxwellyu-blog.herokuapp.com/api/articles/${router.query.postId}`);
        const data = await res.json();
        const canEdit = authCtx.isAuthenticated && (data.author === authCtx.username || authCtx.role === 0)
        if (!canEdit) { router.back() }
        setBodyText(data.body);
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
          headers: {
            'Content-Type': 'application/json',
            'authentication': `${Cookies.get('token')}`
          },
          body: JSON.stringify({ title: data.title, body: data.body })
        })
        .then((res) => {
          setShow(true);
          setTimeout(() => router.push(`/blog/posts/${router.query.postId}`), 1000);
          setTimeout(() => setShow(false), 1000)
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
          <Form.Control 
            disabled={!ready}
            isInvalid={errors.title}
            as='textarea' rows={6}
            {...register("body", { required: true, onChange: (e) => setBodyText(e.target.value) })}
          />
          {errors.title && <Form.Text className='text-danger'>This field is required</Form.Text>}
        </Form.Group>

        {/* Text Preview */}
        <Form.Group className='my-3'>
          {open && <BsFillEyeFill onClick={() => setOpen(!open)}/>}
          {!open && <BsFillEyeSlashFill onClick={() => setOpen(!open)}/>}
          <Form.Label className='ms-2' onClick={() => setOpen(!open)}>Preview</Form.Label>
          <Collapse in={open} dimension='height'>
            <div className={`${bodyText ? 'border border-secondary rounded px-2' : ''}`}>
              <ReactMarkdown>{`${bodyText}`}</ReactMarkdown>
            </div>
          </Collapse>
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
      </Modal>
    </Layout>
  </>
}

export default UpdatePost